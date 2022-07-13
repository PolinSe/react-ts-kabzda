import React, {useState} from 'react';
import s from './App.module.css';
import Accordion from "./components/Accordion/Accordion";
import {Raiting} from "./components/Raiting/Raiting";
import {OnOff} from './components/OnOff/OnOff';
import {RatingValueType} from "./components/Raiting/Raiting"
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledRaiting} from './components/UncontrolledRaiting/UncontrolledRaiting';
import {UncontrolledOnOff} from './components/UncontrolledOnOff/UncontrolledOnOff';

function App() {

    let [raitingValue, setRaitingValue] = useState<0 | 1 | 2 | 3 | 4 | 5>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [on, setOn] = useState(false)

    const changeRaitingValue = (value: RatingValueType) => setRaitingValue(value)
    const changeCollapsed = () => setAccordionCollapsed(!accordionCollapsed)

    return (
        <div className={s.app}>

            {/*<OnOff on={on} changeIndicator={setOn}/>*/}

            <UncontrolledOnOff onChange={setOn}/> {on.toString()}

            <Accordion
                titleValue={'Menu'}
                changeCollapsed={changeCollapsed}
                collapsed={accordionCollapsed}
            />

            {/*<UncontrolledAccordion titleValue={'Menu'}/>*/}
            {/*<UncontrolledAccordion titleValue={'Users'} />*/}

            <PageTitle title={'This is APP component'}/>
            <PageTitle title={'My friends'}/>

            Article 1: ControlledRaiting
            <Raiting value={raitingValue} onClick={changeRaitingValue}/>

            {/*<Accordion titleValue={'Menu'} collapsed={true}/>*/}
            {/*<Accordion titleValue={'Users'} collapsed={false}/>*/}

            {/*Article 2*/}
            {/*<Raiting value={0}/>*/}
            {/*<Raiting value={1}/>*/}
            {/*<Raiting value={2}/>*/}
            {/*<Raiting value={3}/>*/}
            {/*<Raiting value={4}/>*/}
            {/*<Raiting value={5}/>*/}

            <div>--------------</div>
            Article 3: UncontrolledRaiting
            <UncontrolledRaiting/>

        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}

export default App;
