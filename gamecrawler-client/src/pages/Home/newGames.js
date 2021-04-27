import React from 'react';
import axios from 'axios';
import Like from '../like';

class NewGames extends React.Component{
    constructor(props){
        super(props);
        this.state={
            newGames: []
        }
        this.newGameHandler = this.newGameHandler.bind(this);
    }
    newGameHandler(){
        axios
            .get('http://ec2-3-128-203-233.us-east-2.compute.amazonaws.com:5000/games?flag=new',   
                {withCredentials:true}
            ).then(res =>{
                console.log(res.data.data)
                this.setState({
                    newGames: res.data.data
                })
            })
    }
    render(){
        const {newGames} = this.state;
        return (
            <div>
                <p>{test}</p>
                <div>
                    {newGames.map(el=>{
                        return (
                            <div className= "games">
                                <p key={el.game_id}>
                                    <img src={el.game_image} alt="game" width="150px" height="200px" ></img>
                                    <Like />  {/*클릭 시(true) setInterest에 상태 저장  */}                         
                                </p>       
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
    
}

export default NewGames;