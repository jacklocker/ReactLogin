import React from "react";
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
  TouchableOpacity
} from "react-native";

//import {Header, Colors} from 'react-native/Libraries/NewAppScreen';
//import { SocialIcon, Avatar } from "react-native-elements";

const RegistrationScreen = (props) => {
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
              <TextInput style={styles.inputContainer} placeholder="NAME" />
              <TextInput style={styles.inputContainer} placeholder="EMAIL" />
              <TextInput
                style={styles.inputContainer}
                placeholder="PHONE NUMBER"
              />
              <TextInput style={styles.inputContainer} placeholder="PASSWORD" />
              <TextInput
                style={styles.inputContainer}
                placeholder="CONFIRM PASSWORD"
              />
              
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
    alignItems: 'center'
  },
  tinyLogo: {
    width: 150,
    height: 150,
  },
  body: {
    backgroundColor: "#ffffff",
  },
  scrollView: {
    backgroundColor: "#ffffff",
  },
  inputContainerView: {
    justifyContent: "center",
    alignItems: "center",
  },
  inputIconSpace: {
    flexDirection: "row",
  },
  inputContainer: {
    width: "70%",
    marginTop: 10,
    borderRadius: 10,
    borderBottomWidth: 1,
    borderColor: "#c1c1c1",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  registerButton:{
    height: 50,
    backgroundColor: '#919191',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
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
    width: "65%",
    marginTop: 30,
  },
  footerText: {
    marginTop: "10%",
    color: "#C0C0C0",
    fontSize: 18,
    textAlign: "justify",
    justifyContent: "center",
    alignItems: "center",
    lineHeight: 50,
  },
});

export default RegistrationScreen;
