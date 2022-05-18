import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeadingofScreens from '../component/atoms/HeadingofScreens';

const Profile = () => {
  return (
    <View style={styles.container}>
      <HeadingofScreens heading="Profile" />

      <View style={styles.textContainer}>
        <View style={{flexDirection: 'column', marginVertical : 15}}>
          <Text style={styles.Headings}> Name : </Text>
          <Text style={styles.subHeading}> Sanya Mishra </Text>
        </View>
        <View style={{flexDirection: 'column', marginVertical : 15}}>
          <Text style={styles.Headings}> E-mail : </Text>
          <Text style={styles.subHeading}> sanyamishra@gmail.com </Text>
        </View>
        <View style={{flexDirection: 'column' , marginVertical : 15}}>
          <Text style={styles.Headings}> Semester : </Text>
          <Text style={styles.subHeading}> 8th </Text>
        </View>
        <View style={{flexDirection: 'column', marginVertical : 15}}>
          <Text style={styles.Headings}> College : </Text>
          <Text style={styles.subHeading}> Chouskey Engineering College Bilaspur </Text>
         
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A374D',
  },
  textContainer: {
    marginHorizontal: 20,
  },
  Headings: {
    color: '#B1D0E0',
    fontSize: 20,
  },
  subHeading: {
    color: 'white',
    fontSize: 18,
    paddingTop: 5,
    paddingLeft : 20,
  },
});
