import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'react-native';
import LoginSignup from './src/screens/LoginSignup';
import EnterOTP from './src/screens/EnterOTP';
import Dashboard from './src/screens/Dashboard';

export type RootStackParamList = {
  LoginSignup: undefined;
  EnterOTP: {phoneNumber: string};
  Dashboard: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <Stack.Navigator
        initialRouteName="LoginSignup"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="LoginSignup" component={LoginSignup} />
        <Stack.Screen name="EnterOTP" component={EnterOTP} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;