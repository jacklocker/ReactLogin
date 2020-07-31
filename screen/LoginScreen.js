import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

//import {SocialIcon, Avatar} from 'react-native-elements';

const LoginScreen = (props) => {
  return (
    <ScrollView>
      <View>
        <StatusBar barStyle="dark-content" />
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
              <TextInput
                style={styles.inputContainer}
                placeholder="USER NAME"
              />
              <TextInput style={styles.inputContainer} placeholder="PASSWORD" />
              <View style={styles.signupView}>
                <TouchableOpacity
                  style={styles.signupButton}
                  onPress={() => props.buttonClickEvents('welcome')}>
                  <Text style={styles.textStyle}>LOGIN</Text>
                </TouchableOpacity>
              </View>

              {/* <View style={styles.socialMediaStyle}>
                
                <SocialIcon iconSize={20} title="Sign In With Google" button type="google" />
                <SocialIcon iconSize={20} title="Sign In With Facebook" button type="facebook"/>
              </View> */}
            </View>

            <View style={styles.footerText}>
              <Text>By Signing in, you agree to</Text>
              <Text> Terms & condition and Privacy Policy of </Text>
              <Text> Dont have an account?</Text>
              <Text
                onPress={() => props.buttonClickEvents('register')}
                style={{color: 'blue'}}>
                Sign Up
              </Text>
            </View>
          </View>
        </SafeAreaView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  iconHeader: {
    marginTop: '10%',
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
    borderColor: '#c1c1c1',
    backgroundColor: 'white',
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
    color: '#C0C0C0',
    fontSize: 18,
    textAlign: 'justify',
    justifyContent: 'center',
    alignItems: 'center',
    lineHeight: 50,
  },
});

export default LoginScreen;
