import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTab from './BottomTab';
import MovieDetailScreen from '../screens/MovieDetailScreen/MovieDetailScreen';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="BottomTab" component={BottomTab} />
      <Stack.Screen name="MovieDetailScreen" component={MovieDetailScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
