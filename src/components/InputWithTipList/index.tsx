import React, {useState, useEffect, useCallback} from 'react';
import {
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {styles} from './style';

import SearchInput from '../SearchInput';
import TipList from '../TipList';

import {getTips} from '../../store/search/thunks/getTips';
import {getFruitDetail} from '../../store/fruit/thunks/getFruitDetail';
import {saveSelectedFruitId} from '../../store/fruit';

import {IState} from '../../store';
import {IFruitTip} from '../../store/search';

import {TEXT} from '../../constants';

interface IProps{}

export const InputWithTipList = (props: IProps) => {
    const [searchText, setSearchText] = useState<string>('');
    const [isTipsHidden, setIsTipsHidden] = useState<boolean>(false);
    const tipList: IFruitTip[] | undefined = useSelector(
        (store: IState) => store.search.tipList[searchText.toLowerCase()]);
    const selectedFruitId: number | undefined = useSelector((store: IState) => store.fruit.selectedFruitId);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!searchText) return;

        if (!tipList) {
            dispatch(getTips(searchText));
        }
    }, [searchText]);

    const onSearch = useCallback(() => {
        if (!selectedFruitId) return;

        dispatch(getFruitDetail(selectedFruitId));
    }, [getFruitDetail, selectedFruitId]);

    const onSearchTextChange = (text: string) => {
        if (isTipsHidden) {
            setIsTipsHidden(false);
        }

        setSearchText(text);
    };

    const renderItemTip = (item: IFruitTip) => {
        const onPress = () => {
            const {id, name} = item;
            setSearchText(name);
            setIsTipsHidden(true);
            dispatch(saveSelectedFruitId(id));
        };

        return (
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.item}>
                    {item.name}
                </Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <SearchInput
                text={searchText}
                placeholder={TEXT.fruitSearch}
                setText={onSearchTextChange}
                onSearchPress={onSearch}
            />
            <TipList
                list={tipList}
                isHidden={isTipsHidden}
                renderItemTip={renderItemTip}
            />
        </View>
    );
};

export default React.memo(InputWithTipList);
