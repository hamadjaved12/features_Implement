import moment from 'moment';
import React, {FC, useState} from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import {Image} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {AppHeader, LanguageSelector, TopTabs} from '../../../components';
import {
  appImages,
  default_img,
  LANGUAGE_List,
  size,
} from '../../../shared/exporter';
import {toggle} from '../../../redux/Feature/languageSlice';
import {styles} from './styles';

interface Props {}

const LanguageTranslator: FC<Props> = () => {
  const {value, id} = useSelector((state: any) => state.languageSlice);

  const dispatch = useDispatch();

  const [language, setLanguage] = useState(id == 0 ? 'English' : 'Spanish');

  return (
    <SafeAreaView style={styles.mainContainer}>
      <AppHeader title={moment(new Date()).format('Do MMM YYYY')} />
      <View style={styles.contentContainer}>
        <View style={styles.titleContainer}>
          <Text
            style={[
              styles.titleText,
              {
                fontSize: id === 1 ? size.xtitle : size.xxtitle,
              },
            ]}>
            {value.BreakingNews}
          </Text>
        </View>
        <LanguageSelector
          placeholder={language}
          onChangeValue={text => {
            setLanguage(text.value);
            dispatch(toggle(text.id));
          }}
          options={LANGUAGE_List}
        />
      </View>
      <View style={styles.secondcontentContainer}>
        <Image
          source={appImages.airline}
          resizeMode={'cover'}
          style={styles.airlineStyle}
        />
        <Text style={styles.subtitle}>{value.ContactLost}</Text>
        <View style={styles.contentFooterContainer}>
          <Image
            source={{uri: default_img}}
            style={styles.imageStyle}
            resizeMode={'contain'}
          />
          <Text style={styles.nameTextStyle}>{value.JohnSmith}</Text>
          <Text style={styles.dateTextStyle}>
            {moment(new Date()).format('Do MMM YYYY')}
          </Text>
        </View>
      </View>
      <TopTabs />
    </SafeAreaView>
  );
};

export default LanguageTranslator;
