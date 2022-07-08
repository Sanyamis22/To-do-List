import {View, Text, Button, StyleSheet, Image, ScrollView} from 'react-native';
import React, {useContext} from 'react';
import {Formik} from 'formik';
import ExtendedTextInput from '../../component/atoms/ExtendedTextInput';
import LoginButton from '../../component/atoms/LoginButton';
import {AuthContext} from '../../navigation/AuthProvider';
import * as Yup from 'yup';
const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Email is required!'),
  name: Yup.string().required('Required'),
  confirmPassword: Yup.string().required('Required'),
  semester: Yup.string().required('Required'),
  password: Yup.string()
    .trim()
    .min(3, 'Password is too short!')
    .required('Password is required!'),
});

const Registration = ({navigation}) => {
  const {register} = useContext(AuthContext);

  const handleRegister = values => {
    register(values.email, values.password);
  };
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}> SIGN UP </Text>

      {/* <Image
        style={styles.logo}
        source={require('./../../assets/notifyme.png')}
        resizeMode="cover"></Image> */}
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
          semester: '',
        }}
        validationSchema={validationSchema}
        onSubmit={values => handleRegister(values)}>
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
              title="Name"
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
              placeholder="Enter your Name here "
            />

            {errors.name && touched.name ? (
              <Text style={styles.normalError}>{errors.name}</Text>
            ) : null}

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
              secureTextEntry={true}
              placeholder="Enter your password here "
            />

            {errors.password && touched.password ? (
              <Text style={styles.error1}>{errors.password}</Text>
            ) : null}

            <ExtendedTextInput
              title="Confirm Password"
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
              value={values.confirmPassword}
              secureTextEntry={true}
              placeholder="Confirm your password here "
            />

            {errors.confirmPassword && touched.confirmPassword ? (
              <Text style={styles.normalError}>{errors.confirmPassword}</Text>
            ) : null}

            <ExtendedTextInput
              title="Semester"
              onChangeText={handleChange('semester')}
              onBlur={handleBlur('semester')}
              value={values.semester}
              placeholder="Enter your semester here "
            />

            {errors.semester && touched.semester ? (
              <Text style={styles.normalError}>{errors.semester}</Text>
            ) : null}

            <LoginButton title="Sign Up" onPress={handleSubmit} />
          </View>
        )}
      </Formik>

      <Text style={styles.bottom}>
        Already have an account?
        <Text onPress={() => navigation.navigate('Login')} style={styles.bold}>
          Login
        </Text>{' '}
        here{' '}
      </Text>
    </ScrollView>
  );
};

export default Registration;

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
    paddingTop: 40,
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
    paddingLeft: 10,
  },
  bottom: {
    alignSelf: 'center',
    fontSize: 15,
    marginTop: '10%',
    color: '#B1D0E0',
    paddingRight: 10,
    marginBottom: 20,
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
  normalError: {
    color: 'red',
    marginLeft: 240,
    paddingTop: 10,
  },
});
