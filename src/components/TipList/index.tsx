import React from 'react';
import {
    View,
    FlatList,
    ListRenderItemInfo,
} from 'react-native';

import {styles} from './styles';

interface IProps {
    list: string[] | undefined;
    isHidden: boolean;
    renderItemTip: (item: string) => React.ReactElement;
}

export const TipList = (props: IProps) => {
    const {
        list,
        isHidden,
        renderItemTip,
    } = props;

    if (!list || list.length === 0 || isHidden) return null;

    const renderItem = (info: ListRenderItemInfo<string>) => {
        const {item} = info;

        return renderItemTip(item);
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
