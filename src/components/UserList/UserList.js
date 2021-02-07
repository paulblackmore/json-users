import React, {useMemo} from 'react'
import User from '../User/User'

const UserList = ({ users }) => {
	console.log('rendering', users)
		
	if (users && users.length === 0) return null;
	else return users.map((user, index) => <User key={index} user={user} /> )
}

export default UserList;
