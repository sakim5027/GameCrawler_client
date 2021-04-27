import React from 'react';
import fakeData from './fakeData';
import Like from '../like'

class Test extends React.Component{
    constructor(props){
        super(props);
        this.state={
            games:fakeData
        }
    }

    render(){
        return (
            fakeData.map(el =>{
                return (
                    <div className= "games">
                    <p key={el.game_code.toString()} value={el.title} >
                        <img src={el.img} alt="game" width="150px" height="200px" ></img>
                        <Like likeHandler={this.likeHandler}/>
                    
                    </p>       
                </div>
                )
            })

        )
    }
    
}

export default Test;