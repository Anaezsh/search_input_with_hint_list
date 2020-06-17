import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {Provider} from 'react-redux';

import InputWithTipList from './src/components/InputWithTipList';

import {store} from './src/store';

import {COLORS} from './src/constants';

export default function App() {
  return (
      <Provider store={store}>
        <SafeAreaView style={styles.container}>
          <View style={styles.main}>
            <InputWithTipList/>
            <View>
              <Text>Just some text</Text>
              <Text>It will be overlapped by tipList</Text>
            </View>
          </View>
        </SafeAreaView>
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    backgroundColor: COLORS.White,
    paddingTop: 100,
    paddingHorizontal: 10,
  },
});
