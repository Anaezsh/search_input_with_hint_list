import {configureStore, combineReducers, Action} from '@reduxjs/toolkit';
import {ThunkAction, ThunkDispatch} from 'redux-thunk'

import searchReducer from './search';
import fruitReducer from './fruit';

import {IState as ISearchState} from './search';
import {IState as IFruitState} from './fruit';

export interface IState {
    search: ISearchState;
    fruit: IFruitState;
}

const rootReducer = combineReducers({
    search: searchReducer,
    fruit: fruitReducer,
});

export type AppThunk = ThunkAction<void, IState, unknown, Action<string>>;

export type ThunkDispatchType = ThunkDispatch<IState, unknown, Action<string>>;

export const store = configureStore({reducer: rootReducer});



