import { useRouter } from 'next/router'
import React from 'react'

const Back = () => {
    const router = useRouter();

    return (
        router.pathname !== "/" && <button className='back-btn' onClick={() => router.back()}>Go Back</button>
    )
}

export default Back;