import React, {Component} from 'react';
import { StyleSheet, ImageBackground } from 'react-native';

//Import Class
import Header from './src/components/header-components';
import Body from './src/components/body-components';
import Footer from './src/components/footer-components';

class ExerciseReactNativ01 extends Component
{
  render()
  {

    return(
      <ImageBackground source={require('./assets/fondo2.jpg')} style={styles.container}> 
      <Header />
      <Body />
      <Footer />
      </ImageBackground>    
    );
  }
}

const styles = StyleSheet.create(
{
  container : 
  {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center'
  }
})

export default ExerciseReactNativ01