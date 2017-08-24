import React from 'react';
import '../../public/styles/Login.css';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleSubmit() {
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      })
    })
    .then((response) => console.log(response))
     .catch((err) => {
       console.log(err,"some error happened")
        if (!responseJson.success) {
          console.log('error!!!!', err)
        }
    })
  }

  render(){
    return(
      <div className="container">
        <h1>Login</h1>
        <div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>username:</label>
              <input type="text" value={this.state.username}
                onChange={(event) => this.setState({username: event.target.value})} />
            </div>
            <div>
          <label>password:</label>
            <input type="password" value={this.state.password}
              onChange={(event) => this.setState({password: event.target.value})} />
            </div>
        <div className='center-button'>
          <button className="button" onClick={() => this.handleSubmit()}>login</button>
          <button className="button"><a href="/register">register</a></button>
        </div>
          </form>
        </div>
    </div>
    )
  }
}

export default Login;
