import React, { useState, useEffect } from 'react'
import { Layout } from '@/components/Layout';
import { API_URL, dateTime } from '@/config/index';
import Users from '@/components/Users';
import { Timer } from '@/components/Timer';

const ClientSideRendering = () => {
    const [users, setUsers] = useState([])
    const [isLoading, setLoading] = useState(true);

    // fetch data from api
    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => {
                setUsers(data)
                setLoading(false)
            })
    }, [])

    // render component based on the loading state
    const renderComponent = () => {
        let component;
        if (isLoading) {
            component = <p>Loading...</p>;
        } else if (!isLoading) {
            component = <Users title="Client Side Rendering" users={users} />;
        }
        return component;
    }

    return (
        <Layout
            title="CSR"
            name='Client Side Rendering'
            description="This is Client Side Rendering Page"
        >
            <Timer date={dateTime} />
            {renderComponent()}
        </Layout>
    )
}

export default ClientSideRendering;
