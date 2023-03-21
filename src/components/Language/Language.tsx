import React, {FC} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {colors, family, size, WP} from '../../shared/exporter';

interface Props {
  title: string;
  iconType: string;
  iconName: string;
  onPress: () => void;
  color: string;
}

const Language: FC<Props> = ({title, iconType, iconName, onPress, color}) => {
  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.mainContainer} onPress={onPress}>
        <Text style={styles.titleStyle}>{title}</Text>
        <Icon type={iconType} name={iconName} color={color} size={22} />
      </TouchableOpacity>
      <View style={styles.spacer} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: WP('3'),
    width: WP('95'),
    alignSelf: 'center',
    marginTop: WP('5'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleStyle: {
    fontFamily: family.Poppins_Regular,
    fontSize: size.normal,
    color: colors.b1,
  },
  spacer: {
    width: WP('92'),
    borderBottomWidth: 0.5,
    borderBottomColor: colors.g7,
    alignSelf: 'center',
  },
});

export {Language};
