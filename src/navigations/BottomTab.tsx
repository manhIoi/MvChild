import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import MyListScreen from '../screens/MyListScreen/MyListScreen';
import TopScreen from '../screens/TopScreen/TopScreen';
import AccountStack from './AccountStack';
import {Feather} from '../constants/icon';
import rootColor, {alphaColor} from '../constants/colors';
import {bottomTabHeight} from '../constants/dimensions';

const Tab = createBottomTabNavigator();

const tabs = [
  {
    name: 'HomeStack',
    component: HomeStack,
    label: 'Trang chủ',
    icon: (color: string) => <Feather name="home" color={color} size={20} />,
  },
  {
    name: 'MyListScreen',
    component: MyListScreen,
    label: 'Yêu thích',
    icon: (color: string) => <Feather name="heart" color={color} size={20} />,
  },
  {
    name: 'TopScreen',
    component: TopScreen,
    label: 'Bảng xếp hạng',
    icon: (color: string) => (
      <Feather name="bar-chart" color={color} size={20} />
    ),
  },
  {
    name: 'AccountStack',
    component: AccountStack,
    label: 'Tài khoản',
    icon: (color: string) => <Feather name="user" color={color} size={20} />,
  },
];

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: rootColor.white,
        tabBarInactiveTintColor: 'rgba(255,255,255,0.4)',
        tabBarStyle: {
          backgroundColor: rootColor.primary,
          borderTopColor: rootColor.primary,
          height: bottomTabHeight,
          justifyContent: 'center',
          paddingBottom: 10,
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
              tabBarIcon: ({focused, color}) => tab.icon(color),
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default BottomTab;
