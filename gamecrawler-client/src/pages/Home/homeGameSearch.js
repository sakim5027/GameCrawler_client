import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { fakeData } from './fakeData';
// import Top5Games from './top5Gmaes'

function HomeGameSearch() {
    const [filteredEl, setFilteredEl] = useState('');   //필터링된 게임을 저장
    const genreEl=["Point-and-click","Fighting","Shooter","Music"];         //나중에 장르 db도 있는지 봐야지
    const genreOption= genreEl.map(el =>{return <option value={el}>{el}</option>});

        return (
            
            <div className= "gameSearch">
                <Top5Games/>
                <h1>{filteredEl}</h1>
                <div className="gameFilter">
                    <br/>
                    <select name="genrePicker" onChange={e=>{setFilteredEl(e.target.value)}}defaultValue="">
                        <option value="">장르를 선택하세요</option>
                        {genreOption}
                    </select>
                    <input type="text" placeholder="Search" onChange={e=>{setFilteredEl(e.target.value)}}/>
                </div>
                <div className="filteredGames">
                {fakeData.filter(el =>{
                    if(filteredEl===""){
                        return el   
                    }else if((el.title.toLowerCase().includes(filteredEl.toLocaleLowerCase()))||(el.genre.toLowerCase().includes(filteredEl.toLocaleLowerCase()))){
                        return el
                    }
                    }).map((el) =>{
                        return (
                            <div className= "games">
                                <p key={el.game_code}><img src={el.img} alt="game" width="300px" height="400px" ></img></p>       
                            </div>
                        )
                    })
                }
                </div>
            </div>
        )

    }


export default HomeGameSearch;