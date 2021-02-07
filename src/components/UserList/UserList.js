import React, {useMemo} from 'react'
import User from '../User/User'
import classes from './UserList.module.css';

const UserList = ({ users }) => {
	console.log('rendering', users)
		
	if (users && users.length === 0) {
		return <p className={classes.loading}>Loading data...</p>;
	}

	return users.map((user, index) => <User key={index} user={user} /> )
}

export default UserList;
