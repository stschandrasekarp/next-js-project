import React, { useState, useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import Head from 'next/head';
import Back from './BackButton';

export const Layout = ({ children, title, keywords, description }) => {
    const [hydrated, setHydrated] = useState(false);

    // To avoid hydration error because we re render  the component every sec. 
    useEffect(() => {
        setHydrated(true);
    }, [])


    return (
        hydrated && <>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
                <meta name='keywords' content={keywords} />
            </Head>
            <Header />
            <Back />
            {children}
            <Footer />
        </>
    )
}
