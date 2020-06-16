import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    ListRenderItemInfo,
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

    const renderItem = (info: ListRenderItemInfo<string>) => {
        const {item} = info;

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

    const keyExtractor = (item: string) => item;

    return (
        <View style={[styles.listContainer, styles.shadow]}>
            <FlatList
                data={list}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
            />
        </View>

    );
};

export default React.memo(TipList);
