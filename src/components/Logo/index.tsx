import React from 'react';
import {
    View,
    Image,
} from 'react-native';

import {styles} from './style';

interface IProps {}

export const Logo = (props: IProps) => {
    return (
        <View style={styles.logoContainer}>
            <Image
                source={require('../../../assets/logo.png')}
                style={styles.logo}
            />
        </View>

    );
};

export default React.memo(Logo);
