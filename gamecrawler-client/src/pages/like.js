import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasHeart} from "@fortawesome/free-solid-svg-icons";

class Like extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data: [],
            date: '',
            like: false
        }
        this.likeHandler=this.likeHandler.bind(this);
    }

    likeHandler(e){
        this.setState(prevState=>({
            like: !prevState.like
        }))
    }
    render(){
        const {like} = this.state;
        return (
            <div>
                <button className = "likeBtn" onClick={this.likeHandler}>
                    {like? <FontAwesomeIcon icon={faHeart}/> : <FontAwesomeIcon icon={fasHeart}/> }
                </button>
            </div>
        )
    }
}

export default Like;