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
            genre_id: null,
            genre_name:['adventure', 'music,','Adventure','Action','Arcade'],
            filteredGames: '',

            currentGame: null,
            currentkey: null,
            games: [],
            // game_id : null,
            // game_name: '',
            // game_image: null,
            // genre: '',
            // interest_yn : null
        }
        // this.gameGenreHandler=this.gameGenreHandler.bind(this);
        this.gameListHandler=this.gameListHandler.bind(this);
        this.filteredGameHandler=this.filteredGameHandler.bind(this);
        // this.handleCardClick=this.handleCardClick.bind(this);

    }
    componentDidMount(){
        // this.gameGenreHandler();
        this.gameListHandler();
    }

    // gameGenreHandler(){
    //     axios
    //         .get('http://ec2-18-189-171-239.us-east-2.compute.amazonaws.com:5000/genres',   
    //             {withCredentials:true}
    //         ).then(res =>{                  //{ "data" : [{"genre_id":"genre's id", "genre_name":"genre's name"}]}
    //             console.log(res.data)
    //             const {genre_id, genre_name} = res.data
    //             this.setState({
    //                 genre_id,
    //                 genre_name
    //             })
    //         })
    //     }
    gameListHandler(){
        axios
            .get('http://ec2-18-189-171-239.us-east-2.compute.amazonaws.com:5000/games?flag=new',   
                {withCredentials:true}
            ).then(res =>{
                console.log(res.data.data)
                //const {game_id, game_name, game_img, genre, interest_yn} = res.data.data;
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

    // //슬안:CurrentGame 을 설정하기 위한 기능
    // handleCardClick(e) {
    //     this.setState({ currentGame: e.target.value });
    //     this.setState({ currentkey: e.target.key });
    // }

    render(){
        const {games, genre_name, filteredGames} = this.state;

         const genreOption= genre_name.map(el =>{return <option value={el}>{el}</option>});
       return ( 
            <div className= "gameSearch">  

                {/* {/* <NewGames/> */}
              
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
                {/* <div className="currentGame">
                    <CurrentGame gameKey={this.state.currentKey}/>
                </div> */}
                <div className="filteredGames">
                {/* 나중엔 fakeData가 아니라 game으로 수정해야 함 */}
                    {games}
                    {games.map((el)=>{
                    return(
                        <div className='games'>
                            <p key={el.game_id.toString()} value={el.game_name}>
                                <img src={el.game_image} alt="game" width="150px" height="200px" ></img>
                                <Like />
                                
                            </p>       
                        </div>
                    )
                })}
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