

  export const validate = (data) => {
    console.log('inside validation login', data)
    return true
}


const login =  (state = null, action) => {
 console.log(action, 'login', state)
 switch(action.type) {
     case 'LOGIN':
         return {
             ...state,
             isLoginValidate: validate(action.data),
             isLoggedIn: false
         }
         
 }
 return state
}

export default login;