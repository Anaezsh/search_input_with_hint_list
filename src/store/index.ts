import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import {searchReducer} from './search';

import {IState as ISearchState} from './search/types/state';

export interface IState {
    search: ISearchState;
}

const rootReducer = combineReducers({
    search: searchReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));



