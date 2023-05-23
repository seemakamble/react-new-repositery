import React from 'react'
import {Provider} from 'react-redux'
import {store} from './store'
import RegSignUp from './RegSignUp';
import { useSelector,useDispatch} from 'react-redux';
function RegMain(){
  return(
    <div>
<Provider store={store}>
  <RegSignUp/>
  </Provider>
    </div>
  );
}
export default RegMain;