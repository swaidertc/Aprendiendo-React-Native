import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Button, Alert, ImageBackground, TouchableOpacity, TextInput} from 'react-native';

class ExerciseReactNativ01 extends Component
{

  greeting()
  { 
    Alert.alert('Hello this is TalentScout Medellin') 
  }

  render()
  {
    return(
      <ImageBackground source={require('./assets/fondo3.jpg')} style={styles.container}> 

        <View style={styles.header}>

          <View style={styles.headerLeft}>
            <Image source={require('./assets/ctm.jpg')} style={styles.logo}/>
          </View>

          <View style={styles.headerRight}>
            <Button title="Login" onPress={this.greeting}/>
          </View>
        </View>

        <View style={styles.body}>
          <TouchableOpacity>
            <Text>Hello this is TalentScout Medellin</Text>
            <TextInput placeholder="UserName" placeholderTextColor="white" maxLength={8} style={styles.textInput}>
            </TextInput>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>

            <View style={styles.footerone}>
            <Text>Welcome</Text>
            </View>

            <View style={styles.footertwo}>
            <Text>Welcome</Text>
            </View>

            <View style={styles.footerthree}>
              <Image source={require('./assets/ctm.jpg')} style={styles.logo}/>
            </View>

        </View>

      </ImageBackground>    
    );
  }
}

const styles = StyleSheet.create(
{
  container : 
  {
    flex : 4,
    backgroundColor : 'green'
  },
  logo :
  {
    width : 80,
    height : 80,
    borderRadius : 150,
    resizeMode : 'contain'
  },
  header :
  {
    flex: 3,
    flexDirection : 'row',
    marginTop : 5
  },
  headerRight :
  {
    flex : 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft : 200
  },
  headerLeft :
  {
    flex : 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  body : 
  {
    flex : 4,
    justifyContent : 'center',
    alignItems : 'center'
  },
  textInput :
  {
    borderWidth:1, 
    borderColor: 'white', 
    padding: 5, 
    marginTop:10, 
    borderRadius: 5
  },
  footer : 
  {
    flex : 4,
    flexDirection : 'row',  
    margin: 0
  },
  footerone : 
  {
    flex : 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footertwo : 
  {
    flex : 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footerthree : 
  {
    flex : 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default ExerciseReactNativ01