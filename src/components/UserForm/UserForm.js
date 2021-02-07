import React, {useState} from 'react';
import classes from './UserForm.module.css'

const INITIAL_STATE = {
  name: '',
  username: '',
  email: '',
  website: ''
}

const UserForm = ({ addUser }) => {
  const [user, setUser] = useState(INITIAL_STATE)

  const handleChange = name => event => {
    setUser({...user, [name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setUser(INITIAL_STATE)
    addUser(user)
  }

  return(
    <form onSubmit={handleSubmit} className={classes.container}>
      {Object.keys(user).map((key, index) => {
        return(
          <input
            required
            key={index}
            name={key}
            value={user[key]}
            placeholder={key}
            onChange={handleChange(key)}
          />
        )
      })}
      <button>Add User</button>
    </form>
  )
}

export default UserForm;