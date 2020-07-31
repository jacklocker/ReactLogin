import React, {useState} from 'react';
import {View, StyleSheet, SafeAreaView, StatusBar, Button, Image, TouchableOpacity,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const LoginScreen = (props) => {
  return (
    <View>
      <SafeAreaView>
        <View style={styles.iconHeader}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri:
                'https://media.glassdoor.com/sql/1036334/aks-it-services-squarelogo-1525843901819.png',
            }}
          />
        </View>
        <View style={styles.body}>
          <View style={styles.inputContainerView}>
            <View style={styles.signupView}>
              <TouchableOpacity
                style={styles.signupButton}
                onPress={() => props.name.navigate('LoginScreenPage')}>
                <Text style={styles.textStyle}>SIGN UP</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.signupView}>
              <TouchableOpacity
                style={styles.registerButton}
                onPress={() => props.name.navigate('RegisterScreenPage')}>
                <Text style={styles.textStyle}>REGISTER</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  iconHeader: {
    marginTop: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10%',
  },
  tinyLogo: {
    width: 150,
    height: 150,
  },
  body: {
    backgroundColor: '#ffffff',
  },

  scrollView: {
    backgroundColor: '#ffffff',
  },
  inputContainerView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputIconSpace: {
    flexDirection: 'row',
  },
  inputContainer: {
    width: '70%',
    marginTop: 10,
    borderRadius: 10,
    borderBottomWidth: 1,
    borderColor: '#ffffff',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  registerButton: {
    height: 50,
    backgroundColor: '#919191',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupButton: {
    height: 50,
    backgroundColor: '#202646',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 20,
    color: '#ffffff',
    textAlign: 'center',
  },
  signupView: {
    marginTop: '5%',
    width: '70%',
  },
  socialMediaStyle: {
    width: '65%',
    marginTop: 30,
  },
  footerText: {
    marginTop: '10%',
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'justify',
    justifyContent: 'center',
    alignItems: 'center',
    lineHeight: 50,
  },
});

export default LoginScreen;
