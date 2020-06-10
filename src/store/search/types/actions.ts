import {SearchAction} from '../searchActionEnum';

export interface ISetIsLoading {
    type: SearchAction.SEARCH_SET_IS_LOADING;
    isLoading: boolean;
}

export interface ISetError {
    type: SearchAction.SEARCH_SET_ERROR;
    error: string;
}

export interface ISaveTipList {
    type: SearchAction.SEARCH_SAVE_TIP_LIST;
    text: string;
    list: string[];
}

export type ISearchAction = ISetIsLoading | ISetError | ISaveTipList;
