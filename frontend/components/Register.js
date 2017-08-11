import React from 'react';
import '../../public/styles/Register.css';
import ReactPasswordStrength from 'react-password-strength';
import "react-password-strength/dist/style.css";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      college: '',
      username: '',
      password: '',
      password2: '',
    };
  }

  // function handleSubmit() {
  //
  // }

  render(){
    return(
      <div className="container2">
        <h1>Register</h1>
        <div>
          <form className="form" onSubmit={this.handleSubmit}>
            <div>
              <label>name:</label>
              <input className="inputBox" type="text" value={this.state.name} onChange={(e)=>this.setState({name: e.target.value})} />
            </div>
            <div>
              <label>email:</label>
              <input className="inputBox" type="text" value={this.state.email} onChange={(e)=>this.setState({email: e.target.value})} />
            </div>
            <div>
              <label>college:</label>
              <input className="inputBox" type="text" value={this.state.college} onChange={(e)=>this.setState({college: e.target.value})} />
            </div>
            <div>
              <label>username:</label>
              <input className="inputBox" type="text" value={this.state.username} onChange={(e)=>this.setState({username: e.target.value})} />
            </div>

            <div>
          <label>password:</label>
            <input className="inputBox" type="password" value={this.state.password} onChange={(e)=>this.setState({password: e.target.value})} />

            <ReactPasswordStrength
              className="password"
              style={{ display: 'none' }}
              minLength={5}
              minScore={2}
              scoreWords={['weak', 'okay', 'good', 'better', 'strong']}
              changeCallback={{}}
              inputProps={{ name: "password_input", autoComplete: "off", className: "form-control" }}
            />
            </div>

            <div>
          <label>confirm password:</label>
            <input className="inputBox" type="password" value={this.state.password2} onChange={(e)=>this.setState({password2: e.target.value})} />
            </div>
          <div className='center-button'>
          <input className="btn btn-success" type="submit" value="Submit" />
          <input className="button" type="submit" value="Login" />
          </div>
          </form>
        </div>
    </div>
    )
  }
}

export default Register;
