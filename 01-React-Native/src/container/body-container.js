import React from 'react';
import { StyleSheet, TouchableOpacity, TextInput, Text } from 'react-native';

function Body (props)  {
  return(    
          <TouchableOpacity style={styles.body}>
          <Text style={styles.textColor}>{props.title}</Text>
            <TextInput placeholder="write your message here" placeholderTextColor="white" maxLength={20} style={styles.textInput}>
            </TextInput>
          </TouchableOpacity>
  );
}
    
const styles = StyleSheet.create({
    container: {
    flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    body : 
    {
        flex : 4,
        justifyContent : 'center',
        alignItems : 'center'
    },
    textColor :
    {
        color : 'white'
    },
    textInput :
    {
        borderWidth:1, 
        borderColor: 'white', 
        padding: 5, 
        marginTop: 10, 
        borderRadius: 5
    },
});

export default Body;