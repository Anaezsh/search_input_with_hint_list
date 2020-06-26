import {FruitAction} from './fruitActionEnum';

import {
    ISetIsLoading,
    ISetError,
    ISaveFruit,
    ISaveSelectedFruitId,
} from './types/actions';
import {IFruit} from './types/state';

export const setIsLoading = (isLoading: boolean): ISetIsLoading => {
    return {
        type: FruitAction.FRUIT_SET_IS_LOADING,
        isLoading,
    }
};

export const setError = (error: string): ISetError => {
    return {
        type: FruitAction.FRUIT_SET_ERROR,
        error,
    }
};

export const saveFruit = (fruit: IFruit): ISaveFruit => {
    return {
        type: FruitAction.FRUIT_SAVE,
        fruit,
    }
};

export const saveSelectedFruitId = (id: number): ISaveSelectedFruitId => {
    return {
        type: FruitAction.FRUIT_SAVE_ID,
        id,
    }
};
