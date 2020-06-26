import React from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';

import {styles} from './style';
import {TEXT} from "../../constants";

interface IProps {
    serving: string | undefined;
    nutrition: string[] | undefined;
}

export const Nutrition = (props: IProps) => {
    const {serving, nutrition} = props;

    if (!nutrition || !nutrition.length) return null;

    return (
        <View style={styles.nutritionContainer}>
            <Text style={styles.nutritionTitle}>{TEXT.nutritionInformation}</Text>

            {serving && <Text style={styles.serving}>{TEXT.oneServing} = {serving}</Text>}

            {nutrition.map((item: string) => {
                return (
                    <View style={styles.nutritionRow} key={item}>
                        <Image
                            source={require('../../../assets/checkbox_select.png')}
                            style={styles.checkbox}
                        />
                        <Text style={styles.nutritionText}>{item}</Text>
                    </View>
                )
            })}
        </View>

    );
};

export default React.memo(Nutrition);
