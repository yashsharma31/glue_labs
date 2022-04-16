import React, { useEffect, useState } from 'react'
import { GiphyFetch } from '@giphy/js-fetch-api'
import './Giphy.css'
import Temp from './tst'

const Giphy = () => {
    const [text, setText] = useState('');

    const [results, setResults] = useState([]);

    const handleInput = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        const gpi = async () => {
            const giphy = new GiphyFetch('lxQDOo5hchKTQ4lTTeoM5UcQli0K1toi')
            const res = await giphy.animate(text, { limit: 10 })
            setResults(res.data)
            console.log(res.data)
        }
        gpi()

        setText('');
    }

    return (
        <>
            <div className="App">
                <h1>Giphy</h1>
                <h3>Type a word to generate GIFs</h3>
                <input className='inputfield' value={text} onChange={handleInput} />
                <button className='submitbtn' onClick={handleSubmit}>Submit</button>
                {<Temp gifs={results} />}
            </div>
        </>
    )
}

export default Giphy