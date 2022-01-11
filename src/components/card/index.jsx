import React, {useState, useEffect} from 'react';
import axios from 'axios';

import './style.css'

export default function Card({number, name}){

    const [type, setType] = useState();
    const [type2, setType2] = useState();
    const [image, setImage] = useState();

    let typeColor = '';
    let typeColor2 = '';

    const app = axios.create({
        baseURL: 'https://pokeapi.co/api/v2/pokemon',
    });

    useEffect(() => {
        app.get('/' + name)
        .then(res => (setType(res.data.types[0].type.name)))
        .catch(err => console.log(err))

        app.get('/' + name)
        .then(res => (setType2(res.data.types[1].type.name)))
        .catch(err => console.log(err))

        app.get('/' + name)
        .then(res => (setImage(res.data.sprites.front_default)))
        .catch(err => console.log(err))
    }, [name])

    switch (type) {
        case 'normal':
            typeColor = '#fff'
            break;
        
        case 'fighting':
            typeColor = '#f44336'
            break;
        
        case 'flying':
            typeColor = '#3f51b5'
            break;

        case 'poison':
            typeColor = '#cddc39'
            break;

        case 'ground':
            typeColor = '#ff9800'
            break;

        case 'rock':
            typeColor = '#795548'
            break;

        case 'bug':
            typeColor = '#4caf50'
            break;

        case 'ghost':
            typeColor = '#9e9e9e'
            break;

        case 'steel':
            typeColor = '#607d8b'
            break;

        case 'fire':
            typeColor = '#f44336'
            break;

        case 'water':
            typeColor = '#2196f3'
            break;

        case 'grass':
            typeColor = '#4caf50'
            break;

        case 'electric':
            typeColor = '#ffeb3b'
            break;

        case 'psychic':
            typeColor = '#ff5722'
            break;

        case 'ice':
            typeColor = '#00bcd4'
            break;

        case 'dragon':
            typeColor = '#3f51b5'
            break;

        case 'dark':
            typeColor = '#424242'
            break;

        case 'fairy':
            typeColor = '#e91e63'
            break;

        default:
            typeColor = '#fff'
            break;
    }

    switch (type2) {
        case 'normal':
            typeColor2 = '#fff'
            break;
        
        case 'fighting':
            typeColor2 = '#f44336'
            break;
        
        case 'flying':
            typeColor2 = '#3f51b5'
            break;

        case 'poison':
            typeColor2 = '#cddc39'
            break;

        case 'ground':
            typeColor2 = '#ff9800'
            break;

        case 'rock':
            typeColor2 = '#795548'
            break;

        case 'bug':
            typeColor2 = '#4caf50'
            break;

        case 'ghost':
            typeColor2 = '#9e9e9e'
            break;

        case 'steel':
            typeColor2 = '#607d8b'
            break;

        case 'fire':
            typeColor2 = '#f44336'
            break;

        case 'water':
            typeColor2 = '#2196f3'
            break;

        case 'grass':
            typeColor2 = '#4caf50'
            break;

        case 'electric':
            typeColor2 = '#ffeb3b'
            break;

        case 'psychic':
            typeColor2 = '#ff5722'
            break;

        case 'ice':
            typeColor2 = '#00bcd4'
            break;

        case 'dragon':
            typeColor2 = '#3f51b5'
            break;

        case 'dark':
            typeColor2 = '#424242'
            break;

        case 'fairy':
            typeColor2 = '#e91e63'
            break;

        default:
            typeColor2 = '#fff'
            break;
    }

    return (
        <div className='card-container'>
            <section className='card-image' >
                <img src={image}/>
            </section>
            <section>
                <h3>{name}</h3>
                <article className='card-type' >
                    <button className='type' style={{backgroundColor: `${typeColor}`}}>{type}</button>
                    {type2 ? <button className='type' style={{backgroundColor: `${typeColor2}`}}>{type2}</button> : null}
                </article>
            </section>
        </div>
    )
}
