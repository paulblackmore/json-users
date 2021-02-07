import React, {useMemo} from 'react'
import User from '../User/User'

const UserList = ({ users }) => {
	const usersRef = useMemo(() => users, [users])


	console.log(users)
		
	if (users && users.length === 0) return null;
	else return usersRef.map((user, index) => <User key={index} user={user} /> )
}

export default React.memo(UserList);
