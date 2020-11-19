import React from 'react';
import styles from './Cart.module.css'
import {AiFillDelete} from 'react-icons/ai';

const Cart = ({ selectedUsers, handleConnectUser}) => {
    const totalSalary = selectedUsers.reduce((sum, user)=> sum + parseInt(user.salary.replace(/,/g, "")), 0);
    return (
        <div className="container mb-4">
            <div className={styles.cart}>
                <h1 className="text-center mb-4">Connection summary</h1>
                <h4 className="ml-4">Total Connections : {selectedUsers.length} </h4>
                <div>
                   <ul className="list-group">
                   {selectedUsers.map(user => (
                        <li 
                        key={user.id}
                        className="list-group-item d-flex justify-content-between align-items-center"
                        >
                            <p className="text-primary font-weight-bold">{user.name}</p>
                            <span className="badge badge-primary badge-pill"> $ {user.salary} </span>
                            <button className="btn" onClick={() => handleConnectUser(user, user.index, "DISCONNECT")}><AiFillDelete/></button>
                        </li>
                        ))}
                   </ul>
                </div>
                 <h4 className="ml-4 text-center">Total Salary : $ {totalSalary}</h4>
            </div>
        </div>
    );
};

export default Cart;