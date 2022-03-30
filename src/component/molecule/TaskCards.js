import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CheckBox from '@react-native-community/checkbox';
import {taskCompleted} from '@reduxjs/toolkit/dist/listenerMiddleware/exceptions';
import {useDispatch, useSelector} from 'react-redux';
import {createTasks, doneTasks} from '../../redux/action/TaskActions';
import {changeStatus} from '../../redux/action/TaskActions';
import {deleteTask} from '../../redux/action/TaskActions';
const TaskCards = ({item, navigation}) => {
  const dispatch = useDispatch();
  // const taskCompleted = () => {
  //   {
  //     toggleCheckBox ? <>{dispatch(createTasks(payload))}</> : null;
  //   }
  // };

  const handleCheckbox = value => {
    const payload = {
      id: item.id,
      status: value === true ? 'completed' : 'todo',
    };
    dispatch(changeStatus(payload));
  };

  const handleDelete = () => {
    console.log('payload==>>', payload);
    const payload = {
      id: item.id,
    };
    dispatch(deleteTask(payload));
  };

  return (
    <TouchableOpacity style={styles.taskCards}>
      <CheckBox
        disabled={false}
        value={item.status === 'completed' ? true : false}
        onValueChange={handleCheckbox}
        style={{}}
        tintColor={{true: 'red', false: 'green'}}
      />
      <View style={{justifyContent: 'center', marginLeft: 20}}>
        <Text style={styles.text}> {item.enterTask} </Text>
        <Text ellipsizeMode="tail" style={styles.desc}>
          I'm going ZXy eveing
        </Text>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: '#c51910',
          height: 30,
          width: 30,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 50,
          position: 'absolute',
          top: -10,
          right: -10,
        }}
        onPress={handleDelete}>
        <Icon name="delete" size={13} color="white" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default TaskCards;

const styles = StyleSheet.create({
  taskContainer: {},
  taskCards: {
    flex: 1,
    backgroundColor: '#6998AB',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 30,
    borderColor: '#B1D0E0',
    borderWidth: 1,
    height: 80,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderBottomEndRadius: 20,
    borderTopLeftRadius: 20,
  },
  text: {
    fontSize: 22,
    color: '#B1D0E0',
    fontWeight: 'bold',
  },
  desc: {
    fontSize: 13,
    color: '#B1D0E0',
  },
});
