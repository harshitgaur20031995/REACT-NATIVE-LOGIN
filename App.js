

import React, { useState } from 'react';


import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  StatusBar
} from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import Product from './component/Product';
import About from './component/About';




const App = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const onLogin = () => {
    if (email) {
alert('user login')
    } else {
      alert('empty feild')
    }

  }

  return (

    <View style={styles.container}>
      {/* <Image style={styles.image} source={{uri: 'https://reactjs.org/logo-og.png'}} /> */}

      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn}
        onPress={() => {onLogin}

      >
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    //   </View>
//props.navigation.navigate('Product', { name: email }) }

  );
};

function Profile(props) {
  return (
    <View>
      <Text>Click Me</Text>
    </View>
  )

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 40,
  },

  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 0,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: "70%",
    borderRadius: 25,
    height: 50,
    color: 'red',
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },

  loginText: {
    color: 'white'
  }
});

const AppNavigator = createStackNavigator({
  ReactNative: {
    screen: App
  },
  Product: {
    screen: Product
  },
  About: {
    screen: About
  },
  Profile: {
    screen: Profile
  }
})

export default createAppContainer(AppNavigator);
