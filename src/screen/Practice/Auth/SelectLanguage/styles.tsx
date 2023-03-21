import {StyleSheet} from 'react-native';
import {WP, colors, family, size} from '../../../../shared/exporter';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  dotImageStyle: {
    height: WP('30'),
    width: WP('30'),
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: WP('6'),
  },
  selectTextStyle: {
    fontFamily: family.Poppins_Medium,
    fontSize: size.xtitle,
    color: colors.b1,
    textAlign: 'center',
  },
  subTitleTextStyle: {
    fontFamily: family.Poppins_Regular,
    fontSize: size.small,
    color: colors.g1,
    textAlign: 'center',
  },
});

export {styles};
