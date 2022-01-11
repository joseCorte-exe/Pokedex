import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Panel from '../../components/panel';
import Header from '../../components/header';

import './style.css';

export default function Pokemon() {

    const app = axios.create({ baseURL: 'https://pokeapi.co/api/v2/pokemon' })

    const pokeName = useParams().name

    let bgColor = ''

    const [ability, setAbility] = useState({})

    const [poke, setPoke] = useState({
        id: "",
        name: "",
        species: "",
        img: "",
        hp: "",
        attack: "",
        defense: "",
        type: "",
        height: "",
        weight: "",
        bgColor: '',
    });

    useEffect(() => {
        app.get(`/${pokeName}`)
        .then(res => (
            setPoke({
                img: res.data.sprites.front_default,
                id: res.data.id,
                species: res.data.species,
                hp: res.data.stats[5].base_stat,
                attack: res.data.stats[4].base_stat,
                defense: res.data.stats[3].base_stat,
                type: res.data.types[0].type.name,
                height: res.data.height,
                weight: res.data.weight,
            })
            ))
        }, [])

        switch (poke.type) {
            case 'normal':
                bgColor = '#fff'
                break;
            
            case 'fighting':
                bgColor = '#f44336'
                break;
            
            case 'flying':
                bgColor = '#3f51b5'
                break;
    
            case 'poison':
                bgColor = '#cddc39'
                break;
    
            case 'ground':
                bgColor = '#ff9800'
                break;
    
            case 'rock':
                bgColor = '#795548'
                break;
    
            case 'bug':
                bgColor = '#4caf50'
                break;
    
            case 'ghost':
                bgColor = '#9e9e9e'
                break;
    
            case 'steel':
                bgColor = '#607d8b'
                break;
    
            case 'fire':
                bgColor = '#f44336'
                break;
    
            case 'water':
                bgColor = '#2196f3'
                break;
    
            case 'grass':
                bgColor = '#4caf50'
                break;
    
            case 'electric':
                bgColor = '#ffeb3b'
                break;
    
            case 'psychic':
                bgColor = '#ff5722'
                break;
    
            case 'ice':
                bgColor = '#00bcd4'
                break;
    
            case 'dragon':
                bgColor = '#3f51b5'
                break;
    
            case 'dark':
                bgColor = '#424242'
                break;
    
            case 'fairy':
                bgColor = '#e91e63'
                break;
    
            default:
                bgColor = '#fff'
                break;
        }

        return (
        <main style={{backgroundImage: `linear-gradient(115deg, ${bgColor}, #ffc400)`}} className='poke-main'>
            <Header className='header' />
            <section className='poke-section'>
                <img src={poke.img} alt={poke.name}/>
                <h1>{pokeName}</h1>
                <Panel id={poke.id} hp={poke.hp} attack={poke.attack} defense={poke.defense} type={poke.type} height={poke.height} weight={poke.weight} />
            </section>
        </main>
    )
}
