import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { getApi } from '../redux-saga/actions/action';

export const AppDetailPokemon = () => {
    const dispatch =useDispatch()
    const params = useParams()
    const state = useSelector((state) => state.reducerApi.posts[0]?.pokemons);
    const paramsPokemon = state?.find((poke)=> poke.id == params.id)
    useEffect(() => {
        dispatch(getApi());
    }, [dispatch]);
        
    console.log(paramsPokemon)
    return (
        <div>
            hello

            {params.id}
        </div>
    )
}
