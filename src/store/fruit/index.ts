import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface IState {
    selectedFruitId: number | undefined;
    selectedFruit: IFruit | undefined;
    isLoading: boolean;
    error: string | undefined;
}

export interface IFruit {
    id: number;
    name: string;
    img: string;
    serving?: string;
    nutrition?: string[];
    lookingFor?: string;
    store?: string;
    prepare?: string;
}

const initialState: IState = {
    isLoading: false,
    selectedFruitId: undefined,
    selectedFruit: undefined,
    error: undefined,
};

const fruitSlice = createSlice({
    name: 'fruit',
    initialState,
    reducers: {
        setIsLoading(state: IState, action: PayloadAction<boolean>) {
            state.isLoading = action.payload;
        },
        setError(state: IState, action: PayloadAction<string>) {
            state.error = action.payload;
        },
        saveFruit(state: IState, action: PayloadAction<IFruit>) {
            state.selectedFruit = action.payload;
        },
        saveSelectedFruitId(state: IState, action: PayloadAction<number>) {
            state.selectedFruitId = action.payload;
        }
    }
});

export const {
    setIsLoading,
    setError,
    saveFruit,
    saveSelectedFruitId,
} = fruitSlice.actions;

export default fruitSlice.reducer;
