import React, { useState } from 'react';

const Hearder = (props) => {
    const [text, setText] = useState('')
    const { add } = props
    const Enterkey = () => {
        add(text)
        setText('')
    }
    return (
        <div>
            <input value={text} placeholder='Enter your todo' onChange={(e) => (setText(e.target.value))} onKeyDown={(e) => {
                if (e.key == 'Enter') {
                    Enterkey()
                } } }></input>
        </div>
    );
}

export default Hearder;
