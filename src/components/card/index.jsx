import React, {useState, useEffect} from 'react';
import axios from 'axios';

import './style.css'

export default function Card(props) {

    const types = [props.type]

    const [poke, setPoke] = useState({
        name: "",
        species: "",
        img: "",
        hp: "",
        atttack: "",
        defense: "",
        type: "",
    });

    const app = axios.create({
        baseURL: 'https://pokeapi.co/api/v2/pokemon/charizard',
    });

    useEffect(() => {
        app.get('/')
            .then(res => setPoke({
                name: "pokemonName",
                species: res.data.species.name,
                img: res.data.sprites.front_default,
                hp: "",
                atttack: "",
                defense: "",
                type: "",
            }))
            .then(console.log(poke.img))
    }, [])

        // .then(res => (console.log(res.data)))

    return (
        <div className='card-container'>
            <h3>{props.number}</h3>
            <img src={props.img}/>
            <div className='card-content'>
                <h3>{props.name}</h3>
                <div>
                <button className='type'>fire</button>
                    {
                        types.map(type => type)
                    }
                </div>
            </div>
        </div>
    )
}
