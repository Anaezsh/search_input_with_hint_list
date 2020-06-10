import React, {useState} from 'react';
import {
    View,
    TextInput,
    TouchableOpacity,
    Image, NativeSyntheticEvent, TextInputFocusEventData,
} from 'react-native';

import {styles} from './style';

import {COLORS, TEXT} from '../../constants';

interface IProps {
    text: string;
    setText: (text: string) => void;
    onSearchPress: () => void;
    onClearPress: () => void;
    placeholder?: string;
    focusCallback?: () => void;
}

export const SearchInput = (props: IProps) => {
    const {
        text,
        setText,
        onSearchPress,
        onClearPress,
        placeholder,
        focusCallback,
    } = props;
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const onFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setIsFocused(true);
        focusCallback && focusCallback();
    };

    const onBlur =  (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setIsFocused(false);
    };

    return (
        <View style={[styles.container, isFocused ? styles.isFocused : styles.default]}>
            <TouchableOpacity
                onPress={onSearchPress}
            >
                <Image
                    source={require('../../../assets/search_default.png')}
                    style={styles.img}
                />
            </TouchableOpacity>

            <TextInput
                value={text}
                onChangeText={setText}
                style={styles.searchInput}
                placeholder={placeholder ? placeholder : TEXT.search}
                placeholderTextColor={COLORS.LightGrey}
                onFocus={onFocus}
                onBlur={onBlur}
            />

            {text.length !== 0 &&
                <TouchableOpacity onPress={onClearPress}>
                    <Image
                        source={require('../../../assets/cross_grey.png')}
                        style={styles.imgCross}
                    />
                </TouchableOpacity>
            }
        </View>
    );
};

export default React.memo(SearchInput);
