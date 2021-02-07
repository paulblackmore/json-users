import React, {useState} from 'react';
import classes from './UserForm.module.css'

const UserForm = () => {
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    website: ''
  })

  const handleChange = name => event => {
    setUser({
      ...user,
      [name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return(
    <form onSubmit={handleSubmit} className={classes.container}>
      {Object.keys(user).map((key, index) => {
        return(
          <input
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