import React, {useState} from 'react';
import styles from './navbar.module.css'
import useFetchData from '../hooks/fetchData';


//export default 
function Navbar(props) {
    const {selected, setSelected, open, setOpen} = props

    const countriesUrl = 'https://covid19.mathdro.id/api/countries'
    const {data, loading, error} = useFetchData(countriesUrl)
    
    console.log(open)
    if (error){
        return <div>
            ERROR
        </div>
    }
    return (
        <div className={styles.navbar} onClick={() => setOpen(!open)} >
            
            {loading ?
                <div>Global</div> :
                <div>{selected}</div>
                }
            <i style={{ transform: `${open ? 'rotate(180deg)' : ''}`, transitionDuration: '300ms'}} className="fa-solid fa-chevron-down"></i>
        </div>
    );
}

export default Navbar;