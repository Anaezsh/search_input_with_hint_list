import React from 'react';
import {
    View,
    ActivityIndicator,
} from 'react-native';

import {styles} from './style';

import {COLORS} from '../../constants';

interface IProps {}

export const Spinner = (props: IProps) => {
    return (
        <View style={styles.container}>
            <ActivityIndicator
                size='large'
                color={COLORS.Green}
            />
        </View>

    );
};

export default React.memo(Spinner);
