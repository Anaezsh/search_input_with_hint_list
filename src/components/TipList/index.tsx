import React from 'react';
import {
    View,
    Text,
    ScrollView, TouchableOpacity,
} from 'react-native';

import {styles} from './styles';

interface IProps {
    list: string[] | undefined;
    isHidden: boolean;
    onListItemPress: (item: string) => () => void;
}

export const TipList = (props: IProps) => {
    const {
        list,
        isHidden,
        onListItemPress,
    } = props;

    if (!list || list.length === 0 || isHidden) return null;

    const renderItem = (item: string) => {
        return (
            <TouchableOpacity
                key={item}
                onPress={onListItemPress(item)}
            >
                <Text style={styles.item}>
                    {item}
                </Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={[styles.listContainer, styles.shadow]}>
            <ScrollView>
                {list.map((item: string) => {
                    return renderItem(item);
                })}
            </ScrollView>
        </View>

    );
};

export default React.memo(TipList);
