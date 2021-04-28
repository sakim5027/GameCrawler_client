import React from 'react';
import Like from './like'

class NewReview extends React.Component {
    constructor(props){
        super(props);
        this.state={
            story: "good",
            graphic: "good",
            hardness: "normal",
            soundEffect:"good",
            ux:"good",
            content:""
        }
        this.rateHandler = this.rateHandler.bind(this);
    }

    rateHandler(e) {
        this.setState({[e.target.name]: e.target.value});
    }
    submitHandler(e){
        alert('리뷰가 저장되었습니다.');
        e.preventDefault();
        e.target.reset();
    }
    render(){
        const {story,graphic,hardness,soundEffect,ux } = this.state;
        // const rateContent=[
        //     ["story",["not good","good","very good"]],
        //     ["graphic",["not good","good","very good"]]
        // ]
        // const arr1=rateContent[0][1]

        // const radioOption = function(el){
        //    return (<label><input type="radio" name="story" value={el} checked={story === {el}} onChange={this.rateHandler}/>{el}</label>)
        // }

        return (
            <form className="newReviewForm" action="http://ec2-3-128-203-233.us-east-2.compute.amazonaws.com:5000/review" method="post" onSubmit={this.submitHandler}>
                <div className = "newReview">
                    <h2>새 리뷰 쓰기</h2>  
                   <div className = "newReviewContainer">
                        <div className = "">게임 정보</div>
                            <div className="gameForReview">
                                {this.props.game_image}
                                <Like/>
                            </div>
                    <div>game info component</div>
                    </div>
                    <div className = "newReviewRate">게임 평점
                        <br/>
                        <ul>
                            <li>
                                <span>스토리</span>
                                {/* {rateContent[0][1].map((el)=>{return (<label key={el.uuid}><input type="radio" name="story" value={el} checked={story === {el}} onChange={this.rateHandler}/>{el}</label>)})} */}
                                <label><input type="radio" name="story" value="not good" checked={story === "not good"} onChange={this.rateHandler}/> 별로다</label>
                                <label><input type="radio" name="story" value="good" checked={story === "good"} onChange={this.rateHandler}/> 보통이다</label>
                                <label><input type="radio" name="story" value="very good" checked={story === "very good"} onChange={this.rateHandler}/> 좋다</label>                    
                            </li>
                            <li>
                            <span>그래픽</span>
                                <label><input type="radio" name="graphic" value="not good" checked={graphic === "not good"} onChange={this.rateHandler}/> 별로다</label>
                                 <label><input type="radio" name="graphic" value="good" checked={graphic === "good"} onChange={this.rateHandler}/> 보통이다</label>
                                <label><input type="radio" name="graphic" value="very good" checked={graphic === "very good"} onChange={this.rateHandler}/> 좋다</label>
                            </li>
                            <li>
                            <span>난이도</span>
                                <label><input type="radio" name="hardness" value="difficult" checked={hardness === "difficult"} onChange={this.rateHandler}/> 어렵다</label>
                                 <label><input type="radio" name="hardness" value="normal" checked={hardness === "normal"} onChange={this.rateHandler}/> 보통이다</label> 
                                <label><input type="radio" name="hardness" value="easy" checked={hardness === "easy"} onChange={this.rateHandler}/> 쉽다</label>
                            </li>
                            <li>
                            <span>음향효과</span>
                                <label><input type="radio" name="soundEffect" value="not good" checked={soundEffect === "not good"} onChange={this.rateHandler}/> 별로다</label>
                                 <label><input type="radio" name="soundEffect" value="good" checked={soundEffect === "good"} onChange={this.rateHandler}/> 보통이다</label>
                                <label><input type="radio" name="soundEffect" value="very good" checked={soundEffect === "very good"} onChange={this.rateHandler}/> 좋다</label>
                            </li>
                            <li>
                            <span>사용자경험</span>
                                <label><input type="radio" name="ux" value="not good" checked={ux === "not good"} onChange={this.rateHandler}/> 별로다</label>
                                 <label><input type="radio" name="ux" value="good" checked={ux === "good"} onChange={this.rateHandler}/> 보통이다</label>
                                <label><input type="radio" name="ux" value="very good" checked={ux === "very good"} onChange={this.rateHandler}/> 좋다</label>
                            </li>
                        </ul>
                    </div>    
                    <div>
                        <textarea className="newReviewText" placeholder="내용을 입력하세요." name="content" onChange={this.rateHandler}></textarea>
                    </div>
                    <div>
                        <button type="submit" className="submitBtn" >저장</button>
                    </div>
                 </div>
                    
            </form>
        )
    }

}

export default NewReview
