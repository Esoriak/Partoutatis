import React from 'react';
import PropTypes from 'prop-types';
import {Text, Platform} from 'react-native';
import theme from '../../theme';
import isString from '../utils/isString';
import textTransform from '../utils/textTransform';

const Typography = ({
  align,
  color,
  size,
  weight,
  transform,
  gutterBottom,
  children,
  ...other
}) => {
  const enhancedChildren = () => {
    return isString(children) && transform
      ? {children: textTransform(children, transform), ...other}
      : {children, ...other};
  };

  const font = theme.fontsUsed;
  const fontWeight = theme.weights;

  return (
    <Text
      {...enhancedChildren()}
      style={{
        letterSpacing: 0,
        textAlign: align || 'left',
        color: theme.colors[color] || theme.colors.text,
        fontSize: theme.fontSizes[size] || theme.fontSizes.normal,
        fontFamily: font[weight] || font.regular,
        fontWeight: fontWeight[weight] || fontWeight.regular,
        marginBottom: theme.spacing.unit * gutterBottom || 0,
        ...other.style,
      }}
    />
  );
};

// if you want to declare defaultProps inside the class, turn into Component and use static defaultProps
Typography.defaultProps = {
  align: 'left',
  color: '#525252',
  size: 'normal',
  fontFamily: theme.fontsUsed.regular,
  fontWeight: theme.weights.regular,
  transform: 'none',
  gutterBottom: 0,
  children: null,
};

Typography.propTypes = {
  align: PropTypes.oneOf(['center', 'left', 'right', 'auto', 'justify']),
  color: PropTypes.string,
  size: PropTypes.string,
  weight: PropTypes.string,
  fontFamily : PropTypes.string,
  transform: PropTypes.string,
  gutterBottom: PropTypes.number,
  children: PropTypes.node,
};

export default Typography;
