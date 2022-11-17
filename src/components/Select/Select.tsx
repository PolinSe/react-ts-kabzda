import React, {useState, KeyboardEvent, useEffect} from "react";
import s from './Select.module.css'

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value?: any
    items: ItemType[]
    onChange: (value: any) => void
}

export function Select(props: SelectPropsType) {

    const [collapsed, setCollapsed] = useState<boolean>(false);
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value);

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const toggleItems = () => setCollapsed(!collapsed)
    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItems()
    }
    const onKeyUp = (e:KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp' ) {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    let pretendentElement = e.key === 'ArrowDown'  ? props.items[i+1] : props.items[i-1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        return
                    }
                }
            }
            if(!selectedItem) {
                props.onChange(props.items[0].value)
            }
        }
        if (e.key === 'Escape' || e.key === 'Enter' ) {
            toggleItems()
        }
    }
    return (

        <div className={s.select} tabIndex={0} onKeyUp={onKeyUp}>
            <span className={s.main} onClick={(toggleItems)}>
                {selectedItem && selectedItem.title}
            </span>

            {!collapsed &&
                <div className={s.items}>
                    {props.items.map(i => <div className={s.item + ' ' + (hoveredItem === i ? s.selected : '')}
                                               key={i.value}
                                               onClick={() => onItemClick(i.value)}
                                               onMouseEnter={() => setHoveredElementValue(i.value)}>{i.title}
                    </div>)}
                </div>
            }
        </div>
    );
}