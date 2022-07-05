import React from 'react';
import s from './App.module.css';
import Accordion from "./components/Accordion/Accordion";
import {Raiting} from "./components/Raiting/Raiting";
import {OnOff} from './components/OnOff/OnOff';

function App() {
    return (
        <div className={s.app}>
            <PageTitle title={'This is APP component'}/>
            <PageTitle title={'My friends'}/>
            Article 1
            <Raiting value={3}/>
            <Accordion titleValue={'Menu'} collapsed={true}/>
            <Accordion titleValue={'Users'} collapsed={false}/>
            Article 2
            <Raiting value={0}/>
            <Raiting value={1}/>
            <Raiting value={2}/>
            <Raiting value={3}/>
            <Raiting value={4}/>
            <Raiting value={5}/>
            <OnOff/>
            <OnOff/>

        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{ props.title }</h1>
}

export default App;
