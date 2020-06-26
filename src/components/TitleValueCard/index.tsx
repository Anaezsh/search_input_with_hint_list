import React from 'react';
import {
    View,
    Text,
} from 'react-native';

import {styles} from './style';

interface IProps {
    title: string;
    value: string | undefined;
}

export const TitleValueCard = (props: IProps) => {
    const {title, value} = props;

    if (!value) return null;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text>{value}</Text>
        </View>

    );
};

export default React.memo(TitleValueCard);
