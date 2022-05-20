import React from 'react';
import styles from './cases.module.css'
import useFetchData from '../hooks/fetchData';

function Main(props) {
    const { selected, data } = props
    const cases = data[selected].All
    const totals = {
        confirmed: cases.confirmed,
        recovered: cases.confirmed - cases.deaths,
        deaths: cases.deaths
    }

    return(
            <div className={styles.graph}>
                {Object.keys(totals).map((val, index) => {
                    return <div key = {index} className={styles.bar}>
                        {val}
                    </div>
                })}
            </div>
        )
    }

export default Main;