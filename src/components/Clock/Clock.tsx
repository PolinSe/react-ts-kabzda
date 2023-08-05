import React, {useEffect, useState} from 'react';
import styles from './Clock.module.css'
import {DigitalClock} from './DigitalClock';
import {AnalogClock} from './AnalogClock';


type PropsType = {
    isAnalog: boolean
}
export const Clock:React.FC<PropsType> = ({isAnalog}) => {

    const now = new Date()
    const [date, setDate] = useState(now)

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => clearInterval(intervalID)
    }, [])

    return <div className={styles.App}>

        {isAnalog
            ? <AnalogClock date={date}/>
            : <DigitalClock date={date}/>
        }
    </div>
};
