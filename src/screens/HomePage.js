import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {fetchTasks} from '../redux/action/TaskActions';
import TaskCards from '../component/molecule/TaskCards';

const HomePage = ({navigation}) => {
  const {allTasks} = useSelector(state => state.Task);

  // const[todoList, settodoList] = useState([]);

  // useEffect(() => {
  //  const filteredTask = allTasks.filter();
  //  settodoList(filteredTask);
  // },[allTasks]);

  const _renderProductItem = ({item}) => {
    return <TaskCards item={item} navigation={navigation} />;
  };

  const _renderHeader = () => {
    return (
      <View>
        {/* <View style={styles.headerBar}>
          <Image style={styles.logo} source={require('./../assets/logo.png')} />
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: '#fff',
              marginTop: 20,
            }}>
            {' '}
            All Lists{' '}
          </Text>
          <MaterialIconsIcon
            name="arrow-drop-down"
            size={20}
            color="black"
            style={{marginTop: 25}}
          />
          <Icon
            name="search1"
            size={30}
            color="#B1D0E0"
            style={{marginLeft: '30%', marginTop: 18}}
          />
          <EntypoIcon
            name="dots-three-vertical"
            size={30}
            color="#B1D0E0"
            style={{marginLeft: 10, marginTop: 20}}
          />
        </View> */}
        <View style={styles.headContainer}>
          <Image style={styles.logo} source={require('./../assets/logo.png')} />
          <Text style={styles.heading}> Today's schedule </Text>
        </View>
      </View>
    );
  };

  const _renderFooter = () => {
    return (
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 20,
          right: 10,
        }}
        onPress={() => navigation.navigate('NewTask')}>
        <MaterialIconsIcon name="add-circle" size={75} color="#333" />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <View>
        <View style={styles.taskContainer}>
          <FlatList
            data={allTasks}
            renderItem={_renderProductItem}
            keyExtractor={item => item.id}
            ListHeaderComponent={_renderHeader}
          />
        </View>
      </View>
      {_renderFooter()}
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#1A374D',
  },
  headerBar: {
    flex: 0,
    backgroundColor: '#406882',
    flexDirection: 'row',
    shadowColor: 'black',
  },
  logo: {
    height: 30,
    width: 30,
    marginLeft: 10,
    position: 'absolute',
  },
  backImage: {
    flex: 1,
    justifyContent: 'center',
    height: 300,
    width: 300,
    marginHorizontal: 40,
    marginVertical: 100,
    opacity: 0.2,
  },

  heading: {
    fontSize: 25,
    alignContent: 'center',
    marginHorizontal: 20,
    color: '#B1D0E0',
    //paddingTop: 20,
    // marginTop:20,
    // marginBottom:30,
    fontWeight: 'bold',
  },
  flexrow: {
    flexDirection: 'row',
  },
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
    shadowColor: 'black',
  },
  logo: {
    height: 35,
    width: 35,
    shadowOpacity: 0.9,
  },
});
