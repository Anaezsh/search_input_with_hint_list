import {AppThunk, ThunkDispatchType} from '../../index';

import {
    setIsLoading,
    setError,
    saveFruit,
} from '..';

import {IFruit} from '..';

import {get} from '../../../utils/network';

// for real devise test
// interface IResponse {
//     data: IFruit[];
// }

// for simulator test
interface IResponse {
    data: IFruit;
}

// for simulator test
export const getFruitDetail = (id: number): AppThunk => {
    return (dispatch: ThunkDispatchType) => {
        dispatch(setIsLoading(true));

        return get(`/detailedFruitList/${id}`)
            .then((res: IResponse) => {
                const {data} = res;
                dispatch(saveFruit(data));
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
// export const getFruitDetail = (id: number): AppThunk => {
//     return (dispatch: ThunkDispatchType) => {
//         dispatch(setIsLoading(true));
//
//         return get('/detail')
//             .then((res: IResponse) => {
//                 const {data} = res;
//
//                 dispatch(saveFruit(data[id -1]));
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
