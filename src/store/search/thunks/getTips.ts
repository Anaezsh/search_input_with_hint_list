import {Dispatch} from 'react';

import {
    setIsLoading,
    setError,
    saveTipList,
} from '../actions';

import {ISearchAction} from '../types/actions';

import {get} from '../../../utils/network';

interface IResponse {
    data: IFruitTip[];
}

// for simulator test
export const getTips = (text: string) => {
    return (dispatch: Dispatch<ISearchAction>) => {
        dispatch(setIsLoading(true));

        return get(`/fruitList?q=${text}`)
            .then((res: IResponse) => {
                const {data} = res;
                const textLower: string = text.toLowerCase();
                const result = data.filter((item: IFruitTip) => {
                        const {name} = item;
                         return name.startsWith(textLower);
                     });
                console.log(result);
                dispatch(saveTipList(textLower, result));
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

// for real devise test
// export const getTips = (text: string) => {
//     return (dispatch: Dispatch<ISearchAction>) => {
//         dispatch(setIsLoading(true));
//
//         return get('/tips')
//             .then((res: IResponse) => {
//                 const {data} = res;
//                 const textLower: string = text.toLowerCase();
//                 const result = data.filter((item: IFruitTip) => {
//                     const {name} = item;
//                     return name.startsWith(textLower);
//                 });
//
//                 dispatch(saveTipList(textLower, result));
//             })
//             .catch((err: string) => {
//                 console.log('err', err);
//                 dispatch(setError(err));
//             })
//             .finally(() => {
//                 dispatch(setIsLoading(false));
//             })
//     }
// };
