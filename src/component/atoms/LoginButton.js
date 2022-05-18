import {StyleSheet, Text, View,ActivityIndicator,TouchableOpacity, Pressable} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const LoginButton = ({title, onPress, loading}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
      disabled={loading}>
      {loading ? (
        <ActivityIndicator  size={30} color={'white'} />
      ) : (
        <Text style={styles.title}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};




export default LoginButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#B1D0E0',
    height: 50,
    borderRadius: 10,
    marginTop: heightPercentageToDP('3'),
    marginBottom: heightPercentageToDP('2'),
    marginHorizontal: widthPercentageToDP('4'),
    justifyContent: 'center',
    alignItems : 'center'
  },
  title: {
    textAlign: 'center',
    fontWeight: '700',
   
    fontSize: 20,
    color: '#1A374D',
  },
  
});
