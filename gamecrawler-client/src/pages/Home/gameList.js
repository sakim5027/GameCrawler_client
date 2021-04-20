import React from 'react';

const GameList=(props)=>{
    return (
        <div>
            {props.games.map((game, index) => (
            <div>
                <img src={game.img} alt="game"></img>
            </div>))}
        </div>
        )
    }

export default GameList;