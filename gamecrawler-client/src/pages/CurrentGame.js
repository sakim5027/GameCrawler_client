import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import ReviewList from './reviewList'

export default function CurrentGame({ gameKey }) {

    const { id } = {gameKey}
    const gameUrl = 'http://ec2-18-189-171-239.us-east-2.compute.amazonaws.com:5000/game'
    const [currentGame, setGame] = useState(null);

    useEffect(()=>{
        axios.get(gameUrl,{game_id: {id}})
            .then(res=>{
                setGame(res.data)
            })
    }, [gameUrl])

    const reviewUrl = 'http://ec2-18-189-171-239.us-east-2.compute.amazonaws.com:5000/reviews'
    const [review, setReview] = useState(null);

    useEffect(()=>{
        axios.get(reviewUrl,{game_name : currentGame.game_name})
            .then(res=>{
                setReview(res.data)
            })
    }, [reviewUrl])

    if (!currentGame) {
      return '게임을 선택하세요'
    }
    else{
        const { game_name, description_full, game_genre, rating, game_image } = currentGame;
        return (
        <>
            <div>
            <div className="current-game">
                <h1 className="title">{game_name}</h1>
                <img className="thumbnail" src={game_image} />
                <p className="rating">Rating : {rating}</p>
                <p className="running-time">Genre : {game_genre}</p>
                <p>Description</p>
                <p className="description">{description_full}</p>
            </div>
            </div>
            <br />
            <hr />
            <br />
            <h2>Reviews</h2>
            <div>
                { review.map((el)=>{
                    <li>
                        <div>{el.game_name}</div>
                        <div>{el.user_id}</div>
                    </li>
                    } 
                )}
            </div>
            
        </>
        );
    };
}