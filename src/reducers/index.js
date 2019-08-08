import { combineReducers } from 'redux';
import SignupReducer from './signUp';
import LoginReducer from './login';

const rootReducer = combineReducers({
  signupReducer: SignupReducer,
  loginReducer: LoginReducer,


});

export default rootReducer;
