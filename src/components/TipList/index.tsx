import React from 'react';
import {
    View,
    FlatList,
    ListRenderItemInfo,
} from 'react-native';

import {styles} from './style';

import {IFruitTip} from '../../store/search/types/state';

interface IProps {
    list: IFruitTip[] | undefined;
    isHidden: boolean;
    renderItemTip: (item: IFruitTip) => React.ReactElement;
}

export const TipList = (props: IProps) => {
    const {
        list,
        isHidden,
        renderItemTip,
    } = props;

    if (!list || list.length === 0 || isHidden) return null;

    const renderItem = (info: ListRenderItemInfo<IFruitTip>) => {
        const {item} = info;

        return renderItemTip(item);
    };

    const keyExtractor = (item: IFruitTip) => item.id.toString();

    return (
        <View style={[styles.listContainer, styles.shadow]}>
            <FlatList
                data={list}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                disableScrollViewPanResponder={true}
            />
        </View>

    );
};

export default React.memo(TipList);
