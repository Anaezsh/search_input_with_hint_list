import React from 'react';
import {
    View,
    Text,
} from 'react-native';

import {styles} from './style';

import {TEXT} from '../../constants';

interface IProps {}

export const Banner = (props: IProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{TEXT.fillPlate.toUpperCase()}</Text>
            <Text style={styles.text}>{TEXT.fruitsAndVeggies.toUpperCase()}</Text>
        </View>

    );
};

export default React.memo(Banner);
