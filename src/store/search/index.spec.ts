import searchReducer, {
    setIsLoading,
    setError,
    saveTipList,
} from '.';

const initial = {
    tipList: {},
    isLoading: false,
    error: undefined
};

describe('search reducer', () => {
    it('should handle initial state', () => {
        expect(searchReducer(undefined, {type: 'test'})).toEqual(initial);
    });

    it('should handle start Loading', () => {
        expect(searchReducer(initial, {type: setIsLoading.type, payload: true}))
            .toEqual({...initial, isLoading: true});
    });

    it('should handle stop Loading', () => {
        expect(searchReducer(initial, {type: setIsLoading.type, payload: false})).toEqual(initial);
    });

    it('should handle set error', () => {
        const error = 'Error';
        expect(searchReducer(initial, {type: setError.type, payload: error})).toEqual({...initial, error});
    });

    it('should handle save tip list', () => {
        const text = 'k';
        const list = ['kiwi', 'kumquat'];
        expect(searchReducer(initial, {type: saveTipList.type, payload: {text, list}}))
            .toEqual({...initial, tipList: {[text]: list}});
    });
});
