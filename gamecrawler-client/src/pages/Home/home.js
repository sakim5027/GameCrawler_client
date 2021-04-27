//작성자:김현영
import React from 'react';
// import { fakeData } from './fakeData';
import NewGames from './newGames'
import Like from '../like'
import axios from 'axios';
import CurrentGame from'../CurrentGame'

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            genre_list: [],
            filteredGames: '',
            currentGame: '',
            currentkey: '',
            games: [],
        }
        this.gameGenreHandler=this.gameGenreHandler.bind(this);
        this.gameListHandler=this.gameListHandler.bind(this);
        this.filteredGameHandler=this.filteredGameHandler.bind(this);
        this.inputValueHandler=this.inputValueHandler.bind(this);

    }
    componentDidMount(){
        this.gameGenreHandler();
        this.gameListHandler();
    }

    gameGenreHandler = async()=>{
        await axios 
            .get('http://ec2-3-128-203-233.us-east-2.compute.amazonaws.com:5000/genres',
            {withCredentials:true})
            .then(res => {
                console.log(res.data.data.genreList); //undefined
                return res.data.data.genreList
            }).then(res =>{
                this.setState({
                    genre_list: res.map(el => {return el.genre_name})
                })
            })
        }

    gameListHandler= async()=>{
        await axios
            .get('http://ec2-3-128-203-233.us-east-2.compute.amazonaws.com:5000/games',   
                {withCredentials:true}
            ).then(res =>{
                console.log(res.data)
                this.setState({
                    games : res.data.data   
                })
                console.log(this.state.games)
            })
    }

    filteredGameHandler(e){
        this.setState({
            filteredGames: e.target.value
        })
    }
    inputValueHandler(e){
        const inputValue = document.getElementById('searchInput').value;
        this.setState({
            filteredGames: inputValue
        })
    }

    // //슬안:CurrentGame 을 설정하기 위한 기능
    // handleCardClick(e) {
    //     this.setState({ currentGame: e.target.value });
    //     this.setState({ currentkey: e.target.key });
    // }

    render(){
        const {games, genre_list, filteredGames} = this.state;

        const genreOption= genre_list.map(el =>{return <option value={el}>{el}</option>});
       return ( 
            <div className= "gameSearch">  
                <div className="gameFilter">
                    <br/>
                    <select className="genrePicker" name="genrePicker" onChange={this.filteredGameHandler} defaultValue="">
                        <option value="">All</option>
                        {genreOption}
                    </select>
                    {/* <input type="text" placeholder="Search" onChange={this.filteredGameHandler}/>  */}
                    
                        <input id="searchInput" type="text" placeholder="Search"/>
                        <button className="searchBtn" type="submit" onClick={this.inputValueHandler}>조회</button>
                 

                    
                </div>
                {/* <div className="currentGame">
                    <CurrentGame gameKey={this.state.currentKey}/>
                </div> */}
                <div className="filteredGames">
                    {games.filter(el =>{ 
                    if(filteredGames===""){
                        return el   
                    }else if((el.game_name.toLowerCase().includes(filteredGames.toLocaleLowerCase()))||(el.genre.toLowerCase().includes(filteredGames.toLocaleLowerCase()))){
                        return el
                    }
                    }).map((el) =>{
                        return (
                            <div className= "games">
                                <p key={el.game_id.toString()} value={el.game_name}>
                                    <img src={el.game_image} alt={el.game_id} width="150px" height="200px" ></img>
                                    <Like/>            
                                </p>      
                            </div>
                        )
                        })
                     }
                </div>
            </div>
        )
    }
}

export default Home;

