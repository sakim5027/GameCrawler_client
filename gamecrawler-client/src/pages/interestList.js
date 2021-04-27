import { faTextHeight } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import React from 'react';

class InterestList extends React.Component{
    constrctor(props){
        super(props);
        this.state({
            interestInfo:[]
        })
        this.gameHandler=this.gameHandler.bind(this);
    }

    interestByGenreHandler= async ()=>{
        await axios
            .get('http://ec2-3-128-203-233.us-east-2.compute.amazonaws.com:5000/interests',
            {withCredentials:true}
            ).then(res=>{
                console.log(res.data.data)
                this.setState({
                    interestInfo:res.data.data
                })
            })
    }
    gameHandler(el){
        return (
            <div>
                <p key={el.game_id.toString()} value={el.game.name}>
                    <img src={el.game_image} alt="interest_game" width="150px" height="200px"></img>
                    <Like/>
                </p>
            </div>
    
        )
    }

    render(){
        return (
            <div>
                <div>관심 목록</div>
                <div className = "interestByGenre">
                    {interestInfo.map(el=>{
                        return(
                            <div>
                                <p key={el.genre_id.toString()} value={el.genre_name}>
                                    <div className="genreName">{el.genre_name} </div>
                                    <div className="interestContainer">
                                        <div className="filterCatetory">관심 목록에 추가한 게임</div>
                                        {interest_games.map(this.gameHandler)}
                                    </div> 
                                    <div className="recommendationContainer">
                                        <div className="filterCatetory">같은 장르의 추천 게임</div>
                                        {recommendation_games.map(this.gameHandler)}
                                    </div>
                                </p>
                            </div>                       
                        )
                    })}
                </div>
            </div>
            

        )
    }
}

export default InterestList;
