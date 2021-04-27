import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Top5Games(){
    const [top5, setTop5] = useState([]);

    useEffect( ()=>{
        axios
        .get('http://ec2-3-128-203-233.us-east-2.compute.amazonaws.com:5000/statistics/top5game',
        {withCredentials:true}
        ).then(res => {
            console.log(res.data.data);
            const {game_id, game_image} = res.data.data
            setTop5(res.data.data); // 이렇게 하면 될까?
            console.log(top5)
        }).catch(err => alert(err))
    }, [])
    return (
        <div>
            <ul>
                {
                    top5.map(el => <li key={el.game_id}>{el.game_image}</li>)     //나중에 gmae image로 변경하기
                }
            </ul>
        </div>
    )
}
export default Top5Games;