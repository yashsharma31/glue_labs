import React, { useState } from 'react'
import axios from 'axios';

const PostForm = () => {
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = async e => {
        e.preventDefault()
        const url = 'https://jsonplaceholder.typicode.com/posts'
        const state = {
            id: id,
            title: title,
            body: body,
        }

        axios.post(url, state, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json;charset=UTF-8",
                },
            })
            .then(({ data }) => {
                console.log(data);
            });
        const res = await fetch(url)
        const data = await res.json()
        console.log(data)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label >UserId: </label>
                    <input type="text" value={id} onChange={e => setId(e.target.value)} />
                </div>
                <br />
                <div>
                    <label >Title: </label>
                    <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
                </div>
                <br />
                <div>
                    <label >Body: </label>
                    <input type="text" value={body} onChange={e => setBody(e.target.value)} />
                </div>
                <br />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default PostForm