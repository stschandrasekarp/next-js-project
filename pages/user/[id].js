import React from 'react'
import { UserItem } from '@/components/UserItem';
import { Layout } from '@/components/Layout';
import styles from "@/styles/Home.module.css";
import { API_URL } from '@/config/index';

function User({ user }) {
    return (
        <>
            <Layout
                title="User details Page"
                name='This is a User details page'
                description="User details Page described about the user"
            >
                <div className={styles.home}>
                    <h1>User Details</h1>
                    <UserItem user={user} styles={styles} />
                </div>
            </Layout>
        </>

    )
}

export default User;


// Create a Path for all dynamic routes
export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const json = await res.json()

    const paths = json?.map((user) => {
        return {
            params: { id: user?.id?.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}


// Prefetching the particular user details
export async function getStaticProps({ params: { id } }) {
    const res = await fetch(`${API_URL}/${id}`)
    const user = await res.json()

    return {
        props: { user }
    }
}