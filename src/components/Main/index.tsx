import React, {Fragment} from 'react';
import {
    SafeAreaView,
    View,
    ScrollView,
    StatusBar,
} from 'react-native';
import {useSelector} from 'react-redux';

import {styles} from './style';

import InputWithTipList from '../InputWithTipList';
import FruitCard from '../FruitCard';
import Logo from '../Logo';
import Banner from '../Banner';
import Spinner from '../Spinner';
import Error from '../Error';

import {IFruit} from '../../store/fruit/types/state';
import {IState} from '../../store';

const Main = () => {
    const fruit: IFruit | undefined = useSelector((store: IState) => store.fruit.selectedFruit);
    const isLoading: boolean = useSelector((store: IState) => store.fruit.isLoading);
    const isError: boolean = !!useSelector((store: IState) => store.fruit.error);
    const isStart: boolean = !isLoading && !isError && !fruit;
    console.log(fruit);

    return (
        <Fragment>
            <SafeAreaView style={styles.containerTop}/>

            <StatusBar barStyle='light-content' />

            <SafeAreaView style={styles.containerBottom}>

                <Logo />

                <View style={styles.main}>
                    <InputWithTipList/>

                    {isLoading && <Spinner/>}

                    {isError && <Error/>}

                    {isStart && <Banner />}

                    {fruit &&
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <FruitCard fruit={fruit}/>
                        </ScrollView>
                    }
                </View>
            </SafeAreaView>
        </Fragment>

    );
};

export default React.memo(Main);
