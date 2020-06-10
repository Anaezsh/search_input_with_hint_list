import {
    StyleSheet,
} from 'react-native';

import {COLORS} from '../../constants';

export const styles = StyleSheet.create({
    listContainer: {
        maxHeight: 200,
        borderRadius: 5,
        position: 'absolute',
        top: 40,
        left: 0,
        right: 0,
        backgroundColor: COLORS.White,
        zIndex: 1000,
    },
    shadow: {
        shadowColor: COLORS.GreyBlue,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowRadius: 5,
        shadowOpacity: 0.5,
        elevation: 1,
    },
    item: {
        height: 30,
        paddingHorizontal: 5,
        lineHeight: 30,
    },
});
