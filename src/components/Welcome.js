import React from 'react'
import {Image, TouchableOpacity } from 'react-native';
import Container from './Container';
import Typography from './Typography';
import theme from '../../theme';



const Welcome = ({navigation}) => {
    return (
      <Container>
      <Image source={require('../assets/AsterixRenseigne.jpeg')}
        style={{
          width: 400,
          height: 300,
          borderRadius: 5,
          alignSelf: 'center'
        }} />
      <Typography
        size={'medium'}
        color={'darkGrey'}
        weight={"intermediate"}
        gutterBottom={0}
        accessibilityLabel="liste des pays"
      >
        Vous cherchiez une Flatlist ?
      </Typography>
      <TouchableOpacity
        style={{
          height: 30,
          width: 150,
          marginRight: 15,
          justifyContent: 'center',
          borderRadius: 20,
          borderColor: theme.colors.Yellow,
          borderStyle: 'solid',
          borderWidth: 1,
          backgroundColor: theme.colors.Yellow,
          marginTop: 10,
        }}
        onPress={() => {
          navigation.navigate('CountryList');
        }}>
        <Typography
          size={'light'}
          color={'darkGrey'}
          weight={"intermediate"}
          accessibilityLabel="la flatlist pour la 12"
          align={'center'}
        >
          Essayez par là
        </Typography>
      </TouchableOpacity>
      <Typography
        size={'medium'}
        color={'darkGrey'}
        weight={"intermediate"}
        gutterBottom={0}
        accessibilityLabel="Une todoliste ? Mais pour quoi faire "
      >
        La ToDo c'est tout droit
      </Typography>
      <TouchableOpacity
        style={{
          height: 30,
          width: 150,
          marginRight: 65,
          justifyContent: 'center',
          borderRadius: 20,
          borderColor: theme.colors.green,
          borderStyle: 'solid',
          borderWidth: 1,
          backgroundColor: theme.colors.green,
          marginTop: 10,
        }}
        onPress={() => {
          navigation.navigate('Todorisque');
        }}>
        <Typography
          size={'light'}
          color={'darkGrey'}
          weight={"intermediate"}
          accessibilityLabel="la todo"
          align={'center'}
        >
          ToDoRisk
        </Typography>
      </TouchableOpacity>
    </Container >
    )
}

export default Welcome