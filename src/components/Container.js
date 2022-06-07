import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import withStyles from '../hoc/withStyles';

const stylesheet = theme => ({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 6,
  },
});

const Container = ({styles, children}) => {
  return <View style={{...styles.container}}>{children}</View>;
};

Container.propTypes = {
  styles: PropTypes.shape().isRequired,
};
const StyledContainer = withStyles(stylesheet)(Container);

export default StyledContainer;
