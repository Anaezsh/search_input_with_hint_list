import {StyleSheet} from 'react-native';

import {COLORS} from '../../constants';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.Orange,
        paddingVertical: 20,
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    title: {
        color: COLORS.White,
        fontWeight: 'bold',
        fontSize: 22,

    },
    text: {
        color: COLORS.White,
        fontWeight: 'bold',
        fontSize: 35,
    }
});
