

 export const loginAction = (data) => {
    console.log('data login', data)
    return ({ 
        type: 'LOGIN',
        data 
    })
}
