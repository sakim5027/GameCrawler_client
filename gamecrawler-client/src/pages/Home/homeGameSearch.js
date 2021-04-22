import {useState} from 'react';
import { fakeData } from './fakeData';

function HomeGameSearch() {
    const [ game, setGame ] = useState('');
    const gameDetailModal=()=>{
        alert("Detail Page")
    }

    return (
        <div className= "gameSearch">
            <div className="gameFilter">
                <div className="filterBtns">
                    <button className="filterBtn" value="" onClick={e=>{setGame(e.target.value)}}>Show all</button>
                    <button className="filterBtn" value="sports" onClick={e=>{setGame(e.target.value)}}>Sports</button>
                    <button className="filterBtn" value="roll-playing" onClick={e=>{setGame(e.target.value)}}>Roll-playing</button>
                    <button className="filterBtn" value="action" onClick={e=>{setGame(e.target.value)}}>Action</button>
                </div>
                <input type="text" placeholder="Search" onChange={e =>{ setGame(e.target.value)}}/> {/* 이 부분을 fakeData에서 가져오는 게 아니라 db에서 일치하는 게 있는지 찾도록 해야 함 */}
            </div>
            <div className="filteredGames">
            {fakeData.filter(el =>{
                if(game ===""){
                    return el      
                }else if((el.title.toLowerCase().includes(game.toLocaleLowerCase()))||(el.genre.toLowerCase().includes(game.toLocaleLowerCase()))){
                    return el
                }
                }).map((el, key) =>{
                    return (
                        <div className= "games" key={key}>
                            <p><img src={el.img} alt="game" width="150px" height="200px" onClick={gameDetailModal}></img></p>       
                        </div>
                    )
                })
            }
            </div>
        </div>
    )

}

export default HomeGameSearch;