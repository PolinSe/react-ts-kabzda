import React, {useReducer, useState} from "react";
import {reducer, TOGGLE_COLLAPSED} from './reducer';

type UncontrolledAccordionPropsType = {
        titleValue: string
}

type AccordionTitlePropsType = {
    title: string
    callBack: () => void
}

export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {

    // let [collapsed, setCollapsed] = useState(false)
    let [state, dispatch] = useReducer(reducer, {collapsed: false})

    return (
        <div>
            {/*<AccordionTitle title={props.titleValue} callBack={() => setCollapsed(!collapsed)}/>*/}
            <AccordionTitle title={props.titleValue} callBack={() => dispatch({type: TOGGLE_COLLAPSED})}/>

            {!state.collapsed && <AccordionBody/>}
        </div>
    );
}

function AccordionTitle(props: AccordionTitlePropsType) {


    return <h3 onClick={() => props.callBack()}>--{props.title}--</h3>
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}

