import React, { useEffect, useState } from 'react';
import Hearder from './Hearder';
import Todo from './Todo';
import axios from 'axios'

const List = () => {
    const[arr,Setarr]=useState([])
    const url='https://66124e8d95fdb62f24ee630b.mockapi.io/list'
const getData=()=>{
    
    axios.get(url)
    .then(function(res){
        console.log(res)
        Setarr(res.data)

    })
}
useEffect(()=>{
    getData()
    Setarr(JSON.parse(localStorage.getItem("arr")))},[]
)

const removebyId=(id)=>{
    Setarr(arr.filter(item=>item.id !=id))
    localStorage.setItem("arr",JSON.stringify(arr.filter(item=>item.id !=id)))
    axios.delete(url+'/'+id)
    .then(function(res){
        console.log(res)
    })
    .catch(function(error){
        console.log(error)
    })
}

const add=(text)=>{
    let new_todo={}
    if(arr.length>0){
        Setarr([...arr,{id:arr[arr.length-1].id+1,name:text}])
        localStorage.setItem("arr",JSON.stringify([...arr,{id:arr[arr.length-1].id+1,name:text}]))
        new_todo={id:arr[arr.length-1].id+1,name:text}
    }
    else{
        Setarr([...arr,{id:1,name:text}])
        localStorage.setItem("arr",JSON.stringify([...arr,{id:1,name:text}]))
        new_todo={id:1,name:text}
    }
    axios.post(url,new_todo)
    .then(function(res){
        console.log(res)
    })
    .catch(function(error){
        console.log(error)
    })

}
    return (
        <div className='contain'>
            <Hearder add={add}/>
            <div className='list'>
                {arr.map((item,index)=>(
                    <Todo todo={item} key={index} removebyId={removebyId} />
                ))}

            </div>
        </div>
    );
}

export default List;
