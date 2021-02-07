import React, {useMemo} from 'react'
import User from '../User/User'
import classes from './UserList.module.css';

const UserList = ({ users }) => {
	const usersRef = useMemo(() => users, [users])


	console.log(users)
		
	if (users && users.length === 0) return null;
	else return (
    <div className={classes.container}>
			<h1>It's business time...</h1>
			{usersRef.map((user, index) => <User key={index} user={user} /> )}
    </div>
  );
}

export default React.memo(UserList);
