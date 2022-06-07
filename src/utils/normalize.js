import {Dimensions, PixelRatio} from 'react-native';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

// based on iphone X's width
const scale = SCREEN_WIDTH / 375;

export default function normalize(size) {
  return Math.round(PixelRatio.roundToNearestPixel(size * scale));
}
