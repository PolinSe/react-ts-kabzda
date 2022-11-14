import React from "react";

type ItemType = {
    name: string
    value: any
}
type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}
type AccordionTitlePropsType = {
    title: string
    changeCollapsed: () => void
}
type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    changeCollapsed: () => void
    items: ItemType[]
    onClick: (value: any) => void
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle
                title={props.titleValue}
                changeCollapsed={props.changeCollapsed}
            />
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    );
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={(e) => props.changeCollapsed()}>
            --{props.title}--
        </h3>
    )
}

function AccordionBody(props: AccordionBodyPropsType) {

    return (
        <ul>
            {props.items.map((i, index) => <li onClick={() =>
                props.onClick(i.value)
            } key={index}>{i.name}</li>)}
        </ul>
    );
}