import React, {useState} from 'react';
import {Accordion} from './Accordion';
import {action} from '@storybook/addon-actions';

export default {
    title: 'Accordion',
    component: Accordion,
}

const callback = action('collapse or uncollapse')
const onClickCallback = action('item was clicked')

export const MenuCollapsedMode = () => <Accordion titleValue={'Menu'} collapsed={true} changeCollapsed={callback}
                                                  items={[]} onClick={onClickCallback}/>;

export const UsersUncollapsedMode = () => <Accordion titleValue={'Users'} collapsed={false} changeCollapsed={callback}
                                                     items={[{name: 'Anna', value: 1}, {
                                                         name: 'Olga',
                                                         value: 2
                                                     }, {name: 'Helen', value: 3}, {name: 'Kate', value: 4}]}
                                                     onClick={onClickCallback}/>;

export const ModeChanging = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    return <Accordion
        titleValue={'New title'}
        collapsed={collapsed}
        changeCollapsed={() => setCollapsed(!collapsed)}
        items={[{name: 'Anna', value: 1}, {name: 'Olga', value: 2}, {name: 'Helen', value: 3}, {
            name: 'Kate',
            value: 4
        }]}
        onClick={(value: any) => alert(`user id: ${value}`)}
    />
}