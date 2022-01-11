import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

import Logo from '../../assets/pokemonLogo.svg'

import Card from '../../components/card'

import './style.css'

export default function Home() {

    const app = axios.create({
        baseURL: 'https://pokeapi.co/api/v2/', // max limit is 898
    });

    const [poke, setPoke] = useState([]);
    const [types, setTypes] = useState([]);

    const [currentPage, setCurrentPage] = useState(0);
    const pages = 18;
    const startIndex = currentPage * 50;
    const endIndex = startIndex + 50;
    const currentPoke = poke.slice(startIndex, endIndex);

    let pokeImg = []

    useEffect(() => {
        app.get('pokemon/?offset=0&limit=898') // max limit is 898
            .then(res => (setPoke(res.data.results)))

        app.get('type')
            .then(res => (setTypes(res.data.results)))
    }, [])

    for (let i = 0; i <= 1118; i++) {
        pokeImg.push(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`)
    }

    function image(i) {
        return pokeImg[i]
    }

    const [search, setSearch] = useState('')

    function handleChange(e) {
        setSearch(e.target.value)
    }

    function handleTypeColor(value) {
        switch (value) {
            case 'normal':
                return'#fff'
                break;
            
            case 'fighting':
                return '#f44336'
                break;
            
            case 'flying':
                return '#3f51b5'
                break;
    
            case 'poison':
                return '#cddc39'
                break;
    
            case 'ground':
                return '#ff9800'
                break;
    
            case 'rock':
                return '#795548'
                break;
    
            case 'bug':
                return '#4caf50'
                break;
    
            case 'ghost':
                return '#9e9e9e'
                break;
    
            case 'steel':
                return '#607d8b'
                break;
    
            case 'fire':
                return '#f44336'
                break;
    
            case 'water':
                return '#2196f3'
                break;
    
            case 'grass':
                return '#4caf50'
                break;
    
            case 'electric':
                return '#ffeb3b'
                break;
    
            case 'psychic':
                return '#ff5722'
                break;
    
            case 'ice':
                return '#00bcd4'
                break;
    
            case 'dragon':
                return '#3f51b5'
                break;
    
            case 'dark':
                return '#424242'
                break;
    
            case 'fairy':
                return '#e91e63'
                break;
    
            default:
                return '#fff'
                break;
        }
    }

    return (
        <main className='home-container'>
            <header className='header-nav'>
                    <Link to='/' className='link' ><img src={Logo} width={'250px'}/></Link>
                    {/* <img src={Logo}/> */}
                    <input placeholder='procure por um pokemom' onChange={handleChange} />
            </header>

            <header className='typesHeader'>
                {
                    types.map(type => (<Link  to={`/type/${type.name}`}><button className='typeHeader'style={{backgroundColor: `${handleTypeColor(type.name)}`}} >{type.name}</button></Link>))
                }
            </header>

            <section className='home-content'>
                {
                    currentPoke.filter((value, index) => value.name.includes(search)).map((poke, index) => [<Link to={`/pokemon/${poke.name}`} className='link' ><Card name={poke.name} number='' img={image(startIndex + index + 1)} /></Link>])
                }   
            </section>
            <footer>
                {Array.from(Array(pages), (item, index) => {
                    return <button className='btn-page' value={index} onClick={(e) => setCurrentPage(Number(e.target.value))} >{index}</button>
                })}
            </footer>
        </main>
    )
}
