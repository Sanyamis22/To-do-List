import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const HeadingofScreens = ({
  heading,
}) => {
  return (
    <View style={styles.headContainer}>
          <Image style={styles.logo} source={require('./../../assets/logo.png')} />
          <Text style={styles.heading}> {heading} </Text>
        </View>
  )
}

export default HeadingofScreens

const styles = StyleSheet.create({
    headContainer: {
        backgroundColor: '#406882',
        alignItems: 'center',
        borderColor: '#B1D0E0',
        borderWidth: 1,
        paddingHorizontal: 10,
        borderBottomLeftRadius: 40,
        borderTopEndRadius: 40,
        marginTop: 20,
        marginHorizontal: 20,
        marginBottom: 20,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        elevation: 10,
        shadowColor: '#B1D0E0',
        
      },
      heading: {
        fontSize: 25,
        alignItems:'center',
        marginHorizontal: 20,
        color: '#B1D0E0',
        //paddingTop: 20,
        // marginTop:20,
        // marginBottom:30,
        fontWeight: 'bold',
      },
      logo: {
        height: 40,
        width: 35,
        shadowOpacity: 0.9,
        
      },

})
