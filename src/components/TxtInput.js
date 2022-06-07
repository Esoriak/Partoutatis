import React, {useState,} from 'react';
import { TextInput} from 'react-native';
import withStyles from '../hoc/withStyles';
import theme from '../../theme';

const stylesheet = theme => ({
  textInput: {
    height: 40,
    width: '80%',
    borderColor: '#ADADAD',
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 30,
    padding: theme.spacing.unit,
    fontSize: 16,
    color: theme.colors.darkGrey,
    paddingLeft: 10
  },
});

const TxtInput = ({
  styles,
  inputValue,
  inputChange,
  placeHolder,
  autoCaps,
}) => {
  const [focus, setFocus] = useState();

  let borderStyle = (borderStyle = focus
    ? {borderColor: theme.colors.Yellow}
    : {borderColor: theme.colors.placeholder});


  return (
    <TextInput
      style={[styles.textInput, borderStyle,]}
      autoCapitalize={autoCaps ? autoCaps : "none"}
      mode="outlined"
      placeholder={placeHolder}
      placeholderTextColor={theme.colors.lightGrey}
      onChangeText={inputChange}
      value={inputValue}
      onFocus={() => (setFocus(true))}
      autoCorrect={false}
      clearTextOnFocus={false}
    />
  );
};

export default withStyles(stylesheet)(TxtInput);
