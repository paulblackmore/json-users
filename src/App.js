import { useEffect, useState } from 'react';
import UserList from './components/UserList/UserList';
import './App.css';

const fetchData = (type) => {
  return fetch(`https://jsonplaceholder.typicode.com/${type}`)
    .then(response => response.json())
}

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getUsers = async() => {
      let users = await fetchData('users')
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
