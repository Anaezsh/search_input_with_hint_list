import {StyleSheet} from 'react-native';

import {COLORS} from '../../constants';

export const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
    },
    title: {
        color: COLORS.Green,
        fontSize: 24,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        marginBottom: 30,
    },
    img: {
        marginBottom: 20,
    },
    checkbox: {
        height: 20,
        width: 20,
    },
    nutritionContainer: {
        marginBottom: 20,
    },
    nutritionRow: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    nutritionTitle: {
        color: COLORS.Orange,
        fontSize: 20,
        textTransform: 'uppercase',
        marginBottom: 20,
    },
    nutritionText: {
        paddingTop: 1,
    },
    serving: {
        marginBottom: 15,
    }
});
