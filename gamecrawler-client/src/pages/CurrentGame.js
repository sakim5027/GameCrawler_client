import React,{useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import ReviewList from './reviewList'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';



class CurrentGame extends React.Component{
    constructor(props){
        super(props);
        this.state={
            curGameInfo:[],
            curGameReview:[]
        }
        this.currentGameInfoHandler = this.currentGameInfoHandler.bind(this);
        this.currentGameReviewHandlier = this.currentGameReviewHandlier.bind(this);
    }

    componentDidMount(){
        this.currentGameInfoHandler();
        this.currentGameReviewHandlier();
    }

    currentGameInfoHandler = async()=>{
        await axios
        .get(`http://ec2-3-128-203-233.us-east-2.compute.amazonaws.com:5000/game`,
        {game_id: this.props.currentId},{withCredentials:true})
        .then(res => {
            console.log('curGameData:', res.data.data);
            this.setState({
                curGameInfo: res.data.data
            })
        })
    }

    currentGameReviewHandlier = async() =>{
        await axios
        .get('http://ec2-3-128-203-233.us-east-2.compute.amazonaws.com:5000/reviews',
        {game_name : this.props.currentGame},{withCredentials:true})
        .then(res => {
            console.log("CurReviewData:",res.data.data.reviewList);
            this.setState({
                curGameReview: res.data.data.reviewList
            })
        })
    }

    render(){
        const{curGameInfo, curGameReview}= this.state;
    
        console.log(this.props)
        
        if (!curGameInfo) {
            return '게임을 선택하세요'
        }
        else{
            const { game_name, description_full, genre, age_ratings, game_image } = this.state.curGameInfo;
            return (
            <> 
                <div>
                {curGameInfo.map((el)=>{
                    return (
                        <div className='mypageContainer'>
                            <h1 className="title">{el.game_name}</h1>
                            <img className="thumbnail" src={el.game_image} />
                            <p className="rating">Age Rating : {el.age_ratings}</p>
                            <p className="running-time">Genre : {el.genre}</p>
                            <p>Description</p>
                            <p className="description">{el.description_full}</p>
                            {console.log(curGameInfo)}
                        </div>
                    )}
                )}
                </div>
                <br />
                <hr />
                <br />
                <h2>Reviews</h2>
                <div>
                    { curGameReview.map((el)=>{
                        <li>
                            <div>{el.rate}</div>
                            <div>{el.user_id}</div>
                            <div>{el.contents}</div>
                        </li>
                        } 
                    )}
                </div>
                <Link to='/newReviews'><input type='button' className = "reviewBtn" value='리뷰 남기기' /></Link>
            </>
            );
        };
    }
}
















export default CurrentGame;
// export default function CurrentGame({ gameKey, curGame }) {

//     const { id } = {gameKey}
//     const gameUrl = 'http://ec2-3-128-203-233.us-east-2.compute.amazonaws.com:5000/game'
//     const [currentGame, setGame] = useState(null);

//     useEffect(()=>{
//         axios.get(gameUrl,{game_id: {id}},{withCredentials:true})
//             .then(res=>{
//                 setGame(res.data.data)
//             })
//     }, [gameUrl])

//     const reviewUrl = 'http://ec2-3-128-203-233.us-east-2.compute.amazonaws.com:5000/reviews'
//     const [gameReview, setGameReview] = useState(null);

//     useEffect(()=>{
//         axios.get(reviewUrl,{game_name : curGame.game_name},{withCredentials:true})
//             .then(res=>{
//                 setGameReview(res.data.data)
//             })
//     }, [reviewUrl])

//     if (!currentGame) {
//       return '게임을 선택하세요'
//     }
//     else{
//         const { game_name, description_full, game_genre, rating, game_image } = currentGame;
//         return (
//         <>
//             <div>
//             <div className="current-game">
//                 <h1 className="title">{game_name}</h1>
//                 <img className="thumbnail" src={game_image} />
//                 <p className="rating">Rating : {rating}</p>
//                 <p className="running-time">Genre : {game_genre}</p>
//                 <p>Description</p>
//                 <p className="description">{description_full}</p>
//             </div>
//             </div>
//             <br />
//             <hr />
//             <br />
//             <h2>Reviews</h2>
//             <div>
//                 { gameReview.map((el)=>{
//                     <li>
//                         <div>{el.game_name}</div>
//                         <div>{el.user_id}</div>
//                     </li>
//                     } 
//                 )}
//             </div>
//             <Link to='/writeReviews'><input type='button' className = "submitBtn" value='리뷰 남기기' /></Link>
//         </>
//         );
//     };
// }