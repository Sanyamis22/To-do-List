import {createStore, applyMiddleware} from 'redux';
import rootReducer from './rootReducers';
import createSagaMiddleware from 'redux-saga';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist'


const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)




const store = createStore(persistedReducer);
const persistor = persistStore(store)




export {store, persistor};