import React from 'react';
import { useRouter } from 'next/router';

export const UserItem = ({ user, styles }) => {
    const router = useRouter();

    const goToUserPage = () => {
        if (!router.query.id) {
            router.push(`/user/${user?.id}`);
        }
    }

    return (
        <div className={styles.card} onClick={goToUserPage} style={{ cursor: !router.query.id ? 'pointer' : 'default' }}>
            <h1 className={styles['card-title']}>{user?.name}</h1>
            <h3 className={styles['title-heading']}>{user?.username}</h3>
            <p className={styles['card-text']}>{user?.email}</p>
            <p className={styles['card-text']}>{user?.address?.city} {user?.address?.street}</p>
        </div>
    )
}
