import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '../hoc/withStyles';
import Container from '../components/Container';
import Welcome from '../components/Welcome';


const stylesheet = theme => ({});

const HomeScreen = ({ navigation, route}) => {

  return (
    <Container>
      <Welcome navigation={navigation}/>
    </Container>
  );
};

HomeScreen.propTypes = {
  styles: PropTypes.shape().isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const StyledHomeScreen = withStyles(stylesheet)(HomeScreen);

StyledHomeScreen.navigationOptions = () => ({
  header: null,
});

export default StyledHomeScreen;
