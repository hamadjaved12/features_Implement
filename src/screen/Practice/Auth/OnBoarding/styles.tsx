import {StyleSheet} from 'react-native';
import {WP, colors, family, size} from '../../../../shared/exporter';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  buttonStyle: {
    width: WP('45'),
    marginVertical: WP('20'),
  },
  accountTextStyle: {
    color: colors.b1,
    fontFamily: family.Poppins_Regular,
    fontSize: size.small,
    textAlign: 'center',
    marginBottom: WP('3'),
  },
  registerTextStyle: {
    color: colors.red,
    fontFamily: family.Poppins_Medium,
  },
  translateTextStyle: {
    fontFamily: family.Poppins_Medium,
    color: colors.b1,
    fontSize: size.xxxtitle,
    textAlign: 'center',
    marginTop: 10,
  },
  collectTextStyle: {
    fontFamily: family.Poppins_Regular,
    color: colors.g1,
    fontSize: size.small,
    textAlign: 'center',
  },
});

export {styles};
