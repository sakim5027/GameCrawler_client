import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { fakeData } from './fakeData';
import Top5Games from './top5Gmaes';
import Like from '../like'

function HomeGameSearch() {
    const [game, setGame] = useState([]);
    const [filteredEl, setFilteredEl] = useState('');   //필터링된 게임을 저장
    const genreEl=["Point-and-click","Fighting","Shooter","Music"];         //나중에 장르 db도 있는지 봐야지
    const genreOption= genreEl.map(el =>{return <option value={el}>{el}</option>});
        useEffect( ()=>{
            axios
                .get('http://ec2-18-189-171-239.us-east-2.compute.amazonaws.com:5000/games',    // 게임 정보를 여기서 가져오는 게 맞나? 배치 서버? https://api.igdb.com/v4/games
                // .get('https://api.igdb.com/v4/games',
                {withCredentials:true}
                ).then(res =>{
                    console.log(res.data)
                    setGame(res.data)
                }).catch(err =>alert(err))
        }, [])
       
        return (
            
            <div className= "gameSearch">
                <Top5Games/>
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
                {fakeData.filter(el =>{ 
                    if(filteredEl===""){
                        return el   
                    }else if((el.title.toLowerCase().includes(filteredEl.toLocaleLowerCase()))||(el.genre.toLowerCase().includes(filteredEl.toLocaleLowerCase()))){
                        return el
                    }
                    }).map((el) =>{
                        return (
                            <div className= "games">
                                <p key={el.game_code}>
                                    <img src={el.img} alt="game" width="150px" height="200px" ></img>
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


