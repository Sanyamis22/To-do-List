import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const HeaderBar = () => {
  return (
    <View style={styles.container}>
      <Image 
      style={styles.header}
      source={require('./../../assets/logo.png')} />
    </View>
  );
};

export default HeaderBar;

const styles = StyleSheet.create({

    
    header : {
        height: 30,
        width: 30,
        
    }
});
