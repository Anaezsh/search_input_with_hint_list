import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import {searchReducer} from './search';
import {fruitReducer} from './fruit';

import {IState as ISearchState} from './search/types/state';
import {IState as IFruitState} from './fruit/types/state';

export interface IState {
    search: ISearchState;
    fruit: IFruitState;
}

const rootReducer = combineReducers({
    search: searchReducer,
    fruit: fruitReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));



