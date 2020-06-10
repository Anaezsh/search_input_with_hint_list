import {SearchAction} from './searchActionEnum';

import {
    ISetIsLoading,
    ISetError,
    ISaveTipList,
    ISearchAction,
} from './types/actions';
import {IState} from './types/state';

const initialState: IState = {
    tipList: {},
    isLoading: false,
    error: undefined,
};

const onSetIsLoading = (state: IState, action: ISetIsLoading): IState => {
    const {isLoading}= action;

    return {
        ...state,
        isLoading,
    }
};

const onSetError = (state: IState, action: ISetError): IState => {
    const {error}= action;

    return {
        ...state,
        error,
    }
};

const onSaveTipList = (state: IState, action: ISaveTipList): IState => {
    const {text, list}= action;

    return {
        ...state,
        tipList: {
            ...state.tipList,
            [text]: list,
        },
    }
};

export const searchReducer = (state: IState = initialState, action: ISearchAction): IState => {
    switch (action.type) {
        case SearchAction.SEARCH_SET_IS_LOADING:
            return onSetIsLoading(state, action);
        case SearchAction.SEARCH_SET_ERROR:
            return onSetError(state, action);
        case SearchAction.SEARCH_SAVE_TIP_LIST:
            return onSaveTipList(state, action);
        default:
            return state;
    }
};

