import React from 'react';
import styles from './dropdown.module.css'

function Dropdown(props) {
    const {data, setSelected, setOpen} = props
    const countries = Object.keys(data)
    
    return (
        <div className={styles.dropdown}>
            {['Global', ...countries].map((countryName, index) => {
                return <div key={index} className={styles.dropdownItem}
                onClick={() => {
                    setSelected(countryName) 
                    setOpen(false)
                    }}>
                    {countryName}
                </div>
            })}
        </div> 
    );
}

export default Dropdown;