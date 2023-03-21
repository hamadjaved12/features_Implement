import {StyleSheet} from 'react-native';
import {WP, colors, family, size} from '../../../../shared/exporter';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  imageStyle: {
    height: WP('70'),
    width: WP('75'),
    resizeMode: 'cover',
    alignSelf: 'center',
    marginTop: WP('6'),
    marginBottom: WP('4'),
  },
  loginTextStyle: {
    fontFamily: family.Poppins_Medium,
    fontSize: size.xxxtitle,
    color: colors.b1,
    textAlign: 'center',
  },
  continueTextStyle: {
    fontFamily: family.Poppins_Regular,
    fontSize: size.normal,
    color: colors.g1,
    textAlign: 'center',
    marginBottom: WP('10'),
  },
  forgotTextStyle: {
    color: colors.red,
    fontFamily: family.Poppins_Medium,
    fontSize: size.normal,
    textAlign: 'right',
    flex: 1,
    marginRight: WP('5'),
  },
  accountTextStyle: {
    color: colors.b1,
    fontFamily: family.Poppins_Regular,
    fontSize: size.small,
    textAlign: 'center',
    marginTop: WP('6'),
  },
  registerTextStyle: {
    color: colors.red,
    fontFamily: family.Poppins_Medium,
  },
});
export {styles};
