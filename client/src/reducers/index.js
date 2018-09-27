// Root Reducer
import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import todos from './TodoReducer';
import messages from './messageReducer';

//import { uiReducer } from './reducer-ui';
import visibilityFilter from './visibilityFilter';
import modal from './modalReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  form: reduxForm,
  //ui: uiReducer,
  todos,
  messages,
  visibilityFilter,
  modal
});
