import React from 'react'

const Footer = (props) => {
    return (
        <>
            <div>gR</div>
            <p>Copyright 2021</p>
            <p className="back-to-top" onClick={() => window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })}>Back to Top</p>
        </>
    )
}

export default Footer
