import {createStore, applyMiddleware, combineReducers} from 'redux';
import {createLogger} from 'redux-logger';
import {persistStore, persistReducer, REHYDRATE} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { countReducers } from '../Reducers/count';

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
      count: countReducers,
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