export interface IState {
    tipList: Record<string, string[]>;
    isLoading: boolean;
    error: string | undefined;
}
