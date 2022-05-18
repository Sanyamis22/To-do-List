import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LoginButton from '../component/atoms/LoginButton';
import SquareButton from '../component/molecule/SquareButton';

const Dashboard = ({navigation}) => {
  return (
    <View style={styles.Container}>
      <Text style={styles.text}>
        {' '}
        No need to remember your tasks and deadlines anymore! This{' '}
        <Text style={{fontWeight: '900'}}>“NOTIFY-ME” </Text> App will do your
        work.
      </Text>
      <View style={styles.arrangment}>
        <View style={styles.alignmentContainer1}>
          <SquareButton title="Schedule" onPress={() => navigation.navigate('HomePage')}/>
          <SquareButton title="Pending" onPress={() => navigation.navigate('Schedule')} />
        </View>
        <View style={styles.alignmentContainer1}>
          <SquareButton title="Done" onPress={() => navigation.navigate('Done')} />
          <SquareButton title="Notify" onPress={() => navigation.navigate('Notify')} />
        </View>
        <View style={styles.alignmentContainer1}>
          <SquareButton title="Profile" onPress={() => navigation.navigate('Profile')}/>
          <SquareButton title="Logout" style={{}} />
        </View>
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
  },
  alignmentContainer1: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    //marginTop: '60%',
    marginVertical: 20,
  },
  arrangment: {
    flexDirection: 'column',
    //justifyContent : 'space-evenly',
    //marginTop : '60%',
    backgroundColor: '#1A374D',
    justifyContent: 'center',
    flex: 1,
    marginTop: '15%',
    // marginBottom : '20%',
    // marginHorizontal : 10,
    marginBottom: 0,
    borderRadius: 30,
  },
  text: {
    fontSize: 20,
    color: '#1A374D',
    fontWeight: '500',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop : 60,

  },
});
