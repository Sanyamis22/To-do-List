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
    return <TaskCards item={item} navigation={navigation} 
      
     />;
  };

  const _renderHeader = () => {
    return (
      <View>
        <View style={styles.headerBar}>
          <Image style={styles.logo} source={require('./../assets/logo.png')} />
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              color: '#fff',
              marginTop: 20,
            }}>
            {' '}
            All Lists{' '}
          </Text>
          <MaterialIconsIcon
            name="arrow-drop-down"
            size={35}
            color="black"
            style={{marginTop: 18}}
          />
          <Icon
            name="search1"
            size={40}
            color="#B1D0E0"
            style={{marginLeft: '30%', marginTop: 18}}
          />
          <EntypoIcon
            name="dots-three-vertical"
            size={35}
            color="#B1D0E0"
            style={{marginLeft: 10, marginTop: 20}}
          />
        </View>
        <View Style={styles.flexrow}>
          <Text style={styles.heading}>  Today's schedule </Text>
          <TouchableOpacity onPress={() => navigation.navigate('NewTask')}>
            <MaterialIconsIcon
              name="add-circle"
              size={75}
              color="#fff"
              style={{
                marginLeft: '75%',
               // marginBottom: '5%',
                shadowColor: 'black',
                opacity: 0.8,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const _renderFooter = () => {
    return (
      <View>
       
      </View>
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
            ListFooterComponent={_renderFooter}
            ListHeaderComponent={_renderHeader}
          />
        </View>
      </View>
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
    flex: 0.15,
    backgroundColor: '#406882',
    flexDirection: 'row',
    shadowColor: 'black',
  },
  logo: {
    height: 50,
    width: 50,
    marginLeft: 5,
    marginTop: 10,
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
    fontSize: 30,
    alignContent: 'center',
    marginHorizontal: 20,
    color: '#B1D0E0',
     paddingTop: 20,
    fontWeight: 'bold',
  },
  flexrow: {
    flexDirection: 'row',
  },
});
