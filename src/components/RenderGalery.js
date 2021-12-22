import React from 'react'
import AppCard from './AppCard';
import AppSpinner from "./AppSpinner";

export const RenderGalery = ({pokemon,list}) => {
    return (
        <>
            {pokemon ? (
        <div className="card">
          <AppCard pokemon={pokemon} />
        </div>
      ) : (
        <div>
          {!list ? (
            <AppSpinner />
          ) : (
            <div>
              {list?.map((poke) => (
                <div className="card" key={poke.id}>
                  <div className="flex-center">
                    <AppCard
                    
                      id={poke.id}
                      name={poke.name}
                      img={poke.sprites.other.home.front_default}
                      type={poke.types[0].type.name}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
        </>
    )
}
