import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React from 'react';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

const ExtendedTextInput = ({
  title,
  onChangeText,
  onBlur,
  value,
  placeholder,
  icon,
  fonticon,
  ionicIcons,
  labelValue,
  KeyboardType,
  autoCapitalize,
  autoCorrect,
  secureTextEntry,
}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.inputcontainer}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          onChangeText={onChangeText}
          onBlur={onBlur}
          value={value}
          placeholderTextColor={'#406882'}
          labelValue={labelValue}
          KeyboardType={KeyboardType}
          autoCapitalize={autoCapitalize}
            autoCorrect={autoCorrect}
            secureTextEntry={secureTextEntry}

        />
        {icon ? <FontAwesomeIcon name={icon} size={25} color="#B1D0E0" /> : null}
        {fonticon ? (
          <FontistoIcon name={fonticon} size={25} color="#B1D0E0" />
        ) : null}
        {ionicIcons ? (
          <IoniconsIcon name={ionicIcons} size={25} color="#B1D0E0" />
        ) : null}
        
      </View>
    </View>
  );
};

export default ExtendedTextInput;

const styles = StyleSheet.create({
  input: {
    color: '#fff',
    fontSize: 20,
    paddingLeft: 20,
    flex: 1,
  },
  title: {
    fontSize: 20,
    color: '#B1D0E0',
    fontWeight: 'bold',
    marginTop: 15,
    marginLeft: 10,
  },
  inputcontainer: {
    flexDirection: 'row',

    paddingHorizontal: 5,
    marginTop: 5,

    borderBottomColor: '#B1D0E0',
    borderBottomWidth: 1,
    marginHorizontal: 20,
  },
});
