import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';

const TaskDetails = ({}) => {
  const {allTasks} = useSelector(state => state.Task);
  return (
    <View style={styles.mainContainer}>
    
    <Text style={styles.heading}>  Detail </Text>
    <View style={styles.detailContainer}> 
    <Text style={styles.txt} > {allTasks.enterTask} </Text>
    
    
    </View>
     
    </View>
  )
}

export default TaskDetails

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#1A374D',
  },
  detailContainer : {

  },
  heading : {
    fontSize: 30,
    alignContent: 'center',
    marginLeft: '30%',
    color: '#B1D0E0',
    paddingTop: 20,
    fontWeight: 'bold',

  },
  txt : {
    fontSize: 20,
    color: '#fff',
  }
})