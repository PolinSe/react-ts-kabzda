import React, {useState} from 'react';
import s from './App.module.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from './components/OnOff/OnOff';
import {RatingValueType} from "./components/Rating/Rating"
import {UncontrolledOnOff} from './components/UncontrolledOnOff/UncontrolledOnOff';
import {UncontrolledRaiting} from './components/UncontrolledRating/UncontrolledRating';

function App() {

    let [ratingValue, setRatingValue] = useState<0 | 1 | 2 | 3 | 4 | 5>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [on, setOn] = useState(false)

    const changeRatingValue = (value: RatingValueType) => setRatingValue(value)
    const changeCollapsed = () => setAccordionCollapsed(!accordionCollapsed)

    return (
        <div className={s.app}>

            {/*<OnOff on={on} changeIndicator={setOn}/>*/}

            <UncontrolledOnOff onChange={setOn}/> {on.toString()}

            <Accordion
                titleValue={'Menu'}
                changeCollapsed={changeCollapsed}
                collapsed={accordionCollapsed}
                items={[{name: 'Anna', value: 1}, {name: 'Olga', value: 2}, {name: 'Helen', value: 3}, {
                    name: 'Kate',
                    value: 4
                }]}
                onClick={(value: any) => alert(value)}
            />

            {/*<UncontrolledAccordion titleValue={'Menu'}/>*/}
            {/*<UncontrolledAccordion titleValue={'Users'} />*/}

            <PageTitle title={'This is APP component'}/>
            <PageTitle title={'My friends'}/>

            Article 1: ControlledRating
            <Rating value={ratingValue} onClick={changeRatingValue}/>

            {/*<Accordion titleValue={'Menu'} collapsed={true}/>*/}
            {/*<Accordion titleValue={'Users'} collapsed={false}/>*/}

            {/*Article 2*/}
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}

            <div>--------------</div>
            Article 3: UncontrolledRating
            <UncontrolledRaiting defaultValue={1} onChange={setRatingValue}/>

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
