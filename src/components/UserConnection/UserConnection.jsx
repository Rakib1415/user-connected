import React,{useEffect, useState} from 'react';
import {Modal, ModalHeader, ModalBody} from 'reactstrap'
import fakeData from '../../data/fakeData'
import UserLists from '../UserLists/UserLists';
import Header from '../Header/Header'
import CreateUserForm from '../CreateUserForm/CreateUserForm';
import shortid from 'shortid';

const UserConnection = () => {
    const [users, setUsers] = useState([])
    const [selectedUsers, setSelectedUsers] = useState([])
    const [isConnections, setIsConnections] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [isOpenForm, setIsOpenForm] = useState(false)
    

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
    const toggleUserForm = ()=> {
        setIsOpenForm(!isOpenForm)
    }

    const addUserForm = user => {
        user.id = shortid.generate()
        user.userName = user.name;
        user.background = "https://i.pinimg.com/736x/42/11/83/421183ad16ad430a9c6ee3e91b72974e.jpg";
        user.image = "https://img.freepik.com/free-photo/mand-holding-cup_1258-340.jpg?size=626&ext=jpg";
        const newUsers = [user,...users];
        setUsers(newUsers)
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
            toggleUserForm={toggleUserForm}
            />
            <UserLists
            users={searchPerform(users)}
            handleConnectUser={handleConnectUser}
            selectedUsers={selectedUsers}
            isConnections={isConnections}
            />
            <Modal isOpen={isOpenForm} toggle={toggleUserForm}>
                <ModalHeader toggle={toggleUserForm}>
                    Create new User
                </ModalHeader>
                <ModalBody>
                    <CreateUserForm
                    addUserForm={addUserForm}
                    />
                </ModalBody>
            </Modal>
        </div>
    );
};

export default UserConnection;