import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import TaskCards from '../component/molecule/TaskCards';
import HeadingofScreens from '../component/atoms/HeadingofScreens';
import PushNotification from 'react-native-push-notification';

const Schedule = () => {
  const {allTasks} = useSelector(state => state.Task);

  const [todoList, settodoList] = useState([]);

  useEffect(() => {
    console.log('allTasks=>', allTasks);
    const filteredTask = allTasks.filter(item => {
      return item.status === 'todo';
    });
    console.log('filteredTask=>', filteredTask);
    settodoList(filteredTask);
  }, [allTasks]);

  const handleNotification = item => {
    PushNotification.localNotification({
      channelId: 'test-channel',
      title: 'you clicked on ' + item.enterTask,
      message: item.enterTask,
    });
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          handleNotification();
        }}>
        <TaskCards item={item} />
      </TouchableOpacity>
    );
  };

  const renderHeader = () => {
    return (
      <View>
        <HeadingofScreens heading="Pending" />
        {/* <Text style={styles.title}> Schedule </Text> */}
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
  );
};

export default Schedule;

const styles = StyleSheet.create({
  backImage: {
    flex: 1,
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
  title: {
    fontSize: 25,
    alignContent: 'center',
    marginHorizontal: 20,
    color: '#B1D0E0',
    paddingTop: 20,
    marginTop: 20,
    marginBottom: 30,
    fontWeight: 'bold',
  },
});
