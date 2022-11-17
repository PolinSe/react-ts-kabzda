import React, {useState} from 'react';
import {Select} from './Select';

export default {
    title: 'Select',
    component: Select
}

export const BaseExample = () => {
    const [value, setValue] = useState('3')
    return <Select
        value={value}
        items={[{title: 'Anna', value: '1'}, {title: 'Olga', value: '2'}, {title: 'Helen', value: '3'}, {
            title: 'Kate',
            value: '4'
        }]}
        onChange={setValue}
    />
}

export const WithoutValueExample = () => {
    const [value, setValue] = useState(null)
    return <Select
        value={value}
        items={[{title: 'Anna', value: '1'}, {title: 'Olga', value: '2'}, {title: 'Helen', value: '3'}, {
            title: 'Kate',
            value: '4'
        }]}
        onChange={setValue}
    />
}