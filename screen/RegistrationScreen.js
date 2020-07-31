import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TextInput,
  Button,
  Text,
  Image,
  TouchableOpacity,
  Picker,
} from 'react-native';

//import {Header, Colors} from 'react-native/Libraries/NewAppScreen';
//import { SocialIcon, Avatar } from "react-native-elements";

const RegistrationScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState('');

  const [selectedValue, setSelectedValue] = useState('Select Handler');

  const [formData, setFormDate] = useState({
    isValidName: true,
    isValidEmail: true,
    isValidPhoneNumber: true,
    isValidPassword: true,
    isValidConfirmPassword: true,
  });

  const textInputHandler = (inputText) => {
    setEnteredValue(inputText);
  };
  const checkName = (e) => {
    var letters = /^[A-Za-z]+$/;

    if (e.trim().length === 0 || !e.match(letters)) {
      setFormDate({
        ...formData,
        isValidName: false,
      });
      return;
    } else {
      setFormDate({
        ...formData,
        isValidName: true,
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
  const checkPhone = (e) => {
    var phoneno = /^\d{10}$/;
    if (e.trim().length === 0 || !e.match(phoneno)) {
      setFormDate({
        ...formData,
        isValidPhoneNumber: false,
      });
      return;
    } else {
      setFormDate({
        ...formData,
        isValidPhoneNumber: true,
      });
    }
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
                placeholder="NAME"
                onEndEditing={(e) => checkName(e.nativeEvent.text)}
              />
              {formData.isValidName ? null : (
                <Text style={styles.errorMessage}>Invalid User Name</Text>
              )}
              <TextInput
                style={styles.inputContainer}
                placeholder="EMAIL"
                onEndEditing={(e) => checkEmail(e.nativeEvent.text)}
              />
              {formData.isValidPhoneNumber ? null : (
                <Text style={styles.errorMessage}>Invalid Email</Text>
              )}
              <TextInput
                style={styles.inputContainer}
                placeholder="PHONE NUMBER"
                onEndEditing={(e) => checkPhone(e.nativeEvent.text)}
              />
              {formData.isValidName ? null : (
                <Text style={styles.errorMessage}>Invalid Phone Number</Text>
              )}
              <TextInput
                style={styles.inputContainer}
                placeholder="PASSWORD"
                onEndEditing={(e) => checkPassword(e.nativeEvent.text)}
              />
              {formData.isValidPassword ? null : (
                <Text style={styles.errorMessage}>Invalid Password</Text>
              )}
              <TextInput
                style={styles.inputContainer}
                placeholder="CONFIRM PASSWORD"
              />
              {formData.isValidConfirmPassword ? null : (
                <Text style={styles.errorMessage}>Password Do Not Match</Text>
              )}

              <View style={styles.signupView}>
                <TouchableOpacity
                  style={styles.registerButton}
                  onPress={() => props.buttonClickEvents('welcome')}>
                  <Text style={styles.textStyle}>REGISTER</Text>
                </TouchableOpacity>
              </View>
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
  pickercontainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  registerButton: {
    height: 50,
    backgroundColor: '#919191',
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

export default RegistrationScreen;
