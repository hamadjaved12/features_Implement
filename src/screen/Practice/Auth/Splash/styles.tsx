import {StyleSheet} from 'react-native';
import {WP, colors, family, size} from '../../../../shared/exporter';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
  },
  imageStyle: {
    height: WP('100 '),
    width: '100%',
    alignSelf: 'center',
    marginTop: WP('-15'),
  },
  translateTextStyle: {
    fontFamily: family.Poppins_Medium,
    color: colors.b1,
    fontSize: size.xxxtitle,
    textAlign: 'center',
    marginTop: WP('40'),
  },
});

export {styles};
