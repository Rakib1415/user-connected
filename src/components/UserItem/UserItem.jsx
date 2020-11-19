import React from 'react';
import styles from './UserItem.module.css'
import { AiFillDollarCircle, AiOutlineMail, AiFillPhone, AiOutlineUsergroupAdd} from "react-icons/ai";
import {HiOutlineUserRemove} from 'react-icons/hi'

const UserItem = ({user,index, isConnections, handleConnectUser}) => {
    const {name, email, phone, image, background, salary} = user
    return (
                <div className={styles.user}>
                   <div className={styles.imgContainer}>
                      <img className={styles.bgImage} src={background} alt="background"/>
                      <img className={styles.profileImage} src={image} alt="profile"/>
                  </div>
            <div className={styles.title}>
               <h4>{name}</h4>
            </div>
            <div className={styles.info}>
                <small><AiFillDollarCircle/>{salary}</small>
                 <small><AiOutlineMail/>{email}</small>
                 <small><AiFillPhone/>{phone}</small>
            </div>
            <div className="text-center">
            <button 
            type="button"
            value={isConnections[index] ? "DISCONNECT" : "CONNECT"}
            onClick={(e)=> handleConnectUser(user, index, e.target.value)} 
            className="btn btn-outline-primary px-5 mb-4"
            >
              {
              isConnections[index] ? 
              (<><HiOutlineUserRemove/> DISCONNECT</> )
              :
              ( <><AiOutlineUsergroupAdd/> CONNECT</>)
              }
            </button>
            </div>
            </div>
    );
};

export default UserItem;