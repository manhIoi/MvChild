import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import MovieDetailScreen from '../screens/MovieDetailScreen/MovieDetailScreen';
import WatchMovieScreen from '../screens/WatchMovieScreen/WatchMovieScreen';
import rootConfig from '../constants/configNavigation';
const Stack = createStackNavigator();

const MovieDetailStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        transitionSpec: {
          open: rootConfig.primaryTransitionSpec,
          close: rootConfig.primaryTransitionSpec,
        },
      }}>
      <Stack.Screen name="MovieDetailScreen" component={MovieDetailScreen} />
      <Stack.Screen name="WatchMovieScreen" component={WatchMovieScreen} />
    </Stack.Navigator>
  );
};

export default MovieDetailStack;
