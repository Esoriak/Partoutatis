import React from 'react';
import {StyleSheet} from 'react-native';
import {withTheme} from 'react-native-paper';
import PropTypes from 'prop-types';

const withStylesWithTheme = styleFunc => WrappedComponent => {
  const createStyle = theme => StyleSheet.create(styleFunc(theme));

  const WithStyles = React.forwardRef(function WithStyles(props, ref) {
    const styles = createStyle(props.theme);
    return <WrappedComponent ref={ref} styles={styles} {...props} />;
  });

  WithStyles.propTypes = {
    theme: PropTypes.object.isRequired,
  };

  WithStyles.displayName = `withStyles(${WrappedComponent.displayName ||
    WrappedComponent.name})`;

  return withTheme(WithStyles);
};

export default withStylesWithTheme;
