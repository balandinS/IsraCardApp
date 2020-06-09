import React from 'react';
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import FavoriteMovie from './FavoriteMovie';
import {removeFavoriteMovie} from '../Store/actions';
export default () => {
  const favoritesMovies = useSelector(state => state.favoritesMovies);
  const dispatch = new useDispatch();

  const removefavoritesMovies = id => {
    dispatch(removeFavoriteMovie(id));
  };
  const renderFavoritesMovies = () => {
    if (!Array.isArray(favoritesMovies) || favoritesMovies.length === 0)
      return (
        <View style={styles.imageContianer}>
          <Image
            style={styles.image}
            source={require('../../assests/images/file.png')}
          />
        </View>
      );
    return (
      <FlatList
        data={favoritesMovies}
        renderItem={({item}) => (
          <FavoriteMovie
            movie={item}
            onRemove={() => removefavoritesMovies(item.id)}
            onOpen={() => console.log('object')}
          />
        )}
        keyExtractor={item => `${item.id}`}
      />
    );
  };
  return (
    <View>
      <Text>Favorites Movies</Text>
      <View>{renderFavoritesMovies()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    height: 100,
  },
  imageContianer: {
    height: 200,
    padding: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
