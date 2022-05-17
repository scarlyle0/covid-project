import React from 'react';
//import styles from './navbar.module.css'
import useFetchData from '../hooks/fetchData';


//export default 
function Navbar(props) {

    const countriesUrl = 'https://covid19.mathdro.id/api/countries'
    const {data, loading, error} = useFetchData(countriesUrl)

    if (error){
        return <div>
            ERROR
        </div>
    }
    return (
        <div>
            {loading ?
                <div>Global</div> :
                <div>data</div>
                }
        </div>
    );
}

export default Navbar;