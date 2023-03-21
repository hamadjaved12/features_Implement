import {View, Text, Image, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import {appImages, colors, size, WP} from '../../../shared/exporter';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

const ImageResizing = () => {
  const [state, setState] = useState({
    myText: "I'm ready to get swiped!",
    gestureName: 'none',
    backgroundColor: '#fff',
  });

  const onSwipeLeft = (gestureState: any) => (
    <View
      style={{
        flex: 1,
        backgroundColor: 'green',
      }}>
      <Text
        style={{
          color: colors.b1,
          fontSize: size.h1,
        }}>
        {setState({myText: 'You swiped left'})}
        colors
      </Text>
    </View>
  );

  const onSwipeRight = (gestureState: any) => {
    console.log('You swiped right');
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'green',
        }}>
        <Text
          style={{
            color: colors.b1,
          }}>
          {setState({myText: 'You swiped right'})}
        </Text>
      </View>
    );
  };

  const onSwipe = (gestureName: any, gestureState: any) => {
    const {SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
    setState({gestureName: gestureName});
    switch (gestureName) {
      case SWIPE_LEFT:
        setState({backgroundColor: 'blue'});
        break;
      case SWIPE_RIGHT:
        setState({backgroundColor: 'yellow'});
        break;
    }
  };

  const ImageSize = () => {
    Image.getSize(
      'https://i1.sndcdn.com/avatars-000439901343-0dng23-t500x500.jpg',
      (width, height) => {
        console.log('width', width);
        console.log('height', height);
      },
      error => {
        console.log('error', error);
      },
    );
  };

  const windowWidth = Dimensions.get('screen');

  const ratio =
    Image.resolveAssetSource(appImages.airline).width /
    Image.resolveAssetSource(appImages.airline).height;

  const height = windowWidth.width / ratio;
  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };

  return (
    <View style={styles.mainContainer}>
      <View
        style={{
          width:
            windowWidth.width <
            Image.resolveAssetSource(appImages.airline).width
              ? windowWidth.width
              : Image.resolveAssetSource(appImages.airline).width,
          height:
            windowWidth.width <
            Image.resolveAssetSource(appImages.airline).width
              ? height
              : Image.resolveAssetSource(appImages.airline).height,
        }}>
        <Image style={styles.imageStyle} source={appImages.airline} />
      </View>

      <GestureRecognizer
        onSwipe={(direction, state) => onSwipe(direction, state)}
        // onSwipeUp={(state) => this.onSwipeUp(state)}
        // onSwipeDown={(state) => this.onSwipeDown(state)}
        onSwipeLeft={state => onSwipeLeft(state)}
        onSwipeRight={state => onSwipeRight(state)}
        config={config}
        style={{
          flex: 1,
          backgroundColor: state.backgroundColor,
        }}>
        <Text
          style={{
            color: colors.b1,
          }}>
          {state.myText}
        </Text>
        <Text>onSwipe callback received gesture:{state.gestureName}</Text>
      </GestureRecognizer>
    </View>
  );
};

export default ImageResizing;
