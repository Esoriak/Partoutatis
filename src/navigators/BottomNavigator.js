import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import BottomTabBar from '../components/BottomTabBar';

const Bottom = createBottomTabNavigator();

const BottomNavigator = () => {


  return (
    <Bottom.Navigator
      tabBar={props => <BottomTabBar {...props} />}
      initialRouteName="Home" >

      <Bottom.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home",
          headerStyle: {
            height: 0
          },
        }}
      />
    </Bottom.Navigator>
  );
};

export default BottomNavigator;
