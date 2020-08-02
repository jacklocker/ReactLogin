import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  Text,
  Image,
  TouchableOpacity,
  Picker,
} from 'react-native';

const RegistrationScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState('');

  const [selectedValue, setSelectedValue] = useState('Select Handler');

  const [formData, setFormDate] = useState({
    isValidName: true,
    isValidEmail: true,
    isValidPhoneNumber: true,
    isValidPassword: true,
    isValidConfirmPassword: true,
    isValidConfirmButton: true,
  });

  const textInputHandler = (inputText) => {
    setEnteredValue(inputText);
  };
  const checkFormComplete = () => {
    if (
      !formData.isValidName ||
      !formData.isValidEmail ||
      !formData.isValidPhoneNumber ||
      !formData.isValidPassword ||
      !formData.isValidConfirmButton
    ) {
      setFormDate({
        ...formData,
        isValidConfirmButton: false,
      });
      return;
    } else {
      setFormDate({
        ...formData,
        isValidConfirmButton: true,
      });

      goToNextPage();
    }
  };
  const goToNextPage = () => {
    props.name.navigate('WelcomeScreenPage');
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
  const checkConfirePassword = (e) => {
    var paswd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    if (e.trim().length === 0 || !e.match(paswd)) {
      setFormDate({
        ...formData,
        isValidConfirmPassword: false,
      });
      return;
    } else {
      setFormDate({
        ...formData,
        isValidConfirmPassword: true,
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

          <View>
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
              {formData.isValidEmail ? null : (
                <Text style={styles.errorMessage}>Invalid Email</Text>
              )}
              <TextInput
                style={styles.inputContainer}
                placeholder="PHONE NUMBER"
                onEndEditing={(e) => checkPhone(e.nativeEvent.text)}
              />
              {formData.isValidPhoneNumber ? null : (
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
                onEndEditing={(e) => checkConfirePassword(e.nativeEvent.text)}
              />
              {formData.isValidConfirmPassword ? null : (
                <Text style={styles.errorMessage}>Password Do Not Match</Text>
              )}

              <View style={styles.signupView}>
                <TouchableOpacity
                  style={styles.registerButton}
                  onPress={checkFormComplete}>
                  {formData.isValidConfirmButton
                    ? null
                    : alert('Fill Complete Form')}
                  <Text style={styles.textStyle}>REGISTER</Text>
                </TouchableOpacity>
              </View>
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
  inputContainerView: {
    marginTop: '2%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '75%',
    marginTop: 10,
    borderRadius: 10,
    borderBottomWidth: 1,
    borderColor: '#c1c1c1',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pickercontainer: {
    alignItems: 'center',
  },
  registerButton: {
    height: 50,
    backgroundColor: '#86848c',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorMessage: {
    color: 'red',
  },
  textStyle: {
    fontSize: 20,
    color: '#ffffff',
    textAlign: 'center',
  },
  signupView: {
    marginTop: '5%',
    width: '70%',
    marginBottom: '5%',
  },
});

export default RegistrationScreen;
