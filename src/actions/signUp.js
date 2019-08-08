

 export const signUpAction = (data) => {
    console.log('data', data)
    return ({ 
        type: 'SIGN_UP',
        data 
    })
}
