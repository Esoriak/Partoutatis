import React, { useState, useEffect } from 'react';
import { Image, FlatList, ActivityIndicator, View, } from 'react-native';
import Container from '../components/Container';
import Typography from '../components/Typography';
import dataJson from '../utils/data.json'

const CountryList = ({navigation}) => {

  const [dataCountryNames, setDataCountryNames] = useState([])
  const [loadingIndicator, setLoadingIndicator] = useState(true)

  const getDataCountryToDisplay = async () => {
    //fetchCountry api await setState and calculate the offset variable
    setLoadingIndicator(true)
    const data = dataJson
    setDataCountryNames(data.quotes)
    setLoadingIndicator(false)
  }

  useEffect(() => {
    getDataCountryToDisplay()
  }, [])


  return (
    <Container>
      <Typography
        size={'light'}
        color={'darkGrey'}
        weight={"intermediate"}
        accessibilityLabel="la flatlist pour de vrai"
        align={'center'}
        style={{
          marginTop: 30
        }}
      >
        Z'êtes au bon endroit !
      </Typography>
      <Image source={{ uri: 'https://media0.giphy.com/media/1Md9azxcgIyQ/giphy.gif' }}
        style={{
          width: 300,
          height: 250,
          marginTop: 20,
          alignSelf: 'center',
          borderRadius: 100,
          overlayColor: 'white'
        }}
      />

      {!loadingIndicator ?
        <FlatList
          data={dataCountryNames}
          renderItem={(...country) => {
            return (
              <View key={country[0].index}>
                <Typography>
                  {country[0].item.name}
                </Typography>
              </View>
            )
          }}
        />
        :
        <ActivityIndicator size='large' color="purple" />
      }
    </Container>
  )
}

export default CountryList;