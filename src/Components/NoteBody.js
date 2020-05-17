import React from 'react';

const NoteBody = (props) => (
    <textarea  placeholder="Escribe tu nota" onChange={props.escribiendo}
    onKeyDown={props.pulsarenter}
    value={props.value}
    
    style={{
        height: '15em',
        width: '25em',
        margin: '10px',
        border: '1px solid grey'

    }}
    ></textarea>
)

export default NoteBody;