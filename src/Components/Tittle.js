import React , { Fragment }from 'react';



const Title = (props) => (
    <Fragment>
    <p style={{display: 'inline', fontWeight:'bold'}} onClick={props.clicked}>Titulo de la nota: </p>
    <p style={{display: 'inline'}}>{props.title}</p><br />
    </Fragment>
)

export default Title