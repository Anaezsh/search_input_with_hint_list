import React from 'react';
import {
    View,
    Text,
} from 'react-native';

import {styles} from './style';

import {TEXT} from '../../constants';

interface IProps {}

export const Error = (props: IProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{TEXT.errorTitle}</Text>
            <Text style={styles.text}>{TEXT.errorText}</Text>
        </View>

    );
};

export default React.memo(Error);
