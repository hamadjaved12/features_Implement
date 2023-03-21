import React, {FC} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {colors, family, size, WP} from '../../shared/exporter';

interface Props {
  onPress: () => void;
  title: String;
  loading?: boolean;
  buttonStyle?: any;
}

const AppButton: FC<Props> = ({onPress, title, loading, buttonStyle}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.mainContainer, buttonStyle]}>
      {loading ? (
        <ActivityIndicator size={'small'} color={colors.white} />
      ) : (
        <Text style={styles.title}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: WP('90'),
    alignSelf: 'center',
    backgroundColor: colors.red,
    padding: WP('5'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: WP('10'),
    marginVertical: WP('5'),
  },
  title: {
    color: colors.white,
    fontFamily: family.Poppins_Bold,
    fontSize: size.medium,
  },
});

export {AppButton};
