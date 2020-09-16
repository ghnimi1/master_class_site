import {createStore, applyMiddleware, combineReducers} from 'redux';
import {
 
    authReducer,
   
  } from './preducers/auth';
import {createLogger} from 'redux-logger';
import {persistStore, persistReducer, REHYDRATE} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
export const AUTH_PERSIST = 'AUTH_PERSIST';

export const persistConfig = {
    key: 'root',
    storage,
    timeout: null,
    keyPrefix: '',
    debug: true,
    serialize: true,
    // blacklist: ["wallet"]
  };
  const persistedReducer = persistReducer(
    persistConfig,
    combineReducers({
      auth: authReducer,
     // users: authReducer,
     
    }),
  );
  export const logger = createLogger({});
export const store = createStore(persistedReducer, applyMiddleware(logger));
export const persistor = persistStore(store);
export default {
    store,
    persistor,
  };