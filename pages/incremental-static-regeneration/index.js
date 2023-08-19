import React from 'react';
import { Layout } from '@/components/Layout';
import { API_URL, dateTime } from '@/config/index';
import Users from '@/components/Users';
import { Timer } from '@/components/Timer';

const IncrementalStaticRegenration = ({ users, date }) => {
    // setInterval(() => console.log(date, "ISR"), 1000);

    return (
        <Layout
            title="ISR"
            name='Incremental Static Regenration'
            description="This is Incremental Static Regenration Page"
        >
            <Timer date={date} />
            <Users title="Incremental Static Regenration" users={users} />
        </Layout>
    )
}

export default IncrementalStaticRegenration;

// prefetching the all the user details on particular time it will regenerate the page
export async function getStaticProps() {
    const res = await fetch(API_URL)
    const users = await res.json()

    return {
        props: {
            users,
            date: dateTime
        },
        revalidate: 10,
    }
}


