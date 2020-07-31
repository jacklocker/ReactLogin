import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
} from 'react-native';

//import {SocialIcon, Avatar, Button } from 'react-native-elements';

const WelcomePage = (props) => {
  return (
    <View>
      <SafeAreaView>
        <View style={styles.iconHeader}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri:
                'https://i.pinimg.com/originals/41/36/16/41361625cc44df07f81a620eac766468.png',
            }}
          />
        </View>
        <View style={styles.body}>
          <View style={styles.welcomeText}>
            <Text style={styles.innerText}>Welcome</Text>
          </View>

          <View style={styles.logoutText}>
            <Text
              onPress={() => props.buttonClickEvents('')}
              style={{color: 'blue'}}>
              Logout
            </Text>
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
  logoutText: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '30%',
  },
  welcomeText: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerText: {
    fontSize: 50,
  },
});

export default WelcomePage;
