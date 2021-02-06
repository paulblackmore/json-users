import { useEffect, useState, useMemo } from 'react';
import UserList from './components/UserList/UserList';
import './App.css';

const fetchData = (type) => {
  return fetch(`https://jsonplaceholder.typicode.com/${type}`)
    .then(response => response.json())
}

function App() {
  const [users, setUsers] = useState([])

  const usersRef = useMemo(() => users, [users])

  useEffect(() => {
    const getUsers = async() => {
      let users = await fetchData('users')
      setUsers(users)
    }

    getUsers()
  }, [])

  return (
    <div className="App">
      <h1>It's business time...</h1>
      <UserList users={usersRef} />
    </div>
  );
}

export default App;
