import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useContext} from 'react';
import HeadingofScreens from '../component/atoms/HeadingofScreens';
import {AuthContext} from '../navigation/AuthProvider';

const AboutUs = () => {
  return (
    <View style={styles.container}>
      <HeadingofScreens heading="About Us" />

      <View style={styles.textContainer}>
        <Image
          source={require('../assets/sanyaMishra.jpg')}
          style={styles.image}
        />
        <View style={{flexDirection: 'column', marginTop: 10}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.Headings}> Name : </Text>
            <Text style={styles.subHeading}>Sanya Mishra </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.Headings}> E-mail : </Text>
            <Text style={styles.subHeading}>sanya@gmail.com </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.Headings}> Position : </Text>
            <Text style={styles.subHeading}> Front-end Developer </Text>
          </View>
        </View>
      </View>
      <View style={styles.textContainer}>
        <Image
          source={require('../assets/yashLovet.jpeg')}
          style={styles.image}
        />
        <View style={{flexDirection: 'column', marginTop: 10}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.Headings}> Name : </Text>
            <Text style={styles.subHeading}>Yash Lovett </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.Headings}> E-mail : </Text>
            <Text style={styles.subHeading}> yash@gmail.com </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.Headings}> Position : </Text>
            <Text style={styles.subHeading}> Front-end Developer </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AboutUs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A374D',
  },
  textContainer: {
    marginHorizontal: 20,
    marginTop: 40,
    flexDirection: 'row',
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 2,
    borderColor: 'white',
  },
  Headings: {
    color: '#B1D0E0',
    fontSize: 18,
    paddingLeft: 10,
  },
  subHeading: {
    color: 'white',
    fontSize: 15,
    paddingTop: 5,
    //paddingLeft: 20,
  },
});
