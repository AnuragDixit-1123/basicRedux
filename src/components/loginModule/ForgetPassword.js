

import React, { Component } from "react";

class ForgotPassword extends Component {
    
        state = {
            emailId: '',
        }
    
    onTextChange = (key, event) => {
       console.log('value, ', )
       const value = event.target.value
       this.setState({[key]: value})
    }
   
    render() {
        
    return (
      <div className='ForgotPassword'>
        <h2>Login</h2>
           <p>{this.state.userName}</p>
          <input 
            type='text' 
            onChange={( event ) => this.onTextChange('emailId', event)} 
            value={this.state.emailId}
            placeholder={'Email Address'}
          />
          <br />
          <button>Submit</button>
      </div>
    );
    }
  }
  
  export default ForgotPassword;