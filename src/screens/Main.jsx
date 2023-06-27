import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Register from './auth/Register';
import Login from './auth/Login';
import ForgotPassword from './auth/ForgotPassword';
import ResetPassword from './auth/ResetPassword';
// import Home from './Home';
// import Profile from './Profile';
// import Event from './Event';

const AuthStack = createNativeStackNavigator();
// const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <AuthStack.Navigator
        screenOptions={{headerShadowVisible: false, headerTitle: ''}}>
        <AuthStack.Screen name="Register" component={Register} />
        <AuthStack.Screen name="Login" component={Login} />
        <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
        <AuthStack.Screen name="ResetPassword" component={ResetPassword} />
      </AuthStack.Navigator>
      {/* <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Event" component={Event} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
};

export default Main;
