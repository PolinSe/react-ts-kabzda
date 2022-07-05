import React, {useState} from "react";

type OnOffType = {
    // on: boolean
}

export const OnOff = (props: OnOffType) => {
    let [on, setOn] = useState(false)
    const buttons = {
        display: 'flex',
        alignItems: 'center',
        marginTop: '20px',
    }
    const onStyle = {
        padding: '15px',
        border: '1px solid black',
        backgroundColor: on ? 'green' : 'white',
    }
    const offStyle = {
        padding: '15px',
        border: '1px solid black',
        backgroundColor: on ? 'white' : 'red',
    }
    const indicatorStyle = {
        marginLeft: '10px',
        width: '20px',
        height: '20px',
        border: '1px solid black',
        borderRadius: '50%',
        backgroundColor: on ? 'green' : 'red',
    }

    return (
        <div style={buttons}>
            <div style={onStyle} onClick={ () => {setOn(true)}}> On </div>
            <div style={offStyle} onClick={ () => {setOn(false)}}> Off </div>
            <div style={indicatorStyle}></div>
        </div>
    )
}
