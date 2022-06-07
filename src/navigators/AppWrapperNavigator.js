import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Image} from 'react-native';
import screenDimensions from '../utils/screenDimensions';
import BottomNavigator from './BottomNavigator';
import CountryList from '../screens/CountryList';
import TodoRisk from '../screens/Todo';
import theme from '../../theme';


const AppWrapper = createStackNavigator();

const AppWrapperNavigator = () => {

  const logoTitle = navigation => {
    return (
      <Image
        style={{ height: 60, width: 180 }}
        source={require('../assets/logoTitle.png')}
      />
    );
  };


  return (
    <AppWrapper.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          height: 60,
          backgroundColor: theme.colors.transparent,
          shadowColor: 'white',
          shadowRadius: 5,
          shadowOpacity: 0.25,
          shadowOffset: {
            height: 3,
            width: 0,
          },
        },
        headerTintColor: theme.colors.darkGrey,
        headerBackTitle: '',
        headerBackTitleVisible: false
      }}>

      <AppWrapper.Screen
        name="Main"
        component={BottomNavigator}
        options={({ navigation, route }) => ({
          headerTitle: () => logoTitle(navigation), route,
        })}
      />
      <AppWrapper.Screen
        name="CountryList"
        component={CountryList}
        options={({ navigation, route }) => ({
          headerTitle: () => logoTitle(navigation), route,
        })}
      />
      <AppWrapper.Screen
        name="Todorisque"
        component={TodoRisk}
        options={({ navigation, route }) => ({
          headerTitle: () => logoTitle(navigation), route,
        })}
      />
     
    </AppWrapper.Navigator>
  );
};

export default AppWrapperNavigator;
