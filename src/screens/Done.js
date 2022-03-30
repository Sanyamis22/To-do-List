import { StyleSheet, Text, View,ImageBackground , FlatList} from 'react-native'
import React from 'react'
import  {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import TaskCards from '../component/molecule/TaskCards';

const Done = () => {
  const {allTasks} = useSelector(state => state.Task);
   
   const [todoList , settodoList] = useState([]);
 
   useEffect(() => {
    const filteredTask = allTasks.filter((item) => {
      return item.status === 'completed';
    });
    settodoList(filteredTask);
  }, [allTasks]);
  

  const renderItem = ({item}) => {
    return (
    
    <TaskCards item={item} />
    )};

    const renderHeader = () => {
      return (
        <View>
          <Text style={styles.title}> Done  </Text>
        </View>
      );
    };

  return (
    <View style={styles.mainContainer}>
    <FlatList
      data={todoList}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      ListHeaderComponent={renderHeader}
    />
  </View>
  )
}

export default Done

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#1A374D',
  },
  backImage: {
    flex: 1,
    justifyContent: 'center',
    height: 300,
    width: 300,
    marginHorizontal: 40,
    marginVertical: 100,
    opacity: 0.7,
  },
  title: {
    color: '#B1D0E0',
    fontWeight: 'bold',
    fontSize: 30,
    margin: 30,
    textAlign: 'center',
  },
})