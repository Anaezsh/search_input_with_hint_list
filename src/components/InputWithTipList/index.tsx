import React, {useState, useEffect, useCallback} from 'react';
import {
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {styles} from './styles';

import SearchInput from '../SearchInput';
import TipList from '../TipList';

import {getTips} from '../../store/search/thunks/getTips';

import {IState} from '../../store';

import {TEXT} from '../../constants';

interface IProps{}

export const InputWithTipList = (props: IProps) => {
    const [searchText, setSearchText] = useState<string>('');
    const [isTipsHidden, setIsTipsHidden] = useState<boolean>(false);
    const tipList: string[] | undefined = useSelector((store: IState) => store.search.tipList[searchText]);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!searchText) return;

        if (!tipList) {
            dispatch(getTips(searchText));
        }
    }, [searchText]);

    const onClearSearchText = useCallback(() => setSearchText(''), []);

    const onSearch = useCallback(() => {}, []);

    const inputFocusCallback = () => {
        setIsTipsHidden(false);
    };

    const renderItemTip = useCallback((item: string) => {
        const onPress = () => {
            setSearchText(item);
            setIsTipsHidden(true);
        };

        return (
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.item}>
                    {item}
                </Text>
            </TouchableOpacity>
        );
    }, []);

    return (
        <View style={styles.container}>
            <SearchInput
                text={searchText}
                placeholder={TEXT.shopSearch}
                setText={setSearchText}
                onSearchPress={onSearch}
                onClearPress={onClearSearchText}
                focusCallback={inputFocusCallback}
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
