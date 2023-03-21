import React, {useState} from 'react';
import {Text, SafeAreaView, Image, Alert} from 'react-native';
import {styles} from './styles';
import {appImages, colors} from '../../../../shared/exporter';
import {AppButton, AppInput} from '../../../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {PracticeStackParamsList} from '../../../../navigation/stack/PracticeStack';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigation =
    useNavigation<
      NativeStackNavigationProp<PracticeStackParamsList, 'Login'>
    >();

  const Login = async () => {
    try {
      if (email && password) {
        setLoading(true);
        let result = await fetch('http://192.168.11.69:4500/login', {
          method: 'post',
          body: JSON.stringify({
            email: email,
            password: password,
          }),
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        });
        result = await result.json();
        if (result?.message !== 'No User Found') {
          setLoading(false);
          setEmail('');
          setPassword('');
          navigation.replace('I8Stack', {screen: 'LanguageTranslator'});
        } else {
          setLoading(false);
          Alert.alert('Alert', result?.message);
        }
      } else {
        Alert.alert('Alert', 'Please enter all the fields');
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <KeyboardAwareScrollView>
        <Image source={appImages.login} style={styles.imageStyle} />
        <Text style={styles.loginTextStyle}>Login Now</Text>
        <Text style={styles.continueTextStyle}>
          Please enter the details below to continue.
        </Text>

        <AppInput
          placeholder="Enter your email"
          placeholderTextColor={colors.g1}
          value={email}
          onChangeText={text => {
            setEmail(text);
          }}
        />
        <AppInput
          placeholder="Enter your password"
          placeholderTextColor={colors.g1}
          value={password}
          onChangeText={text => {
            setPassword(text);
          }}
          secureTextEntry={true}
        />

        <Text style={styles.forgotTextStyle}>Forgot Password?</Text>
        <AppButton
          onPress={() => {
            Login();
          }}
          title={'LOGIN'}
          loading={loading}
        />

        <Text style={styles.accountTextStyle}>
          Don't have an account!
          <Text
            onPress={() => {
              navigation.navigate('Register');
            }}
            style={styles.registerTextStyle}>
            {' '}
            Register
          </Text>
        </Text>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Login;
