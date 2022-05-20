import React from 'react';
import useFetchData from '../hooks/fetchData';

function Main(props) {
    const { selected, data } = props
    const cases = data[selected]

    if (selected === 'Global'){
        return <div>Global</div>
    }


    return(
            <div>
                Main
            </div>
        )
    }

export default Main;