import classes from './UserList.module.css';

const UserList = ({users}) => {
    console.log(users)
  return (
    <div className={classes.container}>
        Users
    </div>
  );
}

export default UserList;
