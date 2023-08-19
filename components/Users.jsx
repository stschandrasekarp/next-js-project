import React from 'react';
import { UserItem } from './UserItem';
import styles from "@/styles/Home.module.css";

const Users = ({ users, title }) => {
    return (
        <div className={styles.home}>
            <h1>{title}</h1>
            <div className={styles['card-items']}>
                {users && users?.length > 0 ? users?.map((user) => <UserItem key={user.id} user={user} styles={styles} />) : <h1>No Data Found</h1>}
            </div>
        </div>
    )
}

export default Users;