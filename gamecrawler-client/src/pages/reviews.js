import React from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import ReviewList from './reviewList'


class Reviews extends React.Component{
    constructor(props){
        super(props);
        this.state={
            selectedGenre: "",
            genreOptions: genreSelectList.genreOptions
        }
        this.handleGenreChange = this.handleGenreChange.bind(this);
    }

    handleGenreChange(event) {
        this.setState({selectedGenre: event.target.value});
    }
  
    render(){
        return (
            <div>
                <div className='mypageContainer'>
                    <h2>Reviews</h2>
                    <br />
                    <hr />
                    <br />
                    <label>Filter By</label>
                    <select className = "selectBox" name="genre" value={this.state.selectedGenre} onChange={this.handleGenreChange}>
                        { this.state.genreOptions.map((option) => <option>{option}</option>)}
                    </select>
                    <span>
                    <Link to='/writeReviews'><input type='button' className = "reviewBtn" value='리뷰 쓰기'/></Link>
                    </span>
                </div>
                <ul>
                    <li><ReviewList/></li>
                </ul>
            </div>
        );
    }
  
}

const genreSelectList = {
    selectedGenre : "",
    genreOptions: ['Select Genre','Adventure','Action','Arcade','FPS','Fighting','Horror','Music','Puzzle','Point-and-click','Platform','Puzzle','Role-playing (RPG)','Real Time Strategy (RTS)','Racing','Sport','Simulator','Shooter','Tactical','Visual Novel', 'Indie']
}

export default Reviews;