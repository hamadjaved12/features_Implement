import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';
import {AppButton} from '../../../../components';
import {PracticeStackParamsList} from '../../../../navigation/stack/PracticeStack';
import {appImages, colors, family, size, WP} from '../../../../shared/exporter';
import {styles} from './styles';

const OnBoarding = () => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<PracticeStackParamsList, 'OnBoarding'>
    >();
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Image
        source={appImages.dot}
        style={{
          height: WP('25'),
          width: WP('25'),
          resizeMode: 'contain',
          alignSelf: 'center',
          marginTop: WP('6'),
        }}
      />
      <Image
        source={appImages.splash}
        style={{
          height: WP('100 '),
          width: '100%',
          alignSelf: 'center',
          marginTop: WP('-20'),
        }}
        resizeMode={'contain'}
      />
      <Text style={styles.translateTextStyle}>Translate & Earn.</Text>
      <Text style={styles.collectTextStyle}>
        Now it is easy to earn money,just use the{'\n'} translator and collect
        the point
      </Text>
      <AppButton
        onPress={() => {
          navigation.replace('SelectLanguage');
        }}
        title={'Get Started'}
        buttonStyle={styles.buttonStyle}
      />
      {/* <Text style={styles.accountTextStyle}>
        Already have an account!
        <Text onPress={() => {}} style={styles.registerTextStyle}>
          {' '}
          Login
        </Text>
      </Text> */}
    </SafeAreaView>
  );
};

export default OnBoarding;
