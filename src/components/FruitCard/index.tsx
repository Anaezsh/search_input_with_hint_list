import React from 'react';
import {
    View,
    Text,
    Image,
    ImageSourcePropType,
} from 'react-native';

import {styles} from './style';

import TitleValueCard from '../TitleValueCard';
import Nutrition from './Nutrition';

import {IFruit} from '../../store/fruit/types/state';

import {TEXT} from '../../constants';

import {getFruitImage} from '../../utils/fruit';

interface IProps {
    fruit: IFruit;
}

export const FruitCard = (props: IProps) => {
    const {fruit} = props;
    const {
        id,
        name,
        serving,
        nutrition,
        lookingFor,
        store,
        prepare,
    } = fruit;
    const img: ImageSourcePropType = getFruitImage(id);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{name}</Text>

            <Image
                source={img}
                style={styles.img}
            />

            <Nutrition
                serving={serving}
                nutrition={nutrition}
            />

            <TitleValueCard
                title={TEXT.lookFor}
                value={lookingFor}
            />

            <TitleValueCard
                title={TEXT.store}
                value={store}
            />

            <TitleValueCard
                title={TEXT.prepare}
                value={prepare}
            />
        </View>

    );
};

export default React.memo(FruitCard);
