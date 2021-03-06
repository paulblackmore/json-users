import {useEffect, useState} from 'react';
import {userService} from './services';
import UserList from './components/UserList/UserList';
import UserForm from './components/UserForm/UserForm';
import './App.css';

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getUsers = async() => {
      await userService.get('users').then(setUsers).catch(err => {
        console.log('error getting users', err)
      })
    }

    getUsers()
  }, [])

  const handleUpdateUser = (user) => {
    setUsers([...users, user])
  }

  return (
    <div className="App">
			<h1>It's business time...</h1>
      <UserForm 
        handleUpdateUser={handleUpdateUser} 
      />
      <UserList 
        users={users}
      />
    </div>
  );
}

export default App;
