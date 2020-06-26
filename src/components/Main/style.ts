import {StyleSheet} from 'react-native';

import {COLORS} from '../../constants';

export const styles = StyleSheet.create({
    containerTop: {
        backgroundColor: COLORS.Green,
    },
    containerBottom: {
        flex: 1,
        backgroundColor: COLORS.White,
    },
    main: {
        flex: 1,
        backgroundColor: COLORS.White,
        paddingHorizontal: 10,
    },
    logoContainer: {
        paddingTop: 20,
        paddingLeft: 10,
        backgroundColor: COLORS.WhiteGrey,
    },
    logo: {
        marginBottom: 20,
        height: 100,
        width: 130,
    },
});
