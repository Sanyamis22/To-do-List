import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import Icon from 'react-native-vector-icons/FontAwesome';
import ExtendedTextInput from '../component/atoms/ExtendedTextInput';
import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import fetchTasks, {createTasks} from './../redux/action/TaskActions';
import { NavigationContainer, useLinkBuilder } from '@react-navigation/native';
import 'react-native-get-random-values'; 
import {v4 as uuidv4} from 'uuid';

const NewTask = ({navigation}) => {
  const dispatch = useDispatch();

  const handleCreateNewTask = values => {
    const payload = {...values, status: 'todo' ,id: uuidv4()}
    console.log('uuid', payload)
    dispatch(createTasks(payload));
    navigation.goBack();
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.formikContainer}>
        <Formik
          initialValues={{
            enterTask: '',
            description: '',
            date: '',
            time: '',

            addList: '',
          }}
          onSubmit={values => handleCreateNewTask(values)}>
          {({handleChange, handleBlur, handleSubmit, values}) => (
            <View>
              <ExtendedTextInput
                title="What is to be done ? "
                onChangeText={handleChange('enterTask')}
                onBlur={handleBlur('enterTask')}
                value={values.enterTask}
                placeholder="Enter Task Here"
              />
              <ExtendedTextInput
                title="Description"
                onChangeText={handleChange('description')}
                onBlur={handleBlur('description')}
                value={values.description}
                placeholder="Description please ?"
              />
              <ExtendedTextInput
                title="Due Date"
                onChangeText={handleChange('date')}
                onBlur={handleBlur('date')}
                value={values.date}
                placeholder="Date not set"
                fonticon="date"
              />

              <ExtendedTextInput
                title="Time"
                onChangeText={handleChange('time')}
                onBlur={handleBlur('time')}
                value={values.time}
                placeholder="Time not set"
                ionicIcons="time-outline"
              />

              <Text style={styles.title}> Add to List</Text>
              <View style={styles.addList}>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder="Default"
                    placeholderTextColor={'#fff'}
                  />
                  <MaterialIconsIcon
                    name="arrow-drop-down"
                    size={30}
                    color="#B1D0E0"
                    style={{marginTop: 12, paddingLeft: '50%'}}
                  />
                </View>
                <MaterialIconsIcon
                  name="playlist-add"
                  size={35}
                  color="#B1D0E0"
                  style={{marginTop: 18, paddingLeft: 20}}
                />
              </View>

              <Ionicons
                name="checkmark-done-circle"
                onPress={handleSubmit}
                size={75}
                color="#fff"
                style={{
                  marginLeft: '75%',
                  marginTop: '20%',
                  shadowColor: 'black',
                  opacity: 1,
                }}
              />
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default NewTask;

const styles = StyleSheet.create({
  textstyle: {
    fontSize: 20,
    color: '#B1D0E0',
    fontWeight: 'bold',
    marginTop: 15,
    marginLeft: 10,
  },
  backImage: {
    //flex: 1,
    justifyContent: 'center',
    height: 300,
    width: 300,
    marginHorizontal: 40,
    marginVertical: 100,
    opacity: 0.7,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#1A374D',
  },
  formikContainer: {},
  formik: {},
  input: {
    color: '#fff',
    fontSize: 20,
    paddingLeft: 20,
    borderBottomColor: '#B1D0E0',
    borderBottomWidth: 1,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 20,
    color: '#B1D0E0',
    fontWeight: 'bold',
    marginTop: 15,
    marginLeft: 10,
  },
  input: {
    color: '#fff',
    fontSize: 20,
    paddingLeft: 20,
    // flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    paddingHorizontal: 5,
    marginTop: 5,

    borderBottomColor: '#B1D0E0',
    borderBottomWidth: 1,
    // marginRight: '20%',
    paddingRight: '1%',
  },
  addList: {
    flexDirection: 'row',
  },
});
