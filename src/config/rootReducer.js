import {combineReducers} from 'redux'

//reducers
import home from '../Features/Home/reducer'

import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import {persistReducer} from 'redux-persist'

// const presistConfig = {
//     key : 'root',
//     storage: storage,
//     blacklist:['auth'],
//     stateReconciler: autoMergeLevel2 ,
//     timeout: null,
// }

// const authPresistConfig = {
//     key: 'auth',
//     storage: storage,
//     blacklist: ['userError', 'loginErrorMessage', 'error' , 'loggedUserDetailsWithoutSave', 'loading','network'],
//     timeout: null,
// }

const appReducer = combineReducers({
    home,
    //auth: persistReducer(authPresistConfig,AuthReducer),
})

export default persistReducer(presistConfig,appReducer)