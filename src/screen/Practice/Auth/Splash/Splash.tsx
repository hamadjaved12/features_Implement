import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {View, Text, SafeAreaView, Image, ImageBackground} from 'react-native';
import {AppButton} from '../../../../components';
import {PracticeStackParamsList} from '../../../../navigation/stack/PracticeStack';
import {appImages, colors, family, size, WP} from '../../../../shared/exporter';
import {styles} from './styles';

const Splash = () => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<PracticeStackParamsList, 'Splash'>
    >();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('OnBoarding');
    }, 3000);
  }, []);

  return (
    <ImageBackground style={styles.mainContainer} source={appImages.language}>
      <Image
        source={appImages.splash}
        style={styles.imageStyle}
        resizeMode={'contain'}
      />
      <Text style={styles.translateTextStyle}>Translate & Earn.</Text>
    </ImageBackground>
  );
};

export default Splash;
