import React from 'react'
import Crime from '../components/Crime'
import Fiction from '../components/Fiction'
import Help from '../components/Help'
import NonFiction from '../components/NonFiction'

const Main = (props) => {
    return (
        <div>
            <h1>find your next Great read</h1> 
                <Fiction />   
                <NonFiction />
                <Crime />
                <Help />
        </div>
    )
}

export default Main
