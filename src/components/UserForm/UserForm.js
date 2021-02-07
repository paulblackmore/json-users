import React, {useState} from 'react';
import {userService} from '../../services'
import classes from './UserForm.module.css'

const INITIAL_STATE = {
  name: '',
  username: '',
  email: '',
  website: ''
}

const UserForm = ({ handleUpdateUser }) => {
  const [user, setUser] = useState(INITIAL_STATE)

  const handleChange = name => event => {
    setUser({...user, [name]: event.target.value})
  }

  const handleSubmit = async(event) => {
    event.preventDefault();
    setUser(INITIAL_STATE)

    if (user.id) {
      return await userService.update(user).then(handleUpdateUser).catch(err => {
        console.log('error creating', err)
      })
    }

    return await userService.create(user).then(handleUpdateUser).catch(err => {
      console.log('error creating', err)
    })
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