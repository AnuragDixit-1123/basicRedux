

  export const validate = (data) => {
       console.log('inside validation', data)
       return true
  }


const signUp =  (state = null, action) => {
    console.log(action, 'fdjfhjfhj', state)
    switch(action.type) {
        case 'SIGN_UP':
            return {
                ...state,
                isSignUpComplete: validate(action.data)
            }
            
    }
    return state
}

export default signUp;