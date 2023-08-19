import React from 'react'

export const Timer = ({ date }) => {

    return (
        <>
            <h3>{`Current Date and time : ${date || ""}`}</h3>
        </>
    )

}
