import React from 'react';
import classes from './User.module.css';

const User = ({ user }) => {
  return(
    <main className={classes.container}>
      <section className={classes.title}>
        <h2>{user.name}</h2>
        <span>{user.username}</span>
      </section>
      <footer>
        <span>{user.email}</span>
        <span>{user.website}</span>
      </footer>
    </main>
  )
}

export default User;