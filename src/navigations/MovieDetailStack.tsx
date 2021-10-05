import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MovieDetailScreen from '../screens/MovieDetailScreen/MovieDetailScreen';
import WatchMovieScreen from '../screens/WatchMovieScreen/WatchMovieScreen';
const Stack = createStackNavigator();

const MovieDetailStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MovieDetailScreen" component={MovieDetailScreen} />
      <Stack.Screen name="WatchMovieScreen" component={WatchMovieScreen} />
    </Stack.Navigator>
  );
};

export default MovieDetailStack;
