import {
    StyleSheet,
} from 'react-native';

import {COLORS} from '../../constants';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 40,
        borderRadius: 5,
        borderWidth: 1,
        alignItems: 'center',
        paddingLeft: 9,
        marginBottom: 10,
    },
    isFocused: {
        borderColor: COLORS.Blue,
    },
    default: {
        borderColor: COLORS.DarkGrey,
    },
    img: {
        height: 25,
        width: 25,
    },
    imgCross: {
        height: 35,
        width: 35,
    },
    searchInput: {
        flex: 1,
        marginLeft: 10,
        fontSize: 14,
        lineHeight: 18,
    },
});
