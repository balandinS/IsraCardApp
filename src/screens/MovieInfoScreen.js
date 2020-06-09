import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MovieInfoCard from '../components/MovieInfoCard';
import { useSelector, useDispatch } from 'react-redux';
import {showIno} from '../Store/actions'

export default (props) => {
   const dispatch = new useDispatch()
   useEffect(() => {
      dispatch(showIno(props.navigation.getParam('item', 'NO-ID')))
   }, [])

  return (
    <View  style={styles.container}>
      <MovieInfoCard />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
