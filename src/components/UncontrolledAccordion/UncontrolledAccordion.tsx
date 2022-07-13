import React, {useState} from "react";

type UncontrolledAccordionPropsType = {
    titleValue: string
}

type AccordionTitlePropsType = {
    title: string
    callBack: () => void
}

export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {

    let [collapsed, setCollapsed] = useState(false)

    return (
        <div>
            <AccordionTitle title={props.titleValue} callBack={() => setCollapsed(!collapsed)}/>

            {!collapsed && <AccordionBody/>}
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

