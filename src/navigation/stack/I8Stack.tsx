import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LanguageTranslator from '../../screen/I8Folder/LanguageTranslator';
import NewsDetail from '../../screen/I8Folder/NewsDetail';
import ImageResizing from '../../screen/ImageResize/ImageResizing/ImageResizing';

export type I8StackParamsList = {
  LanguageTranslator: undefined;
  NewsDetail: undefined;
  ImageResizing: undefined;
};

const Stack = createNativeStackNavigator<I8StackParamsList>();

function I8Stack() {
  return (
    <Stack.Navigator
      initialRouteName="LanguageTranslator"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="LanguageTranslator" component={LanguageTranslator} />
      <Stack.Screen name="NewsDetail" component={NewsDetail} />
      <Stack.Screen name="ImageResizing" component={ImageResizing} />
    </Stack.Navigator>
  );
}

export default I8Stack;
