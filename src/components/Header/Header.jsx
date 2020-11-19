import React from 'react';
import styles from './Header.module.css'
const Header = () => {
    return (
        <div className={styles.header}>
           <div className="container">
           <nav className={styles.items}>
               <div className={styles.searchBox}>
                   <input className="form-control" type="text" placeholder="Search User"/>
               </div>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Contract</a></li>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </nav>
           </div>
        </div>
    );
};

export default Header;