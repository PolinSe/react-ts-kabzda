import React from "react";

type OnOffType = {
    on: boolean
    changeIndicator: (on:boolean) => void
}

export const OnOff = (props: OnOffType) => {

    const buttons = {
        display: 'flex',
        alignItems: 'center',
        marginTop: '20px',
    }
    const onStyle = {
        padding: '15px',
        border: '1px solid black',
        backgroundColor: props.on ? 'green' : 'white',
    }
    const offStyle = {
        padding: '15px',
        border: '1px solid black',
        backgroundColor: props.on ? 'white' : 'red',
    }
    const indicatorStyle = {
        marginLeft: '10px',
        width: '20px',
        height: '20px',
        border: '1px solid black',
        borderRadius: '50%',
        backgroundColor: props.on ? 'green' : 'red',
    }

    return (
        <div style={buttons}>
            <div style={onStyle} onClick={() => {
                props.changeIndicator(true)
            }}> On
            </div>
            <div style={offStyle} onClick={() => {
                props.changeIndicator(false)
            }}> Off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    )
}
