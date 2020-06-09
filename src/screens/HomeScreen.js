import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import UserCard from '../components/UserCard'
export default (props) => {

  navigateTo = (destenation)=> {
    props.navigation.navigate(destenation)
  }
  return (
    <View style={styles.container}>
        <UserCard onNavigation={() => navigateTo('MovieList')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
