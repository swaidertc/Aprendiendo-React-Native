import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class ExerciseReactNativ01 extends Component
{
  render()
  {
    return(
      <View style={styles.container}> 

        <View style={styles.headerLeft}>
        </View>

        <View style={styles.headerRight}>
        </View>

        <View style={styles.body}>
        <Text>Hello Word</Text>
        </View>

      </View>    
    );
  }
}

const styles = StyleSheet.create(
{
  container : 
  {
    flex : 1,
    flexDirection : 'column'   
  },
  headerLeft :
  {
    flex : 1,
    backgroundColor: 'yellow'
  },
  headerRight :
  {
    flex : 1,
    backgroundColor: 'blue'
  },
  body : 
  {
    flex : 3,
    backgroundColor: 'red'
  }
})

export default ExerciseReactNativ01