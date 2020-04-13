import React from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';

function Footer ()  {
  return(    
    <View style={styles.footer}>

        <View style={styles.footerone}>
            <Text style={styles.textColor}>Swaider</Text>
        </View>

        <View style={styles.footertwo}>
            <Text style={styles.textColor}>Welcome Person</Text>
        </View>

        <View style={styles.footerthree}>
            <Image source={require('../../assets/ctm.jpg')} style={styles.logo}/>
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
    textColor :
    {
      color : 'white'
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
    },
    logo :
    {
      width : 80,
      height : 80,
      borderRadius : 150,
      resizeMode : 'contain'
    },
});

export default Footer;