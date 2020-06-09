import 'react-native-gesture-handler';
import {createStackNavigator} from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import HomeScreen from '../screens/HomeScreen';
import MovieListScreen from '../screens/MovieListScreen';
import MovieInfoScreen from '../screens/MovieInfoScreen';

const AppStackNavigation = createStackNavigator({
    Home: HomeScreen,
    MovieList: MovieListScreen,
    MovieInfo: MovieInfoScreen
  })

  const AppContainer = createAppContainer(AppStackNavigation)

export default AppContainer;