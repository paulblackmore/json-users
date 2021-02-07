import {useEffect, useState} from 'react';
import {userService} from './services';
import UserList from './components/UserList/UserList';
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
      <UserList users={users} />
    </div>
  );
}

export default App;
