import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    changeCollapsed: () => void
}

type AccordionTitlePropsType = {
    title: string
    changeCollapsed: () => void
}

function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle
                title={props.titleValue}
                changeCollapsed={props.changeCollapsed}
            />
            {!props.collapsed && <AccordionBody/>}
        </div>
    );
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={props.changeCollapsed}>
            --{props.title}--
        </h3>
    )
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

export default Accordion;