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
  //
  // handleSubmit() {
  //   fetch('http://localhost:3000/', {
  //     method: 'POST',
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({
  //       username: this.state.username,
  //       password: this.state.password,
  //     })
  //   })
  //   .then((response) => response.json())
  //   .then((responseJson) => {
  //     console.log('this is my responseJson', responseJson);
  //     console.log('this is my state username', this.state.username);
  //     console.log('this is my state password', this.state.password);
  //
  //     if (responseJson.success) {
  //         console.log('login is working', responseJson);
  //         this.props.navigation.navigate('Register')
  //       } else {
  //         console.log('err')
  //       }
  //       /* do something if there was an error with fetching */
  //     })
  //    .catch((err) => {
  //       if (!responseJson.success) {
  //         console.log('error', err)
  //       }
  //   })
  // }

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
            <div>
            <Link className="register" to="/resourcemapview">login</Link>
          <Link className="register" to="/register">register</Link>
        </div>
          </form>
        </div>
    </div>
    )
  }
}

export default Login;
