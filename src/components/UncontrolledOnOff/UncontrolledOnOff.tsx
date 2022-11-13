import React, {useState} from "react";

type OnOffType = {
    defaultOn?: boolean
    onChange: (on: boolean) => void
}

export const UncontrolledOnOff = (props: OnOffType) => {

    let [on, setOn] = useState(props.defaultOn ? props.defaultOn : false)

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

    const onCliked = () => {
        setOn(true)
        props.onChange(true)
    }

    const offCliked = () => {
        setOn(false)
        props.onChange(false)
    }

    return (
        <div style={buttons}>
            <div style={onStyle} onClick={onCliked}> On</div>
            <div style={offStyle} onClick={offCliked}> Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}
