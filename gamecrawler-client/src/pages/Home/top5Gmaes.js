import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Top5Games(){
    const [top5, setTop5] = useState([]);

    useEffect( ()=>{
        axios
        .get('http://ec2-18-189-171-239.us-east-2.compute.amazonaws.com:5000/statistics/top5game',
        {withCredentials:true}
        ).then(res => {
            console.log(res.data);
            setTop5(res.data);
        
        }).catch(err => alert(err))
    }, [])
    return (
        <div>
            <ul>
                {
                   // top5.map(top5 => <li >{game_code}</li>)     //나중에 game poster로 변경하기
                }
            </ul>
        </div>
    )
}
export default Top5Games;