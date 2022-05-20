import React, {useState} from 'react';
import styles from './navbar.module.css'


//export default 
function Navbar(props) {
    const {selected, 
        open, 
        setOpen,
        loading,
        error,
    } = props

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
                <div className={styles.subText}>{selected}</div>
                }
            <i style={{ transform: `${open ? 'rotate(180deg)' : ''}`, transitionDuration: '300ms'}} className="fa-solid fa-chevron-down"></i>
        </div>
    );
}

export default Navbar;