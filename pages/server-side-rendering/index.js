import React from 'react';
import { Layout } from '@/components/Layout';
import { API_URL, dateTime } from '@/config/index';
import Users from '@/components/Users';
import { Timer } from '@/components/Timer';

const ServerSideRendering = ({ users, date }) => {
    // setInterval(() => console.log(date, "SSR"), 1000);

    return (
        <Layout
            title="SSR"
            name='Server Side Rendering'
            description="This is Server Side Rendering Page"
        >
            <Timer date={date} />
            <Users users={users} title="Server Side Rendering" />
        </Layout>
    )
}

export default ServerSideRendering;

// Prefetching the particular user details that runs for every request
export async function getServerSideProps() {
    const res = await fetch(API_URL)
    const users = await res.json()

    return {
        props: {
            users,
            date: dateTime
        },
    }
}
