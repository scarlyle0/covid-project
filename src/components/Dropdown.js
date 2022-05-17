import React from 'react';
import styles from './dropdown.module.css'

function Dropdown(props) {
    const {data, setSelected} = props
    const countries = data.countries.map(country => country.name)
    return (
        <div className={styles.dropdown}>
            {countries.map((countryName, index) => {
                return <div key={index} className={styles.dropdownItem}>
                    {countryName}
                </div>
            })}
        </div> 
    );
}

export default Dropdown;