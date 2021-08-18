import {combineReducers} from 'redux';
import {catReducer} from './catReducer';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  debug: true,
  storage: AsyncStorage,
  whitelist: ['catReducer'],
};

const rootReducer = combineReducers({
  catReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
