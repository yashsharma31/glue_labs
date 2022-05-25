import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <div className='container'>
            <h1 style={{color: "grey",fontSize:"50px",textAlign:"center"}}>Home Component</h1>
            <Link className="btn btn-primary" to='/courses'>All Courses</Link>
        </div>

    )
}

export default Home