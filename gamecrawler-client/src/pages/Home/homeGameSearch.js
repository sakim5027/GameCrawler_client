import {useState} from 'react';
import { fakeData } from './fakeData';

function HomeGameSearch() {
    const [ game, setGame ] = useState('');
    return (
        <div className= "gameSearch">
            <div id="gameDropdown" class="dropdown-content">
                <input type="text" placeholder="검색" onChange={e =>{ setGame(e.target.value)}}/>   {/* 이 부분을 fakeData에서 가져오는 게 아니라 db에서 일치하는 게 있는지 찾도록 해야 함 */}
            </div>
            {fakeData.filter(el =>{
                if(game ===""){
                    return ""
                }else if(el.title.toLowerCase().includes(game.toLocaleLowerCase())){
                    return el
                }
                }).map((el, key) =>{
                    return (
                        <div>
                            <p>{el.title}</p>       
                        </div>
                    )
                })
            }
        </div>
    )

}

export default HomeGameSearch;