import React, {useState} from 'react';
import {TMDB} from '../global/Constanst'
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {
  TEXT_COLOR_GRAY,
  TEXT_COLOR_WHITE,
  SUCCESS_COLOR,
} from '../global/Theme';
import {useDispatch, useSelector} from 'react-redux';
import {addFavoriteMovie} from '../Store/actions';
import AppButton from './ui/AppButton';
import FavoritesList from './FavoritesList';

export default () => {
  const movie = useSelector(state => state.movie);
  const dispatch = new useDispatch();

  const addMovie = () => {
    dispatch(addFavoriteMovie(movie));
  };
  return (
    <View style={styles.contianer}>
      <ScrollView>
        <View style={styles.imageContianer}>
          <Image
            style={styles.image}
            source={{ uri: `${TMDB.imageUrl}/${movie.posterPath}`}}
          />
        </View>
        <View />
        <View>
          <Text style={{...styles.textContainer, ...styles.title}}>
            {movie.title}
          </Text>
          <Text style={{...styles.textContainer, ...styles.subTitle}}>
            popularity {movie.popularity}
          </Text>
          <ScrollView>
            <Text style={{...styles.textContainer, ...styles.overview}}>
              {movie.overview}
            </Text>
          </ScrollView>
          <AppButton onPress={() => addMovie(movie)} color={SUCCESS_COLOR}>
            Add Movie To Favorite
          </AppButton>
        </View>
        <View styles={styles.list}>
          <FavoritesList />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  contianer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: TEXT_COLOR_WHITE,
    flex: 2,
  },
  imageContianer: {
    height: 300,
    padding: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  textContainer: {
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  subTitle: {
    color: TEXT_COLOR_GRAY,
    fontSize: 20,
  },
  overview: {
    fontSize: 18,
  },
  list: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});
