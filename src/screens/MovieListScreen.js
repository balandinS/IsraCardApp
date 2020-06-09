import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  VirtualizedList,
  SafeAreaView,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {fetchPapularMovies} from '../Store/actions';
import Movie from '../components/Movie';

export default props => {
  const movies = useSelector(state => state.movies);
  const dispatch = new useDispatch();

  useEffect(() => {
    dispatch(fetchPapularMovies());
  }, [movies]);

  navigateToWithItem = (destination, item) => {
    props.navigation.navigate(destination, {item});
  };
  const renderMoviesVirtualized = () => {
    if (!Array.isArray(movies) || movies.length === 0)
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    return (
      <SafeAreaView style={styles.movieContainer}>
        <VirtualizedList
          data={movies}
          initialNumberToRender={4}
          renderItem={({item}) => (
            <Movie
              movie={item}
              onNavigate={() => {
                navigateToWithItem('MovieInfo', item);
              }}
            />
          )}
          keyExtractor={item => `${item.id}`}
          getItem={(data, index) => ({
            id: data[index].id,
            title: data[index].original_title,
            posterPath: data[index].poster_path,
            popularity: data[index].popularity,
            overview: data[index].overview,
          })}
          getItemCount={() => movies.length}
        />
      </SafeAreaView>
    );
  };

  return <View style={styles.container}>{renderMoviesVirtualized()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  movieContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
