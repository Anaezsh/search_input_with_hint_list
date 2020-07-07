import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface IState {
    tipList: Record<string, IFruitTip[]>;
    isLoading: boolean;
    error: string | undefined;
}

export interface IFruitTip {
    id: number;
    name: string;
}

interface ISaveTipListPayload {
    text: string;
    list: IFruitTip[];
}

const initialState: IState = {
    tipList: {},
    isLoading: false,
    error: undefined,
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setIsLoading(state: IState, action: PayloadAction<boolean>) {
            state.isLoading = action.payload;
            state.error = undefined;
        },
        setError(state: IState, action: PayloadAction<string>) {
            state.error = action.payload;
        },
        saveTipList(state: IState, action: PayloadAction<ISaveTipListPayload>) {
            const {text, list}= action.payload;
            state.tipList[text] = list;
        }
    }
});

export const {
    setIsLoading,
    setError,
    saveTipList,
} = searchSlice.actions;

export default searchSlice.reducer;

