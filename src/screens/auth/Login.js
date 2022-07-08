import {View, Text, Alert, StyleSheet, Image, ScrollView} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {Formik} from 'formik';
import ExtendedTextInput from '../../component/atoms/ExtendedTextInput';
import LoginButton from '../../component/atoms/LoginButton';
import {AuthContext} from '../../navigation/AuthProvider';
import * as Yup from 'yup';
import PushNotification from 'react-native-push-notification';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Email is required!'),
  password: Yup.string()
    .trim()
    .min(3, 'Password is too short!')
    .required('Password is required!'),
});
const Login = ({navigation}) => {
  useEffect(() => {
    createChannels();
  }, []);

  const {login} = useContext(AuthContext);

  const createChannels = () => {
    PushNotification.createChannel({
      channelId: 'channel-id', // (required)
      channelName: 'My channel', // (required)
    });
  };

  const handleLogin = values => {
    login(values.email, values.password);

    {
      !login ? Alert.alert(' please register your account') : null;
    }
  };
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}> LOGIN </Text>

      <Image
        style={styles.logo}
        source={require('./../../assets/notifyme.png')}
        resizeMode="cover"></Image>
      <Formik
        initialValues={{email: '', password: ''}}
        validationSchema={validationSchema}
        onSubmit={values => {
          handleLogin(values);
        }}>
        {({
          handleChange,
          handleSubmit,
          values,
          handleBlur,
          errors,
          touched,
        }) => (
          <View style={styles.inputcontainer}>
            <ExtendedTextInput
              title="E-mail"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              placeholder="Enter your E-mail here "
            />

            {errors.email && touched.email ? (
              <Text style={styles.error}>{errors.email}</Text>
            ) : null}

            <ExtendedTextInput
              title="Password"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              placeholder="Enter your password here "
              secureTextEntry={true}
            />

            {errors.password && touched.password ? (
              <Text style={styles.error1}>{errors.password}</Text>
            ) : null}

            <LoginButton title="Login" onPress={handleSubmit} />
          </View>
        )}
      </Formik>

      <Text style={styles.word}> forgot password</Text>

      <Text style={styles.bottom}>
        {' '}
        Not a member?{' '}
        <Text
          onPress={() => navigation.navigate('Registration')}
          style={styles.bold}>
          Sign up now
        </Text>{' '}
      </Text>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A374D',
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
    color: '#B1D0E0',
  },
  bodycontainer: {
    flex: 0.9,
    // backgroundColor: '$lightDark',
    // marginTop: 'auto',
    // marginBottom: 40,
    // marginHorizontal: 30,
    // borderRadius: 20,
    // flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  inputcontainer: {
    // backgroundColor: '$light',
    // flexDirection: 'row',
    marginHorizontal: 20,
    // marginVertical: 5,
    // borderRadius: 10,
    // alignItems: 'center',
    // paddingHorizontal: 5,
    // marginTop: 20,
  },

  input: {
    height: 50,
    color: 'black',
  },
  tinyLogo: {
    height: 60,
    width: 60,
    alignSelf: 'center',
    marginTop: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
  bottom: {
    alignSelf: 'center',
    fontSize: 15,
    marginTop: '30%',
    color: '#B1D0E0',
  },
  logo: {
    marginTop: 30,
    marginBottom: 50,
    height: 170,
    width: 240,
    // marginBottom : 5,
    //marginHorizontal: 20,
    alignSelf: 'center',

    // position: 'absolute',
  },
  word: {
    // marginLeft : '60%',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#B1D0E0',
    alignSelf: 'center',
    // paddingTop : 20,
  },
  error: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'red',
    marginHorizontal: 12,
    textAlign: 'right',
    padding: 10,
  },
  error: {
    color: 'red',
    marginLeft: 190,
    paddingTop: 10,
  },
  error1: {
    color: 'red',
    marginLeft: 160,
    paddingTop: 10,
  },
});
