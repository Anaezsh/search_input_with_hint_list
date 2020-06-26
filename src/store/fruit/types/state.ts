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
