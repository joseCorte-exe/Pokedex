import React, {useState, useEffect} from 'react';
import axios from 'axios';

import './style.css'

export default function Card({img, number, name}){

    const [type, setType] = useState();

    const app = axios.create({
        baseURL: `https://pokeapi.co/api/v2/pokemon/${name}`,
    });

    useEffect(() => {
        app.get('/')
            // .then(res => setType(res => (console.log(res.data))))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className='card-container'>
            <h3>{number}</h3>
            <img src={img}/>
            <section>
                <h3>{name}</h3>
                <article>
                    <button className='type'>{type}</button>
                </article>
            </section>
        </div>
    )
}
