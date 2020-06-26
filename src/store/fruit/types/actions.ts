import {FruitAction} from '../fruitActionEnum';

import {IFruit} from './state';

export interface ISetIsLoading {
    type: FruitAction.FRUIT_SET_IS_LOADING;
    isLoading: boolean;
}

export interface ISetError {
    type: FruitAction.FRUIT_SET_ERROR;
    error: string;
}

export interface ISaveFruit {
    type: FruitAction.FRUIT_SAVE;
    fruit: IFruit;
}

export interface ISaveSelectedFruitId {
    type: FruitAction.FRUIT_SAVE_ID;
    id: number;
}

export type IFruitAction = ISetIsLoading | ISetError | ISaveFruit | ISaveSelectedFruitId;
