import {SearchAction} from './searchActionEnum';
import {
    ISetIsLoading,
    ISetError,
    ISaveTipList,
} from './types/actions'

export const setIsLoading = (isLoading: boolean): ISetIsLoading => {
    return {
        type: SearchAction.SEARCH_SET_IS_LOADING,
        isLoading,
    }
};

export const setError = (error: string): ISetError => {
    return {
        type: SearchAction.SEARCH_SET_ERROR,
        error,
    }
};

export const saveTipList = (text: string, list: string[]): ISaveTipList=> {
    return {
        type: SearchAction.SEARCH_SAVE_TIP_LIST,
        text,
        list,
    }
};
