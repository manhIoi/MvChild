import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import MyListScreen from '../screens/MyListScreen/MyListScreen';
import AccountStack from './AccountStack';
import {Entypo, FontAwesome} from '../constants/icon';
import rootColor from '../constants/colors';
import {bottomTabHeight} from '../constants/dimensions';

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
              tabBarIcon: ({focused, color}) => tab.icon(color, 20),
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default BottomTab;
