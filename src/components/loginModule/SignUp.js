

import React, { Component } from "react";
import { connect } from 'react-redux'
import {signUpAction} from '../../actions/signUp';

class SignUp extends Component {
    
        state = {
            firstName: '',
            lastName: '',
            emailId: '',
            userName: '',
            mobileNo: '',
            password: '',
            confirmPassword: ''
        }
    
    onTextChange = (key, event) => {
       console.log('value, ', )
       const value = event.target.value
       this.setState({[key]: value})
    }

     navigate = (type) => {
      
      if (type === 'login') {
        this.props.history.push('/login');
      }
      else {
         this.props.signUp(this.state)
        if(this.props.isSignUpComplete) {
          this.props.history.push('/login');
        }
      }
    }
   
    render() {
        
    return (
      <div className='SignUp'>
        <h2>SignUp</h2>
           <p>{this.state.userName}</p>
          <input 
            type='text' 
            onChange={( event ) => this.onTextChange('firstName', event)} 
            value={this.state.firstName}
            placeholder={'First Name'}
          />
          <br />
          <input 
            type='text' 
            onChange={( event ) => this.onTextChange('lastName', event)} 
            value={this.state.lastName}
            placeholder={'Last Name'}
          />
          <br />
          <input 
            type='text' 
            onChange={( event ) => this.onTextChange('emailId', event)} 
            value={this.state.emailId}
            placeholder={'Email Id'}
          />
          <br />
          <input 
            type='text' 
            onChange={( event ) => this.onTextChange('userName', event)} 
            value={this.state.userName}
            placeholder={'User Name'}
          />
          <br />
          <input 
            type='text' 
            onChange={( event ) => this.onTextChange('mobileNo', event)} 
            value={this.state.mobileNo}
            placeholder={'Mobile No.'}
          />
          <br />
          <input 
            type='password' 
            onChange={( event ) => this.onTextChange('password', event)} 
            value={this.state.password}
            placeholder={'password'}
          />
          <br />
           <input 
            type='password' 
            onChange={( event ) => this.onTextChange('confirmPassword', event)} 
            value={this.state.confirmPassword}
            placeholder={'Confirm Password'}
          />
          <br />
          <button
            onClick={ () => this.navigate('signUp')}
          >
            Sign Up
          </button>
          <button 
            className='loginButton'
            onClick={ () => this.navigate('login')}
          >
              Login
          </button>


      </div>
    );
    }
  }

  function mapDispatchToProps(dispatch) {
    console.log('inside map to dispatch', dispatch)
  return { 
      signUp: (data) => dispatch(signUpAction(data)),
}
}

function mapStateToProps(state) {
    console.log('state inside the book list ', state)
    return { 
      isSignUpComplete: (state.signupReducer) ? state.signupReducer.isSignUpComplete : false 
    }
}
  
  export default connect(mapStateToProps, mapDispatchToProps)(SignUp)