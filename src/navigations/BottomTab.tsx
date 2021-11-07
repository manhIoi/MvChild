import React, {useEffect, useRef} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import MyListScreen from '../screens/MyListScreen/MyListScreen';
import AccountStack from './AccountStack';
import {Entypo, FontAwesome} from '../constants/icon';
import rootColor, {alphaColor} from '../constants/colors';
import {bottomTabHeight} from '../constants/dimensions';
import * as Animatable from 'react-native-animatable';
import rootFont from '../constants/fonts';

const Tab = createBottomTabNavigator();

const tabs = [
  {
    name: 'HomeStack',
    component: HomeStack,
    label: 'Trang chủ',
    icon: (color: string, size: number) => (
      <Entypo name="home" color={color} size={size} />
    ),
  },
  {
    name: 'MyListScreen',
    component: MyListScreen,
    label: 'Yêu thích',
    icon: (color: string, size: number) => (
      <Entypo name="heart" color={color} size={size} />
    ),
  },
  {
    name: 'AccountStack',
    component: AccountStack,
    label: 'Tài khoản',
    icon: (color: string, size: number) => (
      <FontAwesome name="user" color={color} size={size} />
    ),
  },
];

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: rootColor.primary,
        tabBarInactiveTintColor: 'rgba(255,255,255,0.4)',
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: rootColor.black,
          borderTopColor: rootColor.black,
          height: bottomTabHeight,
          justifyContent: 'center',
        },
      }}>
      {tabs.map((tab, index) => {
        return (
          <Tab.Screen
            key={`tab-${tab.name}`}
            name={tab.name}
            component={tab.component}
            options={{
              tabBarLabel: tab.label,
              tabBarButton: props => <TabBarButton {...props} tab={tab} />,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

Animatable.initializeRegistryWithDefinitions({
  iconIn: {
    0: {transform: [{scale: 1}]},
    1: {transform: [{scale: 1.3}]},
  },
  iconOut: {
    0: {transform: [{scale: 1.3}]},
    1: {transform: [{scale: 1}]},
  },
});

const TabBarButton = (props: any) => {
  const {tab, onPress, accessibilityState} = props;
  const focused = accessibilityState.selected;
  const iconRef = useRef<any>(null);

  useEffect(() => {
    if (focused) {
      iconRef.current.animate('iconIn');
    } else {
      iconRef.current.animate('iconOut');
    }
  }, [focused]);

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPress}
      style={styles.tabBarContainer}>
      <Animatable.View
        style={styles.tabBarContainer}
        ref={iconRef}
        duration={800}>
        <View style={styles.tabBarButton}>
          {tab.icon(focused ? rootColor.primary : rootColor.gray, 20)}
        </View>
      </Animatable.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  tabBarButton: {
    height: bottomTabHeight,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
});

export default BottomTab;
