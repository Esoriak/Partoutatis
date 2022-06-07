import React from 'react';
import {TouchableOpacity, View, Image} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import withStyles from '../hoc/withStyles';
import PropTypes from 'prop-types';
import Typography from '../components/Typography';

const stylesheet = theme => ({
  tabContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: 'white',
    shadowColor : 'lightGrey',
    shadowRadius: 10,
    shadowOpacity : 0.3,
    shadowOffset: {
      width: 0.5,
      height: 0
    },
    elevation: 6
  },
  iconTab: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
    borderTopWidth: 0.2,
    borderTopColor: theme.colors.lightGrey,
  },
});

const homeIcon = require('../assets/home-icon.png');

const homeFullIcon = require('../assets/home-icon-full2.png');

BottomTabBar = ({styles, state, descriptors, navigation}) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        ...styles.tabContainer,
        paddingBottom: insets.bottom,
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label = options.title;
        const {key} = route;
        const isFocused = state.index === index;
        const onPress = () => { navigation.navigate(route.name);
        };

        let iconName;
        switch (route.name) {
          case 'Home':
            iconName = isFocused ? homeFullIcon : homeIcon;
            break;
          default:
            iconName = isFocused ? homeFullIcon : homeIcon;
        }

        return (
          <TouchableOpacity key={key} onPress={onPress} style={styles.iconTab}>
              <>
                <Image source={iconName} style={{height:32, width: 32}} />
                <Typography style={{color: isFocused ? '#F18950' : '#235353'}} size="extraSmall" weight={"medium"} >
                  {label}
                </Typography>
              </>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

BottomTabBar.propTypes = {
  styles: PropTypes.shape().isRequired,
};
const StyledBottomTabBar = withStyles(stylesheet)(BottomTabBar);

StyledBottomTabBar.navigationOptions = () => ({
  header: null,
});

export default StyledBottomTabBar;