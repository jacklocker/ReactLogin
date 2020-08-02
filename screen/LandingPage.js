import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';

const LoginScreen = (props) => {
  return (
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  iconHeader: {
    marginTop: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10%',
  },
  tinyLogo: {
    width: 150,
    height: 150,
  },
  inputContainerView: {
    justifyContent: 'center',
    alignItems: 'center',
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
});

export default LoginScreen;
