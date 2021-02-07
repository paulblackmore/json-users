import React from 'react';
import classes from './User.module.css';

const User = ({ user }) => {
  return(
    <main className={classes.container}>
      <section className={classes.title}>
        <h2>{user.name}</h2>
        <div className={classes.info}>
          <span>{user.username}</span>
          <span>{user.email}</span>
          <span>{user.website}</span>
        </div>
      </section>
        <div className={classes.btnSection}>

        </div>
    </main>
  )
}

export default User;