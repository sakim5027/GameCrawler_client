import React from 'react';
import axios from 'axios';
import { GoogleLogin } from 'react-google-login';
const dotenv = require('dotenv');


dotenv.config();

export class GoogleLoginButton extends React.Component{

    constructor(props){
        super(props);
        this.state={
            GoogleId: '',
            GoogleEmail:''
        }
        this.onSuccess = this.onSuccess.bind(this);
        this.onFailure = this.onFailure.bind(this);
        this.googleLoginRequestHandler = this.googleLoginRequestHandler.bind(this);
      }
    

    googleLoginRequestHandler = async() =>{
        await axios
          .post(
            'http://ec2-3-128-203-233.us-east-2.compute.amazonaws.com:5000/user/auth-login',
            {
              auth_id: this.state.id
            },
            { 'Content-Type': 'application/json', withCredentials: true }
          )
          .then((res) => {
            this.props.loginHandler(true);
            return axios.get('http://ec2-3-128-203-233.us-east-2.compute.amazonaws.com:5000/user/info', {
              withCredentials: true,
            });
          })
          .then((res) => {
            let { nickname, genre } = res.data.data;
            let { email } = this.state.GoogleEmail

            this.props.setUserInfo({
              nickname,
              email,
              genre
            });
          })
          .catch((err) => 
            alert(err)
          );
      }

    onSuccess = async(res) => {
        console.log(res);
        let { googleId, profileObj : { email} } = res;

        this.setState({
            GoogleId: googleId,
            GoogleEmail: email
        })
        
        await this.googleLoginRequestHandler();
    }

    onFailure = (error) => {
        console.log(error);
    }

    render(){
        const clientId = process.env.clientID

        return(
            <div>
                <GoogleLogin
                    clientId={clientId}
                    responseType={"id_token"}
                    onSuccess={this.onSuccess}
                    onFailure={this.onFailure}
                    buttonText="Google Login"
                    onClick={this.googleLoginRequestHandler}
                />
            </div>
        )
    }
    
}

export default GoogleLoginButton;