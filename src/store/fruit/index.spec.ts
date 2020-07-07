import fruitReducer, {
    setIsLoading,
    setError,
    saveFruit,
    saveSelectedFruitId,
} from '.';

const initial = {
    isLoading: false,
    selectedFruitId: undefined,
    selectedFruit: undefined,
    error: undefined,
};

describe('fruit reducer', () => {
    it('should handle initial state', () => {
        expect(fruitReducer(undefined, {type: 'test'})).toEqual(initial);
    });

    it('should handle start Loading', () => {
        expect(fruitReducer(initial, {type: setIsLoading.type, payload: true}))
            .toEqual({...initial, isLoading: true});
    });

    it('should handle stop Loading', () => {
        expect(fruitReducer(initial, {type: setIsLoading.type, payload: false})).toEqual(initial);
    });

    it('should handle set error', () => {
        const error = 'Error';
        expect(fruitReducer(initial, {type: setError.type, payload: error})).toEqual({...initial, error});
    });

    it('should handle save fruit', () => {
        const fruit = {
            id: 1,
            name: 'test',
            img: 'test_img',
        };
        expect(fruitReducer(initial, {type: saveFruit.type, payload: fruit}))
            .toEqual({...initial, selectedFruit: fruit});
    });

    it('should handle save selected fruit id', () => {
        const id = 'test';
        expect(fruitReducer(initial, {type: saveSelectedFruitId.type, payload: id}))
            .toEqual({...initial, selectedFruitId: id});
    });
});
