import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';

import BottomTab from './BottomTab';
import MovieDetailStack from './MovieDetailStack';
import {primaryTransitionSpec} from '../constants/configNavigation';

const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        transitionSpec: {
          open: primaryTransitionSpec,
          close: primaryTransitionSpec,
        },
        animationTypeForReplace: 'pop',
      }}>
      <Stack.Screen name="BottomTab" component={BottomTab} />
      <Stack.Screen name="MovieDetailStack" component={MovieDetailStack} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
