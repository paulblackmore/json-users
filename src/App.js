import {useEffect, useState} from 'react';
import {userService} from './services';
import UserList from './components/UserList/UserList';
import UserForm from './components/UserForm/UserForm';
import './App.css';

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getUsers = async() => {
      let users = await userService.get('users')
      setUsers(users)
    }

    getUsers()
  }, [])

  return (
    <div className="App">
			<h1>It's business time...</h1>
      <UserForm />
      <UserList users={users} />
    </div>
  );
}

export default App;
