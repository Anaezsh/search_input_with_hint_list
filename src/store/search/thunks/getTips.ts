import {Dispatch} from 'react';

import {
    setIsLoading,
    setError,
    saveTipList,
} from '../actions';

import {ISearchAction} from '../types/actions';

import {get} from '../../../utils/network';

interface IResponse {
    data: Record<string, string[]>
}

export const getTips = (text: string) => {
    return (dispatch: Dispatch<ISearchAction>) => {
        dispatch(setIsLoading(true));

        return get('/tips')
            .then((res: IResponse) => {
                const {
                    data,
                } = res;
                const firstSymbol: string = text[0];
                const list: string[] = data[firstSymbol]
                    ? data[firstSymbol].filter((item: string) => item.includes(text))
                    : [];

                dispatch(saveTipList(text, list));
            })
            .catch((err: string) => {
                console.log('err', err);
                dispatch(setError(err));
            })
            .finally(() => {
                dispatch(setIsLoading(false));
            })
    }
};
