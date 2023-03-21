import React, {FC, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Icon, Input} from 'react-native-elements';
import {colors, family, size, WP} from '../../shared/exporter';

interface Props {
  placeholder: string;
  placeholderTextColor?: string;
  value: string;
  onChangeText: (val: string) => void;
  secureTextEntry?: boolean;
  rightIcon?: any;
}

const AppInput: FC<Props> = ({
  placeholder,
  placeholderTextColor,
  value,
  onChangeText,
  secureTextEntry,
  rightIcon,
}) => {
  const [show, setShow] = useState(secureTextEntry);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Input
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        inputContainerStyle={styles.inputContainerStyle}
        inputStyle={styles.inputStyle}
        secureTextEntry={show}
        value={value}
        onChangeText={onChangeText}
        rightIcon={
          secureTextEntry ? (
            <Icon
              onPress={() => {
                setShow(!show);
              }}
              type="material-community"
              name={!show ? 'eye-outline' : 'eye-off-outline'}
              color={colors.b1}
              size={20}
            />
          ) : (
            rightIcon
          )
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {},
  inputContainerStyle: {
    borderBottomWidth: 0,
    width: '95%',
    backgroundColor: colors.g6,
    paddingHorizontal: WP('3'),
    alignSelf: 'center',
    borderRadius: 4,
  },
  inputStyle: {
    fontFamily: family.Poppins_Light,
    fontSize: size.normal,
    color: colors.b1,
  },
});

export {AppInput};
