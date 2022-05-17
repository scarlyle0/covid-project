import React from 'react';
import styles from './navbar.module.css'

//export default 
function Navbar(props) {

    return (
        <div className={`${styles.navbar} ${styles.secondStyle}`}>
            Cartman 
        </div>
    );
}

export default Navbar;