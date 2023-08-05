import React from 'react';
import styles from './DigitalClock.module.css';

type PropsType = {
    date: Date
}
export const DigitalClock:React.FC<PropsType> = ({date}) => {

    return (
        <div className={styles.digital}>{date.toLocaleTimeString()}</div>
    );

};
