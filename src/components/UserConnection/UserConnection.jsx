import React,{useEffect, useState} from 'react';
import fakeData from '../../data/fakeData'
import UserLists from '../UserLists/UserLists';
import Header from '../Header/Header'

const UserConnection = () => {
    const [users, setUsers] = useState([])
    const [selectedUsers, setSelectedUsers] = useState([])
    const [isConnections, setIsConnections] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    

    useEffect(()=>{
       setUsers(fakeData)
    },[]);

    const handleConnectUser = (user, index, value) => {
        
        if(value === 'CONNECT'){
            user.index = index;
            const newSelectedUsers = [...selectedUsers, user];
            setSelectedUsers(newSelectedUsers);
            const newIsConnections = [...isConnections];
            newIsConnections[index] = true;
            setIsConnections(newIsConnections)
        }
        else if(value==="DISCONNECT"){
            const users = selectedUsers.filter(u => u.id !== user.id);
            setSelectedUsers(users);
            const newIsConnections = [...isConnections];
            newIsConnections[index] = !newIsConnections[index];
            setIsConnections(newIsConnections)
        }      
    }
    const handleSearch = term => {
        // console.log(term)
        setSearchTerm(term)
        // const newUsers = searchPerform()
        // setUsers(newUsers)
    }
    function searchPerform(userData){
       return userData.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    // console.log(selectedUsers)
    
    return (
        <div>
            <Header 
            searchTerm={searchTerm}
            handleSearch={handleSearch}
            />
            <UserLists
            users={searchPerform(users)}
            handleConnectUser={handleConnectUser}
            selectedUsers={selectedUsers}
            isConnections={isConnections}
            />
        </div>
    );
};

export default UserConnection;