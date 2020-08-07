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
  Button,
} from 'react-native';
import axios from 'axios';
import ImagePicker from 'react-native-image-picker';
import {decode as atob, encode as btoa} from 'base-64';
import ReactFileReader from 'react-file-reader';
import RNFetchBlob from 'rn-fetch-blob';
import DatePicker from 'react-native-datepicker';
import ValidationComponent from 'react-native-form-validator';

const RegistrationScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState('');

  const [selectedValue, setSelectedValue] = useState('Select Handler');

  const url = 'http://clients.aksinteractive.com/a4a-new/member-apis/Users/profileUpdate';


  const uid = "124";
  const fnam = "ffhfhfgjgjhgjhgjhgfjh";
  const lnam = "Yatin";
  const city = 135;
  const address = "test";
  const dob = "2006-08-16";
  const doa = "2013-08-13";
  const snam =  "xyz";




  const [formData, setFormDate] = useState({
    fnam : '',
    isValidName: true,
    isValidEmail: true,
    isValidPhoneNumber: true,
    isValidPassword: true,
    isValidConfirmPassword: true,
    isValidConfirmButton: true,
  });



const [resourcePath, setResourcePath] = useState({});



 const  selectFile = () => {
    var options = {
      title: 'Select Image',
      //noData: true,
      // customButtons: [
      //   { 
      //     name: 'customOptionKey', 
      //     title: 'Choose file from Custom Option' 
      //   },
      // ]
      //,
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

    ImagePicker.launchImageLibrary(options, res => {
      console.log('Sarv Response = ', res);

      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
       } 
      //else if (res.customButton) {
      //   console.log('User tapped custom button: ', res.customButton);
      //   alert(res.customButton);
      // } 
      else {
        let source = res;
        //console.log(JSON.stringify(res));
        //console.log('/n/n/n sarv log /n/n' + base64ToByteArray(res.data));
        setResourcePath(source);
        //const abcd = base64ToByteArray(res.data);
        //console.log(Array.isArray('/n/n/n sarv log /n/n' +abcd));
        //setResourcePath(abcd)
        //console.log(base64ToByteArray(res.data));
       //console.log( JSON.stringify(resourcePath));
      }

      
    });
    //console.log(base64ToByteArray(resourcePath.data));
  };



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



  var photo = {
    uri: resourcePath.uri,
    type: 'image/jpeg',
    name: 'images.jpeg',
};



const base64ToByteArrays = (b64Data) => {
  //console.log(b64Data);
const byteCharacters = atob('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');
 //console.log(typeof (byteCharacters));
const sliceSize=512;
 const byteArrays = [];

 for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);

   const byteNumbers = new Array(slice.length);
   for (let i = 0; i < slice.length; i++) {
     byteNumbers[i] = slice.charCodeAt(i);
   }

   const byteArray = new Uint8Array(byteNumbers);
   byteArrays.push(byteArray);
   //console.log(byteArray)
   return byteArrays;
  }

};

// const base64ToByteArray = (base64String) => {
//   try {            
//       let sliceSize = 512;
//       let byteCharacters = atob(base64String);
//       let bytesLength = byteCharacters.length;
//       let slicesCount = Math.ceil(bytesLength / sliceSize);
//       let byteArrays = new Array(slicesCount);

//       for (let sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
//           let begin = sliceIndex * sliceSize;
//           let end = Math.min(begin + sliceSize, bytesLength);

//           let bytes = new Array(end - begin);
//           for (let offset = begin, i = 0; offset < end; ++i, ++offset) {
//               bytes[i] = byteCharacters[offset].charCodeAt(0);
//           }
//           byteArrays[sliceIndex] = new Uint8Array(bytes);
//       }
//       //console.log('/n/n/n sarv log /n/n' + byteArrays);
//       //const a = "sdsdf"
//       //console.log(Array.isArray(byteArrays));
//       return byteArrays;
      

//   } catch (e) {
//       console.log("Couldn't convert to byte array: " + e);
//       return undefined;
//   }
// };
//const abcd = [];
  const bodyFormData = new FormData();
  bodyFormData.append('userId', "124");
  bodyFormData.append('firstName', "fnam");
  //bodyFormData.append('userImg', base64ToByteArray(resourcePath.data));
