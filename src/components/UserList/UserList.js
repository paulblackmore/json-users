import React from 'react'
import User from '../User/User'
import classes from './UserList.module.css';

const UserList = ({ users }) => {
	console.log('redner list')
		console.log(users)
		
	if (users && users.length === 0) return null;
	else return (
    <div className={classes.container}>
			{users.map((user, index) => <User key={index} user={user} /> )}
    </div>
  );
}

export default React.memo(UserList);
