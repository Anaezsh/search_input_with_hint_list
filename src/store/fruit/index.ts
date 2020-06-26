import {FruitAction} from './fruitActionEnum';

import {
    IFruitAction,
    ISetIsLoading,
    ISetError,
    ISaveFruit,
    ISaveSelectedFruitId,
} from './types/actions';
import {IState} from './types/state';

const initialState: IState = {
    isLoading: false,
    selectedFruitId: undefined,
    selectedFruit: undefined,
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

const onSaveFruit = (state: IState, action: ISaveFruit): IState => {
    const {fruit}= action;

    return {
        ...state,
        selectedFruit: fruit,
    }
};

const onSaveSelectedFruitId = (state: IState, action: ISaveSelectedFruitId): IState => {
    const {id}= action;

    return {
        ...state,
        selectedFruitId: id,
    }
};

export const fruitReducer = (state: IState = initialState, action: IFruitAction): IState => {
    switch (action.type) {
        case FruitAction.FRUIT_SET_IS_LOADING:
            return onSetIsLoading(state, action);
        case FruitAction.FRUIT_SET_ERROR:
            return onSetError(state, action);
        case FruitAction.FRUIT_SAVE:
            return onSaveFruit(state, action);
        case FruitAction.FRUIT_SAVE_ID:
            return onSaveSelectedFruitId(state, action);
        default:
            return state;
    }
};
