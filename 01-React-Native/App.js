import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Button, Alert, ImageBackground, TouchableOpacity, TextInput} from 'react-native';

class ExerciseReactNativ01 extends Component
{

  constructor(props)
  {
    super(props)
    this.state = 
      {
        greeting : 'Hello person',
        user : 1,
        userName : 'Swaider'
      }
  }

  sumUser = () =>
    {
      this.setState 
      (
        {
          user : this.state.user + 1
        }
      )

    }
  
  render()
  {

    let {greeting} = this.state
    let {user} = this.state
    let {userName} = this.state

    return(
      <ImageBackground source={require('./assets/fondo2.jpg')} style={styles.container}> 

        <View style={styles.header}>

          <View style={styles.headerLeft}>
            <Image source={require('./assets/ctm.jpg')} style={styles.logo}/>
          </View>

          <View style={styles.headerRight}>
            <Button title="Sum Users" onPress={this.sumUser}/>
          </View>
        </View>

        <View style={styles.body}>
          <TouchableOpacity>
          <Text style={styles.textColor}>{greeting} Users: {user}</Text>
            <TextInput placeholder="UserName" onChangeText ={(userName) => 
              this.setState({userName})} placeholderTextColor="white" maxLength={20} style={styles.textInput}>
            </TextInput>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>

            <View style={styles.footerone}>
            <Text style={styles.textColor}>{userName}</Text>
            </View>

            <View style={styles.footertwo}>
            <Text style={styles.textColor}>Welcome</Text>
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
    backgroundColor : 'green',
    color : 'white'
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
  textColor :
  {
    color : 'white'
  },
  headerRight :
  {
    flex : 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft : 100
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