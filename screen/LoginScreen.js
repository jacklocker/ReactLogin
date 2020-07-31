import React, {useState} from 'react';
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
  Picker,
} from 'react-native';

//import {SocialIcon, Avatar} from 'react-native-elements';

const LoginScreen = (props) => {
  const [formData, setFormDate] = useState({
    isValidEmail: true,

    isValidPassword: true,
  });
  const [selectedValue, setSelectedValue] = useState('Select Handler');
  const [enteredValue, setEnteredValue] = useState('');
  const textInputHandler = (inputText) => {
    setEnteredValue(inputText);
  };
  const checkPassword = (e) => {
    var paswd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    if (e.trim().length === 0 || !e.match(paswd)) {
      setFormDate({
        ...formData,
        isValidPassword: false,
      });
      return;
    } else {
      setFormDate({
        ...formData,
        isValidPassword: true,
      });
    }
  };
  const checkEmail = (e) => {
    if (
      e.trim().length === 0 ||
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)
    ) {
      setFormDate({
        ...formData,
        isValidEmail: false,
      });
      return;
    } else {
      setFormDate({
        ...formData,
        isValidEmail: true,
      });
    }
  };

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
          <View style={styles.pickercontainer}>
            <Picker
              selectedValue={selectedValue}
              style={{height: 50, width: 150}}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }>
              <Picker.Item label="Select" value="default" />
              <Picker.Item label="Driver" value="driver" />
              <Picker.Item label="User" value="user" />
            </Picker>
          </View>
          <View style={styles.body}>
            <View style={styles.inputContainerView}>
              <TextInput
                onChangeText={textInputHandler}
                style={styles.inputContainer}
                placeholder="USER NAME"
                onEndEditing={(e) => checkEmail(e.nativeEvent.text)}
              />
              {formData.isValidEmail ? null : (
                <Text style={styles.errorMessage}>Invalid User Name</Text>
              )}
              <TextInput
                style={styles.inputContainer}
                placeholder="PASSWORD"
                onEndEditing={(e) => checkPassword(e.nativeEvent.text)}
              />
              {formData.isValidPassword ? null : (
                <Text style={styles.errorMessage}>Invalid Password</Text>
              )}
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
  errorMessage: {
    color: 'red',
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
  pickercontainer: {
    marginTop: 20,
    alignItems: 'center',
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
