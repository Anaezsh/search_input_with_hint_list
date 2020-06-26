import {StyleSheet} from 'react-native';

import {COLORS} from '../../constants';

export const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: COLORS.Orange,
        paddingVertical: 20,
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    title: {
        color: COLORS.Orange,
        fontSize: 20,

    },
    text: {
        color: COLORS.Orange,
        fontSize: 18,
    }
});
