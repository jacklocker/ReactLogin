import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Picker,
} from 'react-native';

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
    <SafeAreaView>
      <ScrollView>
        <View>
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
          <View>
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
                  onPress={() => props.name.navigate('WelcomeScreenPage')}>
                  <Text style={styles.textStyle}>LOGIN</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.footerTextContainer}>
              <Text style={styles.footerText}>By Signing in, you agree to</Text>
              <Text style={styles.footerText}>
                {' '}
                Terms & condition and Privacy Policy of{' '}
              </Text>
              <Text style={styles.footerText}> Dont have an account?</Text>
              <Text
                onPress={() => props.name.navigate('WelcomeScreenPage')}
                style={{color: 'blue'}}>
                Sign Up
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
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
  inputContainerView: {
    marginTop: '4%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  pickercontainer: {
    alignItems: 'center',
  },
  inputContainer: {
    width: '75%',
    marginTop: 15,
    borderRadius: 10,
    borderBottomWidth: 2,
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
  footerTextContainer: {
    marginTop: '10%',
    color: '#C0C0C0',
    justifyContent: 'center',
    alignItems: 'center',
    lineHeight: 50,
  },
  footerText: {
    fontSize: 12,
  },
});

export default LoginScreen;
