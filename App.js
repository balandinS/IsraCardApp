/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import AppContainer from './src/mainScreens/MianScreens'
import Header from './src/components/Header'
const App = () => {
  return (
    <View style={{flex: 1}}>
      <Header title="Movie App" />
       <View style={{flex: 1}}>
            <AppContainer />
       </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
