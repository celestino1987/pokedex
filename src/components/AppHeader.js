import React from 'react'
import pokeapi from '../img/pokeapi.png'
import '../css/AppHeader.css'
import { AppSearch } from './AppSearch'

export const AppHeader = ({searchPokemon}) => {
    return (
        <>
    <div className='header'>
            <img src={pokeapi} alt="img"/>
            <AppSearch searchPokemon={searchPokemon} />
            

    </div>
        </>
    )
}
