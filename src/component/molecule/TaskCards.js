import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CheckBox from '@react-native-community/checkbox';
import {taskCompleted} from '@reduxjs/toolkit/dist/listenerMiddleware/exceptions';
import {useDispatch, useSelector} from 'react-redux';
import {createTasks, doneTasks} from '../../redux/action/TaskActions';
import { changeStatus } from '../../redux/action/TaskActions';
import { deleteTask } from '../../redux/action/TaskActions';
const TaskCards = ({item, navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const dispatch = useDispatch();
  // const taskCompleted = () => {
  //   {
  //     toggleCheckBox ? <>{dispatch(createTasks(payload))}</> : null;
  //   }
  // };

  const handleCheckbox = value => {
    const payload = {
      id: item.id,
      status: value === true ? 'completed' : 'todo'
  }
  console.log('daa', payload)
    dispatch(changeStatus(payload));
  }

  const handleDelete = () => {
    console.log('payload==>>',payload)
    const payload = {
      id: item.id,
      
  }
    dispatch(deleteTask(payload));
  }

  return (
    <View>
      <TouchableOpacity>
        <View style={styles.taskCards}>
          <CheckBox
            disabled={false}
            value={item.status === 'completed' ? true : false}
            onValueChange={handleCheckbox}
            style={{marginLeft: 20, marginTop: 10}}
          />
          {/* <Text> {toggleCheckBox ? "👍" : "👎"} </Text> */}

          <Text style={styles.text}> {item.enterTask} </Text>
          {/* <Text style={styles.text}> {item.status} </Text> */}
          <TouchableOpacity  onPress={handleDelete} >
            <Icon
              name="delete"
              size={25}
              color="#B1D0E0"
              style={{marginRight: 20, marginTop: 15}}
              
              
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TaskCards;

const styles = StyleSheet.create({
  taskContainer: {},
  taskCards: {
    backgroundColor: '#6998AB',
    flexDirection: 'row',

    marginHorizontal: 30,
    borderRadius: 10,
    marginTop: 10,
    marginVertical: 20,
    borderColor: '#B1D0E0',
    borderWidth: 1,
    height: 60,
  },
  text: {
    fontSize: 22,
    marginTop: 10,
    //alignSelf: 'center',
    color: '#B1D0E0',
    fontWeight: 'bold',
    flex: 1,
    marginLeft: 10,
  },
  desc: {
    fontSize: 18,
    marginTop: 20,
    alignSelf: 'center',
    color: '#B1D0E0',
  },
});
