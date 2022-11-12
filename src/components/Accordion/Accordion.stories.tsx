import React, {useState} from 'react';
import {Accordion} from './Accordion';
import {action} from '@storybook/addon-actions';

export default {
  title: 'Accordion',
  component: Accordion,
}

const callback = action('collapse or uncollapse')

export const MenuCollapsedMode = () => <Accordion titleValue={'Menu'} collapsed={true} changeCollapsed={callback}/>;
export const UsersUncollapsedMode = () => <Accordion titleValue={'Users'} collapsed={false} changeCollapsed={callback}/>;

export const ModeChanging = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  return <Accordion titleValue={'New title'} collapsed={collapsed} changeCollapsed={()=>setCollapsed(!collapsed)}/>
}