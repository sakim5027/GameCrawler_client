import React,{useEffect, useState} from 'react';
import axios from 'axios';

class ReviewList extends React.Component{

    constructor(props){
        super(props);
        this.state={
            reviewData : []
        }
        this.reviewHandler = this.reviewHandler.bind(this);
    }

    componentDidMount(){
        this.reviewHandler();
    }

    reviewHandler = async() => {
        await axios
        .get('http://ec2-3-128-203-233.us-east-2.compute.amazonaws.com:5000/reviews',
            {withCredentials:true})
        .then(res => {
            console.log("reviewData:",res.data.data.reviewList);
            this.setState({
                reviewData: res.data.data.reviewList
            })
        })
    }

    render(){
        const{reviewData}= this.state;

        if(reviewData){
            return(
                <div>
                    { reviewData.map((el)=>{
                        <li>
                            <div>{el.game.game_name}</div>
                            <div>{el.rate}</div>
                            <div>{el.user_id}</div>
                        </li>
                        }) 
                    }
                </div>
        
            )
        }
        else{
            return(
                <div>There is no review</div>
            )
        }
    }

}

// function ReviewList(){

//     const url = 'http://ec2-3-128-203-233.us-east-2.compute.amazonaws.com:5000/reviews'
//     const [review, setReview] = useState(null);

//     useEffect(()=>{
//         axios.get(url, {withCredentials:true})
//             .then(res=>{
//                 setReview(res.data.data)
//             })
//     }, [url])

//     if(review){
//         return(
//             <div>
//                 { review.map((el)=>{
//                     <li>
//                         <div>{el.game_name}</div>
//                         <div>{el.user_id}</div>
//                     </li>
//                     }) 
//                 }
//             </div>
    
//         )
//     }
//     else{
//         return(
//             <div>waiting...</div>
//         )
//     }
    
// }

export default ReviewList;