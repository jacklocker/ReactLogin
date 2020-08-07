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
import axios from 'axios';
import ImagePicker from 'react-native-image-picker';
import {decode as atob, encode as btoa} from 'base-64';
import RNFetchBlob from 'rn-fetch-blob';
import DatePicker from 'react-native-datepicker';

const RegistrationScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState('');

  const [selectedValue, setSelectedValue] = useState('Select Handler');

  const url =
    'http://clients.aksinteractive.com/a4a-new/member-apis/Users/profileUpdate';

  const uid = '124';
  const fnam = 'ffhfhfgjgjhgjhgjhgfjh';
  const lnam = 'Yatin';
  const city = 135;
  const address = 'test';
  const dob = '2006-08-16';
  const doa = '2013-08-13';
  const snam = 'xyz';

  const [formData, setFormDate] = useState({
    fnam: '',
    lnam: '',
    adres: '',
    isValidfName: true,
    isValidlName: true,
    isValidAddress: true,
    isValidEmail: true,
    isValidPhoneNumber: true,
    isValidPassword: true,
    isValidConfirmPassword: true,
    isValidConfirmButton: true,
  });

  const [defaultDateDob, setDefaultDateforDob] = useState('2016-05-15');

  const [resourcePath, setResourcePath] = useState({});

  const selectFile = () => {
    var options = {
      title: 'Select Image',
      //noData: true,
      // customButtons: [
      //   {
      //     name: 'customOptionKey',
      //     title: 'Choose file from Custom Option'
      //   },
      // ]
      // ,
      quality: 1.0,
      // maxWidth: 500,
      //maxHeight: 500,
      // storageOptions: {
      //   skipBackup: false,
      //   path: 'images',
      //   cameraRoll: true,
      //   waitUntilSaved: true
      // },
    };

    ImagePicker.showImagePicker(options, (res) => {
      console.log('Sarv Response = ', res);

      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      }
      else {
        let source = res;
        setResourcePath(source);
      }
    });
  };

  const textInputHandler = (inputText) => {
    setEnteredValue(inputText);
  };
  const checkFormComplete = () => {
    if (
      !formData.isValidfName ||
      !formData.isValidfName ||
      !formData.isValidAddress ||
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

  var photo = {
    uri: resourcePath.uri,
    type: 'image/jpeg',
    name: 'images.jpeg',
  };
  const createPostMethoc = () => {
    RNFetchBlob.fetch(
      'POST',
      'http://clients.aksinteractive.com/a4a-new/member-apis/Users/profileUpdate',
      {
        // Authorization : "Bearer access-token",
        // otherHeader : "foo",
        'Content-Type': 'multipart/form-data',
      },
      [
        // element with property `filename` will be transformed into `file` in form data
        // { name : 'userImg', filename : resourcePath.data.filename, data: resourcePath.data},
        // custom content type
        {
          name: 'userImg',
          filename: resourcePath.fileName,
          type: resourcePath.type,
          data: resourcePath.data,
        },
        // part file from storage
        // { name : 'userImg', filename : resourcePath.data.filename, type:'image/jpeg', data: RNFetchBlob.wrap(resourcePath.data)},
        // elements without property `filename` will be sent as plain text
        {name: 'userId', data: '124'},
        {name: 'firstName', data: formData.fnam},
        {name: 'lastName', data: formData.lnam},
        {name: 'city', data: '135'},
        {name: 'address', data: formData.adres},
        {name: 'dateOfBirth', data: defaultDateDob},
        {name: 'dateOfAnniversary', data: '2013-08-13'},
        {name: 'spouseName', data: 'xyz'},
      ],
    )
      .then((resp) => {
        alert(JSON.stringify(resp));
      })
      .catch((err) => {
        console.error('error uploading images: ', err.message);
      });
  };

  const goToNextPage = () => {
    console.log(JSON.stringify(resourcePath));
    createPostMethoc();
    props.name.navigate('WelcomeScreenPage');
  };
  const checkfName = (e) => {
    var letters = /^[A-Za-z]+$/;

    if (e.trim().length === 0 || !e.match(letters)) {
      setFormDate({
        ...formData,
        isValidfName: false,
      });
      return;
    } else {
      setFormDate({
        ...formData,
        isValidfName: true,
        fnam: e,
      });
    }
  };
  const checklName = (e) => {
    var letters = /^[A-Za-z]+$/;

    if (e.trim().length === 0 || !e.match(letters)) {
      setFormDate({
        ...formData,
        isValidlName: false,
      });
      return;
    } else {
      setFormDate({
        ...formData,
        isValidlName: true,
        lnam: e,
      });
    }
  };

  const checkAddress = (e) => {
    if (e.trim().length === 0) {
      setFormDate({
        ...formData,
        isValidAddress: false,
      });
      return;
    } else {
      setFormDate({
        ...formData,
        isValidAddress: true,
        adres: e,
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
                placeholder="FIRST NAME"
                onEndEditing={(e) => checkfName(e.nativeEvent.text)}
              />
              {formData.isValidfName ? null : (
                <Text style={styles.errorMessage}>Invalid User Name</Text>
              )}
              <TextInput
                onChangeText={textInputHandler}
                style={styles.inputContainer}
                placeholder="LAST NAME"
                onEndEditing={(e) => checklName(e.nativeEvent.text)}
              />
              {formData.isValidlName ? null : (
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

              <TextInput
                style={styles.inputContainer}
                placeholder="PHONE NUMBER"
                onEndEditing={(e) => checkPhone(e.nativeEvent.text)}
              />
              {formData.isValidPhoneNumber ? null : (
                <Text style={styles.errorMessage}>Invalid Phone Number</Text>
              )}

              <TextInput
                onChangeText={textInputHandler}
                style={styles.inputContainer}
                placeholder="ADDRESS"
                onEndEditing={(e) => checkAddress(e.nativeEvent.text)}
              />
              {formData.isValidAddress ? null : (
                <Text style={styles.errorMessage}>Invalid Address</Text>
              )}

              <Text style={styles.dobTextStyle}>Select Date of Birth</Text>

              <DatePicker
                style={{width: 200}}
                date={defaultDateDob}
                mode="date"
                placeholder="select date"
                format="YYYY-MM-DD"
                minDate="1980-05-01"
                maxDate="2020-06-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0,
                  },
                  dateInput: {
                    marginLeft: 36,
                  },
                }}
                onDateChange={(date) => {
                  setDefaultDateforDob(date);
                }}
              />

              <View>
                <View style={styles.imagePickercontainer}>
                  <TouchableOpacity
                    onPress={selectFile}
                    style={styles.imagePickerbutton}>
                    <Text style={styles.imagePickerbuttonText}>
                      Select Image
                    </Text>
                  </TouchableOpacity>
                  <Image
                    source={{
                      uri: 'data:image/jpeg;base64,' + resourcePath.data,
                    }}
                    style={{width: 80, height: 80, marginBottom: 10}}
                  />
                </View>
              </View>

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
    marginTop: '2%',
    width: '70%',
    marginBottom: '5%',
  },
  imagePickerbutton: {
    width: 100,
    height: 38,
    backgroundColor: '#6680b7',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginTop: 12,
  },
  imagePickerbuttonText: {
    textAlign: 'center',
    fontSize: 15,
    color: '#fff',
  },
  imagePickercontainer: {
    //padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dobTextStyle: {
    marginTop: 10,
    fontSize: 18,
  },
});

export default RegistrationScreen;
