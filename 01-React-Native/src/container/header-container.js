import React from 'react';
import { StyleSheet, View, Image, Button } from 'react-native';

function Header (props)  {

  return(  
    <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image source={require('../../assets/ctm.jpg')} style={styles.logo}></Image>
        </View>

        <View style={styles.headerRight}>
          <Button title="Login" onPress={props.login}></Button>
        </View>

    </View>
  );
}
    
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
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
      marginLeft : 100
    },
    headerLeft :
    {
      flex : 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
});

export default Header;