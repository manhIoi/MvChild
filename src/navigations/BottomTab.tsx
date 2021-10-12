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
    0: {transform: [{translateY: 0}]},
    0.9: {transform: [{translateY: (-bottomTabHeight * 1.2) / 2}]},
    1: {transform: [{translateY: -bottomTabHeight / 2}]},
  },
  iconOut: {
    0: {transform: [{translateY: -bottomTabHeight / 2}]},
    1: {transform: [{translateY: 0}]},
  },
  circleIn: {
    0: {transform: [{scale: 0}]},
    0.3: {transform: [{scale: 0.5}]},
    0.5: {transform: [{scale: 0.4}]},
    0.8: {transform: [{scale: 0.7}]},
    1: {transform: [{scale: 1}]},
  },
  myScaleIn: {
    0: {transform: [{scale: 0}]},
    1: {transform: [{scale: 1}]},
  },
  myScaleOut: {
    0: {transform: [{scale: 1}]},
    1: {transform: [{scale: 0}]},
  },
});

const TabBarButton = (props: any) => {
  const {tab, onPress, accessibilityState} = props;
  const focused = accessibilityState.selected;
  const iconRef = useRef<any>(null);
  const circleRef = useRef<any>(null);
  const labelRef = useRef<any>(null);

  useEffect(() => {
    if (focused) {
      iconRef.current.animate('iconIn');
      circleRef.current.animate('circleIn');
      labelRef.current.animate('myScaleIn');
    } else {
      iconRef.current.animate('iconOut');
      circleRef.current.animate('myScaleOut');
      labelRef.current.animate('myScaleOut');
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
        duration={500}>
        <View style={styles.tabBarButton}>
          <Animatable.View
            ref={circleRef}
            style={{
              ...StyleSheet.absoluteFillObject,
              backgroundColor: rootColor.primary,
              borderRadius: 50,
              borderWidth: 4,
              borderColor: rootColor.black,
            }}
          />
          {tab.icon(
            focused ? rootColor.black : alphaColor(rootColor.primary, 0.8),
            20,
          )}
        </View>
        <Animatable.Text ref={labelRef} style={styles.label}>
          {tab.label}
        </Animatable.Text>
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
  label: {
    fontSize: 14,
    fontFamily: rootFont.medium,
    color: rootColor.primary,
  },
});

export default BottomTab;
