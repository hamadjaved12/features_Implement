import React, {useState} from 'react';
import {View, Text, SafeAreaView, Image, FlatList, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AppButton, Language} from '../../../../components';
import {PracticeStackParamsList} from '../../../../navigation/stack/PracticeStack';
import {toggle} from '../../../../redux/Feature/languageSlice';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  appImages,
  colors,
  LANGUAGE_SELECT_LIST,
} from '../../../../shared/exporter';
import {styles} from './styles';

const SelectLanguage = () => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<PracticeStackParamsList, 'SelectLanguage'>
    >();

  const {id} = useSelector((state: any) => state.languageSlice);

  const dispatch = useDispatch();

  const [selected, setSelected] = useState(LANGUAGE_SELECT_LIST);

  const [language, setLanguage] = useState(id == 0 ? 'English' : 'Spanish');
  const [checked, setChecked] = useState(false);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Image source={appImages.dot} style={styles.dotImageStyle} />
      <Text style={styles.selectTextStyle}>Select Languages</Text>
      <Text style={styles.subTitleTextStyle}>
        Please select the language you can speak.
      </Text>
      <FlatList
        data={selected}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <Language
            title={item.title}
            onPress={() => {
              setSelected(
                selected.map(obj =>
                  obj.id == item.id
                    ? {...obj, selected: true}
                    : {...obj, selected: false},
                ),
              );
              setChecked(!checked);
              setLanguage(item.title);
              dispatch(toggle(item.id));
            }}
            iconType={'MaterialIcons'}
            iconName={item.selected ? 'check-circle' : 'stop-circle'}
            color={item.selected ? colors.red : colors.g1}
          />
        )}
      />

      <AppButton
        onPress={() => {
          if (checked) {
            navigation.navigate('Login');
          } else {
            Alert.alert('Alert', 'Please select one language');
          }
        }}
        title={'Select Language'}
      />
    </SafeAreaView>
  );
};

export default SelectLanguage;
