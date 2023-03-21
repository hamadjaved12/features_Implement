import * as React from 'react';
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PracticeStack, {PracticeStackParamsList} from './stack/PracticeStack';
import I8Stack, {I8StackParamsList} from './stack/I8Stack';

export type MainStackParamsList = {
  PracticeStack: NavigatorScreenParams<PracticeStackParamsList>;
  I8Stack: NavigatorScreenParams<I8StackParamsList>;
};

const Stack = createNativeStackNavigator<MainStackParamsList>();

function MainStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="PracticeStack"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="PracticeStack" component={PracticeStack} />
        <Stack.Screen name="I8Stack" component={I8Stack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStack;
