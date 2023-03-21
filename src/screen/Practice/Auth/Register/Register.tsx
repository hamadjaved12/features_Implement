import {
  View,
  Text,
  SafeAreaView,
  Image,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {appImages, colors, family, size, WP} from '../../../../shared/exporter';
import {AppButton, AppInput} from '../../../../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {PracticeStackParamsList} from '../../../../navigation/stack/PracticeStack';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setfirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigation =
    useNavigation<
      NativeStackNavigationProp<PracticeStackParamsList, 'Register'>
    >();

  const Register = async () => {
    try {
      if (email && password && firstName && lastName && confirmPassword) {
        setLoading(true);
        let result = await fetch('http://192.168.11.69:4500/register', {
          method: 'post',
          body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
          }),
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        });
        result = await result.json();
        if (result) {
          setLoading(false);
          setEmail('');
          setConfirmPassword('');
          setLastName('');
          setPassword('');
          setfirstName('');
          navigation.navigate('Login');
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
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}>
        <Image source={appImages.login} style={styles.imageStyle} />
        <Text style={styles.loginTextStyle}>Register Now</Text>
        <Text style={styles.continueTextStyle}>
          Please enter the details below to continue.
        </Text>

        <AppInput
          placeholder="Enter your first name"
          placeholderTextColor={colors.g1}
          value={firstName}
          onChangeText={text => {
            setfirstName(text);
          }}
        />

        <AppInput
          placeholder="Enter your last name"
          placeholderTextColor={colors.g1}
          value={lastName}
          onChangeText={text => {
            setLastName(text);
          }}
        />

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

        <AppInput
          placeholder="Enter your confirm password"
          placeholderTextColor={colors.g1}
          value={confirmPassword}
          onChangeText={text => {
            setConfirmPassword(text);
          }}
          secureTextEntry={true}
        />
        <AppButton
          onPress={() => {
            Register();
          }}
          title={'Sign Up'}
          loading={loading}
        />
        <Text style={styles.accountTextStyle}>
          Already have an account!
          <Text onPress={() => {}} style={styles.registerTextStyle}>
            {' '}
            Login
          </Text>
        </Text>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Register;
