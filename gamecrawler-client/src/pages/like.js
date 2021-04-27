import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasHeart} from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';

class Like extends React.Component{
    constructor(props){
        super(props)
        this.state={
            like: false,    //현재 클릭 유무
            
        }
        this.likeHandler=this.likeHandler.bind(this);
        this.postLikeHandler=this.postLikeHandler.bind(this);
        this.deleteLikeHandler=this.deleteLikeHandler.bind(this);
        this.likeCounter=this.likeCounter.bind(this);    
    }

    likeHandler(e){
        this.setState(prevState=>({
            like: !prevState.like
        }))
       if(this.state.like === false){
           this.setState({like: true})
           this.postLikeHandler(); 
       }else{
           this.setState({
               like:false})
           this.deleteLikeHandler()
       }
    }

    //likeHandler 안에
    // 좋아요 표시 시 : 1. dislike를 like로 상태 변경하고 2. 해당 게임 id를 like post 요청 보낸다. 3. get count interest 요청을 보내서 해당 게임의 좋아요 갯수를 파악한다.
    // 별로에요 표시 시 : 1. like를 dislike로 상태 변경하고 2. 해당 게임 id를 like dele}te 요청 보낸다. 3. get count interest 요청을 보내서 해당 게임의 좋아요 갯수를 파악한다.
 
    postLikeHandler = async()=>{ 
        await axios
            .post('http://ec2-3-128-203-233.us-east-2.compute.amazonaws.com:5000/interest',
            {game_id: this.props.game_id},{withCredentials:true}
            ).then(res =>{
                console.log(res);
            })
    }

    deleteLikeHandler =async()=>{
        await axios
            .post('http://ec2-3-128-203-233.us-east-2.compute.amazonaws.com:5000/interest/:interest_id',
            {interest_id: this.props.interest_id}, {withCredentials:true}
            ).then(res =>{
                console.log(res)
            })
    }

    likeCounter =async()=>{
        await axios
            .post('http://ec2-3-128-203-233.us-east-2.compute.amazonaws.com:5000/count-interest',
            {game_id: this.props.game_id}, {withCredentials:true}
            ).then(res=>{
               console.log(res);
            })
    }

    render(){
        const {like} = this.state;
        return (
            <div>
                <button className = "likeBtn" onClick={this.likeHandler}>
                    {like? <FontAwesomeIcon icon={fasHeart}/> : <FontAwesomeIcon icon={faHeart}/> }
                   
                </button>
            </div>
        )
    }
}

export default Like;