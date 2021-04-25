import React,{useEffect, useState} from 'react';
import axios from 'axios';

function ReviewList(){

    const url = 'http://ec2-18-189-171-239.us-east-2.compute.amazonaws.com:5000/reviews'
    const [review, setReview] = useState(null);

    useEffect(()=>{
        axios.get(url)
            .then(res=>{
                setReview(res.data)
            })
    }, [url])

    if(review){
        return(
            <li>
                <div>review.game_name</div>
                <div>review.user_id</div>
            </li>
    
        )
    }
    else{
        return(
            <div>waiting...</div>
        )
    }
    
}

export default ReviewList;