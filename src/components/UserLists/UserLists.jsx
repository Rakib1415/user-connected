import React from 'react';
import Cart from '../Cart/Cart';
import UserItem from '../UserItem/UserItem';

const UserLists = ({users,isConnections, handleConnectUser, selectedUsers}) => {

    return (
        <div className="container my-4">
          <div className="userLists d-flex flex-wrap justify-content-center">
          {
               users.map((user,index) => (
                   <UserItem
                   key={user.id}
                   index={index}
                   user={user}
                   isConnections={isConnections}
                   handleConnectUser={handleConnectUser}
                   />
               ))
           } 
          </div>
          <Cart selectedUsers={selectedUsers}
          handleConnectUser={handleConnectUser}
          />
        </div>
    );
};

export default UserLists;