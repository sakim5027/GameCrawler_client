//작성자:김현영
import axios from 'axios';
import React, {useEffect, useState} from 'react';
// import { fakeData } from './fakeData';
import Like from '../like'

function HomeGameSearch() {
    const [gameGenre,setGameGenre] = useState([]); //장르 목록을 저장
    const [game, setGame] = useState([]);   //게임 목록을 저장  
    const [newGames, setNewGames] = useState([]);   //최신 게임 목록을 저장
    const [filteredEl, setFilteredEl] = useState('');   //필터링된 게임을 저장
    const [interest, setInterest] = useState('')
    // const genreEl=["Point-and-click","Fighting","Shooter","Music"];        
    const genreOption= gameGenre.map(el =>{return <option value={el}>{el}</option>});

        useEffect( ()=>{
            axios
                .get('http://ec2-18-189-171-239.us-east-2.compute.amazonaws.com:5000/genres',
                    {withCredentials:true}
                ).then(res =>{
                    setGameGenre(res.data)
                })
        }, [])
        useEffect( ()=>{
            axios
                .get('http://ec2-18-189-171-239.us-east-2.compute.amazonaws.com:5000/games',   
                    {withCredentials:true}
                ).then(res =>{
                    console.log(res.data)
                    setGame(res.data)
                })
        }, [])
       useEffect( ()=>{
           axios
                .get('http://ec2-18-189-171-239.us-east-2.compute.amazonaws.com:5000/games?flag=new',
                    {withCredentials:true}
                ).then(res =>{
                    setNewGames(res.data)
                })
       }, [])
       useEffect( ()=>{
           axios
                .post('http://ec2-18-189-171-239.us-east-2.compute.amazonaws.com:5000/interest',
                    {game_id:game},
                    {withCredentials:true},
                )
        }, [])
        return (
            
            <div className= "gameSearch">
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
                <div className="gameFilter">
                    <br/>
                    <select className="genrePicker" name="genrePicker" onChange={e=>{setFilteredEl(e.target.value)}}defaultValue="">
                        <option value="">All</option>
                        {genreOption}
                    </select>
                    <input type="text" placeholder="Search" onChange={e=>{setFilteredEl(e.target.value)}}/>
                    {/* <input type="text" placeholder="Search"/>
                    <button className = "submitBtn" onClick={e=>{setFilteredEl(e.target.value)}}>조회</button> */}
                    
                </div>
                <div className="filteredGames">
                {/* 나중엔 fakeData가 아니라 game으로 수정해야 함 */}
                {game.filter(el =>{ 
                    if(filteredEl===""){
                        return el   
                    }else if((el.game_name.toLowerCase().includes(filteredEl.toLocaleLowerCase()))||(el.genre.toLowerCase().includes(filteredEl.toLocaleLowerCase()))){
                        return el
                    }
                    }).map((el) =>{
                        return (
                            <div className= "games">
                                <p key={el.game_id}>
                                    <img src={el.game_image} alt="game" width="150px" height="200px" ></img>
                                    <Like />
                                    
                                </p>       
                            </div>
                        )
                    })
                }
                </div>
            </div>
        )

    }


export default HomeGameSearch;


//{"game_id":134612,"game_name":"Pragmata","game_image":"https://images.igdb.com/igdb/image/upload/t_thumb/co29mb.jpg","genre":"Adventure","interest_yn":"N"},