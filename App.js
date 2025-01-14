/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import SystemNavigationBar from 'react-native-system-navigation-bar';

import LoginScreen from './Screens/LoginScreen';
import HomeScreen from './Screens/HomeScreen';
import GalleryScreen from './Screens/GalleryScreen';

// Create a Drawer Navigator
const Drawer = createDrawerNavigator();

// Create a Stack Navigator for Login flow
const Stack = createStackNavigator();
//SystemNavigationBar.navigationHide();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeDrawerNavigator} options={{ headerShown: false }}/>
        <Stack.Screen name="GalleryScreen" component={GalleryScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Drawer navigator for home screen
const HomeDrawerNavigator = () => (
  <Drawer.Navigator initialRouteName="GalleryScreen">
    <Drawer.Screen name="GalleryScreen" component={GalleryScreen} />
    {/* Add more screens to the drawer if needed */}
   
  </Drawer.Navigator>
);

export default App;