bodyFormData.append('userImg', base64ToByteArrays(resourcePath.data));
 // bodyFormData.append('userImg',abcd);
  //console.log("fthffgh" + base64ToByteArray(resourcePath.data));
  //console.log(typeof(resourcePath.data))
 // bodyFormData.append('userImg', resourcePath.uri);
  //{uri: 'data:image/jpg;base64,' + resourcePath.data, isStatic: true}
  // bodyFormData.append('userImg', {
  //   uri: resourcePath.uri,
  //   type: 'image/jpeg',
  //   name: resourcePath.fileName,
  //   data: resourcePath.data,
  // });
  bodyFormData.append('lastName', "Yatjhkjhkhjkin");
  bodyFormData.append('city', 135);
  bodyFormData.append('address', "test");
  bodyFormData.append('dateOfBirth', "2006-08-16");
  bodyFormData.append('dateOfAnniversary', "2013-08-13");
  bodyFormData.append('spouseName', "xyz");



  const createPostMethoc = () => {
    // axios.post(url, Headers={ 'Content-Type': 'multipart/form-data' },  data=bodyFormData)
    // .then((response) => {
    //     alert(JSON.stringify(response.data.userDetails.profilePic))
    // }).catch((error) =>{
    //     console.log(JSON.stringify(error));
    //     alert('sarv' + JSON.stringify(error));
    // });

    
    // fetch(`http://clients.aksinteractive.com/a4a-new/member-apis/Users/profileUpdate`, {
    //   method: "post",
    //   headers: {
    //     'Content-Type': 'multipart/form-data',
    //   },
    //   body: bodyFormData,
    // }).then(res => res.json())
    //   .then(res => {
    //     alert(JSON.stringify(res));
    //   })
    //   .catch(err => {
    //     console.error("error uploading images: ", err.message);
    //   });






    RNFetchBlob.fetch('POST', 'http://clients.aksinteractive.com/a4a-new/member-apis/Users/profileUpdate', {
     // Authorization : "Bearer access-token",
     // otherHeader : "foo",
     'Content-Type' : 'multipart/form-data',
    }, [
      // element with property `filename` will be transformed into `file` in form data
     // { name : 'userImg', filename : resourcePath.data.filename, data: resourcePath.data},
      // custom content type
      { name : 'userImg', filename : resourcePath.fileName, type:resourcePath.type, data: resourcePath.data},
      // part file from storage
     // { name : 'userImg', filename : resourcePath.data.filename, type:'image/jpeg', data: RNFetchBlob.wrap(resourcePath.data)},
      // elements without property `filename` will be sent as plain text
      { name : 'userId', data : '124'},
      { name : 'firstName', data :'Yahkjhktin' },
      { name : 'lastName', data :'Yatin' },
      { name : 'city', data :'135' },
      { name : 'address', data :'test' },
      //{ name : 'dateOfBirth', data :'2006-08-16' },
      //{ name : 'dateOfAnniversary', data :'2013-08-13' },
      //{ name : 'spouseName', data :'xyz' },
    ]).then((resp) => {
      alert(JSON.stringify(resp));
    }).catch((err) => {
      console.error("error uploading images: ", err.message);
    })



  };



  const goToNextPage = () => {
    console.log(JSON.stringify(resourcePath))
    createPostMethoc();
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
        fnam: "raj",
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
              {/* <TextInput
                onChangeText={textInputHandler}
                style={styles.inputContainer}
                placeholder="FIRST NAME"
                onEndEditing={(e) => checkName(e.nativeEvent.text)}
              />
              {formData.isValidName ? null : (
                <Text style={styles.errorMessage}>Invalid User Name</Text>
              )}
              <TextInput
                onChangeText={textInputHandler}
                style={styles.inputContainer}
                placeholder="LAST NAME"
               // onEndEditing={(e) => checkName(e.nativeEvent.text)}
              />
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
              )} */}













              <View >
        <View style={styles.imagePickercontainer}>
          <Image
            source={{
              uri: 'data:image/jpeg;base64,' + resourcePath.data,
            }}
            style={{ width: 80, height: 80, marginBottom: 10 }}
          />
         
          <TouchableOpacity onPress={selectFile} style={styles.imagePickerbutton}  >
              <Text style={styles.imagePickerbuttonText}>Select Image</Text>
          </TouchableOpacity>  
             
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
    //marginTop: '10%',
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
    width: 150,
    height: 10,
    backgroundColor: '#6680b7',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    //marginBottom:12    
  },
  imagePickerbuttonText: {
    textAlign: 'center',
    fontSize: 15,
    color: '#fff'
  },
  imagePickercontainer: {
    //padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },

});

export default RegistrationScreen;
