// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as PaperProvider } from 'react-native-paper';
import theme from './theme';
// import HomeScreen from './src/screens/HomeScreen';
import AppWrapperNavigator from './src/navigators/AppWrapperNavigator';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <PaperProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{headerBackTitleVisible: false }}
            headerShown="false"
          >
            <Stack.Screen name="Home" component={AppWrapperNavigator}  options={{headerShown: false}} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </PaperProvider>
  );
}

export default App;