import React from 'react';

class NewReview extends React.Component {
    constructor(props){
        super(props);
        this.state={
            story: "good",
            graphic: "good",
            hardness: "difficult",
            fun: "not much"
        }
        this.rateHandler = this.rateHandler.bind(this);
    }

    rateHandler(e) {
        this.setState({[e.target.name]: e.target.value});
    }
    render(){
        const {story,graphic,hardness,soundEffect,ux } = this.state;
        return (
            <form className="newReviewForm" action="http://ec2-18-189-171-239.us-east-2.compute.amazonaws.com:5000/review" method="post">
                <div className = "newReview">
                    <h2>새 리뷰 쓰기</h2>  
                    <div className = "">
                        <div className = "">게임 정보</div>
                        <div>game info component</div>
                    </div>
                    <div className = "newReviewRate">게임 평점
                        <br/>
                        <ul>
                            <li>
                                <span>스토리</span>
                                <label>스토리 구성이 별로다<input type="radio" name="story" value="not good" checked={story === "not good"} onChange={this.rateHandler}/></label>
                                 <label>보통이다<input type="radio" name="story" value="good" checked={story === "good"} onChange={this.rateHandler}/></label>
                                <label>스토리 구성이 좋다<input type="radio" name="story" value="very good" checked={story === "very good"} onChange={this.rateHandler}/></label>
                            </li>
                            <li>
                            <span>그래픽</span>
                                <label>그랙이 별로다<input type="radio" name="graphic" value="difficult" checked={graphic === "difficult"} onChange={this.rateHandler}/></label>
                                 <label>보통이다<input type="radio" name="graphic" value="normal" checked={graphic === "normal"} onChange={this.rateHandler}/></label>
                                <label>그래픽이 좋다<input type="radio" name="graphic" value="easy" checked={graphic === "easy"} onChange={this.rateHandler}/></label>
                            </li>
                            <li>
                            <span>난이도</span>
                                <label>어렵다<input type="radio" name="hardness" value="difficult" checked={hardness === "difficult"} onChange={this.rateHandler}/></label>
                                 <label>보통이다<input type="radio" name="hardness" value="normal" checked={hardness === "normal"} onChange={this.rateHandler}/></label>
                                <label>쉽다<input type="radio" name="hardness" value="easy" checked={hardness === "easy"} onChange={this.rateHandler}/></label>
                            </li>
                            <li>
                            <span>음향효과</span>
                                <label>어렵다<input type="radio" name="soundEffect" value="difficult" checked={soundEffect === "difficult"} onChange={this.rateHandler}/></label>
                                 <label>보통이다<input type="radio" name="soundEffect" value="normal" checked={soundEffect === "normal"} onChange={this.rateHandler}/></label>
                                <label>쉽다<input type="radio" name="soundEffect" value="easy" checked={soundEffect === "easy"} onChange={this.rateHandler}/></label>
                            </li>
                            <li>
                            <span>UX</span>
                                <label>어렵다<input type="radio" name="ux" value="difficult" checked={ux === "difficult"} onChange={this.rateHandler}/></label>
                                 <label>보통이다<input type="radio" name="ux" value="normal" checked={ux === "normal"} onChange={this.rateHandler}/></label>
                                <label>쉽다<input type="radio" name="ux" value="easy" checked={ux === "easy"} onChange={this.rateHandler}/></label>
                            </li>
                        </ul>
                    
                    </div>    
                    <div>
                        <textarea className="newReviewText" placeholder="내용을 입력하세요."></textarea>
                    </div>
                    <div>
                        <button type="submit" className="submitBtn">리뷰 저장</button>
                    </div>
                 </div>
                    
            </form>
        )
    }

}

export default NewReview

