//작성자:김현영
import React from 'react';
// import { fakeData } from './fakeData';
import NewGames from './newGames'
import Like from '../like'
import axios from 'axios';
import CurrentGame from'../CurrentGame'
import { Link } from 'react-router-dom'

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            genre_list: [],
            filteredGames: '',
            currentGame: "",
            currentId: '',
            games: [],
        }
        this.gameGenreHandler=this.gameGenreHandler.bind(this);
        this.gameListHandler=this.gameListHandler.bind(this);
        this.filteredGameHandler=this.filteredGameHandler.bind(this);
        this.handleCardClick=this.handleCardClick.bind(this);

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
                //console.log(res.data.data.genreList); //undefined
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
                console.log(res.data.data)
                this.setState({
                    games : res.data.data   
                })
                //console.log(this.state.games)
            })
    }

    filteredGameHandler(e){
        this.setState({
            filteredGames: e.target.value
        })
    }

    // //슬안:CurrentGame 을 설정하기 위한 기능
    handleCardClick(e) {
        e.persist();
        console.log(e.currentTarget.getAttribute("value"))
        console.log(e.currentTarget.getAttribute("id"))

        const curGameValue = e.currentTarget.getAttribute("value");
        const curGameId = e.currentTarget.getAttribute("id").toString();

        this.setState({ 
            currentGame: curGameValue
        });
        this.setState({ 
            currentId: curGameId
        });
        
    }

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
                    <input type="text" placeholder="Search" onChange={this.filteredGameHandler}/> 
                    {/* <input type="text" placeholder="Search"/>
                    <button className = "submitBtn" onClick={e=>{setFilteredEl(e.target.value)}}>조회</button> */}
                    
                </div>
                <div className="CurrentGame">
                    <CurrentGame currentId={this.state.currentId} currentGame = {this.state.currentGame}/>
                    {console.log(this.state.currentGame)}
                    {console.log(this.state.currentId)}
                </div>
                <div className="filteredGames">
                    {games.filter(el =>{ 
                    if(filteredGames===""){
                        return el   
                    }else if((el.game_name.toLowerCase().includes(filteredGames.toLocaleLowerCase()))||(el.genre.toLowerCase().includes(filteredGames.toLocaleLowerCase()))){
                        return el
                    }
                    }).map((el) =>{
                        return (
                            <div className= "games" >
                                <p >
                                <Link to='/currentGame'><img src={el.game_image} id={el.game_id} value={el.game_name} onClick={this.handleCardClick} alt="game" width="150px" height="200px" ></img></Link>
                                    <Like />
                                    
                                </p>       
                            </div>
                        )
                    })
                }



                {/* {games.filter(el =>{ 
                    if(filteredGames===""){
                        return el   
                    }else if((el.game_name.toLowerCase().includes(filteredGames.toLocaleLowerCase()))||(el.genre.toLowerCase().includes(filteredGames.toLocaleLowerCase()))){
                        return el
                    }
                    })
                    .map((el) =>{
                        return (
                            <div className= "games">
                                <p key={el.game_id} value={el.game_name}onClick={this.handleCardClick}>
                                    <img src={el.game_image} alt="game" width="150px" height="200px" ></img>
                                    <Like />
                                    
                                </p>       
                            </div>
                        )
                    })
                } */}
                
                </div>
           </div>
        )
    }
}

export default Home;

// function HomeGameSearch() {
//     const [gameGenre,setGameGenre] = useState([]); //장르 목록을 저장
//     const [game, setGame] = useState([]);   //게임 목록을 저장  
//     const [newGames, setNewGames] = useState([]);   //최신 게임 목록을 저장
//     const [filteredEl, setFilteredEl] = useState('');   //필터링된 게임을 저장
//     const [interest, setInterest] = useState('')
//     // const genreEl=["Point-and-click","Fighting","Shooter","Music"];        
//     const genreOption= gameGenre.map(el =>{return <option value={el}>{el}</option>});

//         useEffect( ()=>{
//             axios
//                 .get('http://ec2-18-189-171-239.us-east-2.compute.amazonaws.com:5000/genres',
//                     {withCredentials:true}
//                 ).then(res =>{
//                     setGameGenre(res.data)
//                 })
//         }, [])
//         useEffect( ()=>{
//             axios
//                 .get('http://ec2-18-189-171-239.us-east-2.compute.amazonaws.com:5000/games',   
//                     {withCredentials:true}
//                 ).then(res =>{
//                     console.log(res.data)
//                     setGame(res.data)
//                 })
//         }, [])
//        useEffect( ()=>{
//            axios
//                 .get('http://ec2-18-189-171-239.us-east-2.compute.amazonaws.com:5000/games?flag=new',
//                     {withCredentials:true}
//                 ).then(res =>{
//                     setNewGames(res.data)
//                 })
//        }, [])
//        useEffect( ()=>{
//            axios
//                 .post('http://ec2-18-189-171-239.us-east-2.compute.amazonaws.com:5000/interest',
//                     {game_id:game},
//                     {withCredentials:true},
//                 )
//         }, [])
//         return (
            
//             <div className= "gameSearch">
//                 <div>
//                     {newGames.map(el=>{
//                         return (
//                             <div className= "games">
//                                 <p key={el.game_id}>
//                                     <img src={el.game_image} alt="game" width="150px" height="200px" ></img>
//                                     <Like />  {/*클릭 시(true) setInterest에 상태 저장  */}                         
//                                 </p>       
//                             </div>
//                         )
//                     })}
//                 </div>
//                 <div className="gameFilter">
//                     <br/>
//                     <select className="genrePicker" name="genrePicker" onChange={e=>{setFilteredEl(e.target.value)}}defaultValue="">
//                         <option value="">All</option>
//                         {genreOption}
//                     </select>
//                     <input type="text" placeholder="Search" onChange={e=>{setFilteredEl(e.target.value)}}/>
//                     {/* <input type="text" placeholder="Search"/>
//                     <button className = "submitBtn" onClick={e=>{setFilteredEl(e.target.value)}}>조회</button> */}
                    
//                 </div>
//                 <div className="filteredGames">
//                 {/* 나중엔 fakeData가 아니라 game으로 수정해야 함 */}
//                 {game.filter(el =>{ 
//                     if(filteredEl===""){
//                         return el   
//                     }else if((el.game_name.toLowerCase().includes(filteredEl.toLocaleLowerCase()))||(el.genre.toLowerCase().includes(filteredEl.toLocaleLowerCase()))){
//                         return el
//                     }
//                     }).map((el) =>{
//                         return (
//                             <div className= "games">
//                                 <p key={el.game_id} value={el.game_name} onclick={this.handleCardClick}>
//                                     <img src={el.game_image} alt="game" width="150px" height="200px" ></img>
//                                     <Like />
                                    
//                                 </p>       
//                             </div>
//                         )
//                     })
//                 }
//                 </div>
//             </div>
//         )

//     }


// export default HomeGameSearch;


//{"game_id":134612,"game_name":"Pragmata","game_image":"https://images.igdb.com/igdb/image/upload/t_thumb/co29mb.jpg","genre":"Adventure","interest_yn":"N"},