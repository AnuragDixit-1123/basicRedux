

import React, { Component } from "react";
import { connect } from 'react-redux'
import {loginAction} from '../../actions/loginAction';

class Login extends Component {
    
        state = {
            userName: '',
            password: ''
        }
    
    onTextChange = (key, event) => {
       console.log('value, ', )
       const value = event.target.value
       this.setState({[key]: value})
    }

    navigate = (type) => { 
      if (type === 'login') {
        this.props.login(this.state)
        // this.props.history.push('/success');
      }
      else {
        this.props.history.push('/forgetPassword');
      }
    }
   
    render() {
        
    return (
      <div className='Login'>
        <h2>Login</h2>
          <input 
            type='text' 
            onChange={( event ) => this.onTextChange('userName', event)} 
            value={this.state.userName}
            placeholder={'Username'}
          />
          <br />
          <input 
            type='password' 
            onChange={( event ) => this.onTextChange('password', event)} 
            value={this.state.password}
            placeholder={'password'}
          />
          <br />
          <button
            onClick={ () => this.navigate('login')}
          >
            Login
          </button>
          <button 
            className='forgetButton'
            onClick={ () => this.navigate('forget')}
          >
            Forget Password
          </button>

      </div>
    );
    }
  }
  

  function mapDispatchToProps(dispatch) {
    console.log('inside map to dispatch login', dispatch)
  return { 
      login: (data) => dispatch(loginAction(data)),
}
}

function mapStateToProps(state) {
    console.log('state inside the login list ', state)
    return { 
      isLoggedIn: (state.signupReducer) ? state.signupReducer.isSignUpComplete : false ,
      isLoginValidate: (state.signupReducer) ? state.signupReducer.isSignUpComplete : false 
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)