import React, { useState, useEffect } from 'react'
import './FinalSpace.css'

const FinalSpace = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {


        const fetchData = async () => {
            const url = "https://finalspaceapi.com/api/v0/character/";
            const res = await fetch(url);
            const data = await res.json();
            setPosts(data);
        };
        fetchData();
    }, []);

    return (
        <>
            <h1>Final Space</h1>

            <div className="Container">
                {
                posts.map(post => <div className='Final' key={post.id}>

                    <div className="img-container">
                        <img src={post.img_url} />
                    </div>

                    <h3>Name: {post.name}</h3>
                    <h3>Gender: {post.gender}</h3>
                    <h3>Hair: {post.hair}</h3>
                </div>
                )}
            </div>
        </>
    )
}

export default FinalSpace