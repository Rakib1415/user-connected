import React from 'react';
import styles from './Header.module.css'
const Header = (props) => {
    return (
        <div className={styles.header}>
           <div className="container">
           <nav className={styles.items}>
               <div className={styles.searchBox}>
                   <input onChange={(e)=>props.handleSearch(e.target.value)} className="form-control" value={props.searchTerm} type="text" placeholder="Search User"/>
                   <button onClick={props.toggleUserForm} className="btn btn-secondary mx-2">Add User</button>
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