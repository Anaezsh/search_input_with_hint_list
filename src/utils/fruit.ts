import {ImageSourcePropType} from 'react-native';

import {fruitImages} from '../constants';

export const getFruitImage = (id: number): ImageSourcePropType => {
    return fruitImages[id -1]?.img;
};
