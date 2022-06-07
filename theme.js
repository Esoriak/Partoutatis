
import normalize from './src/utils/normalize';


const colors ={
  Yellow: '#FEEA33',
  green: '#00C4CD',
  red: '#E74C49',
  purple : '#BFAEEB',
  darkGrey: '#404040',
  lightGrey: '#E5E5E5',
  placeholder: '#ADADAD',
  greySecondary: '#A1A1A1',
  pink : '#eb3d7a',
  white: '#fff',
  black: '#000000',
  lightGrey: 'rgba(204, 204, 204, 0.45)',
  light: '#FDECE0',
  lightWhite: 'rgba(250, 250, 250, 0.45)',

}

const theme = {
  dark: false,
  roundness: 8,
  colors: {
    ...colors,
    primary: colors.white,
    accent: colors.Orange,
    background: colors.white,
    surface: colors.white,
    text: colors.darkGrey,
    disabled: colors.greySecondary,
    placeholder: colors.lightGrey,
  },
  fontsUsed: {
    heavy: 'Helvetica-Bold',
    medium: 'Helvetica',
    regular: 'Helvetica',
    light: 'Helvetica-Light',
    thin: 'Helvetica-Light',
    italic: 'Arizonia-Regular',
  },
  weights: {
    heavy: '900',
    intermediate:'700',
    medium: '500',
    regular: '400',
    light: '300',
    thin: '100',
  },
  fontSizes: {
    title: normalize(34),
    extralarge : normalize(30),
    large: normalize(24),
    medium: normalize(20),
    normal: normalize(16),
    intermediate: normalize(15),
    label: normalize(14),
    petit: normalize(13),
    small: normalize(12),
    extraSmall: normalize(10),
  },
  spacing: {
    semiUnit: 4,
    medUnit: 6,
    unit: 8,
  },
};

export default theme;
