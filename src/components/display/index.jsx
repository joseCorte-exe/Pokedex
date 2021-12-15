import React from 'react'

import './style.css'

export default function Display() {
    return (
        <div className='display-container primary'>
            <div className='box'>
                <div className='display'>
                    <header></header>
                    <div>
                        <img />
                        <div className='content'></div>
                    </div>
                    <footer>
                        <h5>#025</h5>
                        <h5>pikachu</h5>
                    </footer>
                </div>
            </div>
        </div>
    )
}
