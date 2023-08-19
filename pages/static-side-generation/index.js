import React from 'react';
import { Layout } from '@/components/Layout';
import { API_URL, dateTime } from '@/config/index';
import Users from '@/components/Users';
import { Timer } from '@/components/Timer';

const StaticSideGeneration = ({ users, date }) => {
    // setInterval(() => console.log(date, "SSG"), 1000);
    
    return (
        <Layout
            title="SSG"
            name='Static Side Generation'
            description="This is Static Side Generation Page"
        >
            <Timer date={date} />
            <Users title="Static Side Generation" users={users} />
        </Layout>
    )
}

export default StaticSideGeneration;

// Prefetching the all the user details that runs only at a build time
export async function getStaticProps() {
    const res = await fetch(API_URL);
    const users = await res.json();

    return {
        props: {
            users,
            date: dateTime
        },
    }
}


