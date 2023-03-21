import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../screen/Practice/Auth/Login/Login';
import SelectLanguage from '../../screen/Practice/Auth/SelectLanguage/SelectLanguage';
import Register from '../../screen/Practice/Auth/Register/Register';
import OnBoarding from '../../screen/Practice/Auth/OnBoarding/OnBoarding';
import Splash from '../../screen/Practice/Auth/Splash/Splash';

export type PracticeStackParamsList = {
  Splash: undefined;
  OnBoarding: undefined;
  Login: undefined;
  Register: undefined;
  SelectLanguage: undefined;
};

const Stack = createNativeStackNavigator<PracticeStackParamsList>();

function PracticeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="SelectLanguage" component={SelectLanguage} />
    </Stack.Navigator>
  );
}

export default PracticeStack;
