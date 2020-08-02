import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  ScrollView
} from 'react-native';

const WelcomePage = (props) => {
  return (
    <ScrollView>
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
        <View>
          <View style={styles.welcomeText}>
            <Text style={styles.innerText}>Welcome</Text>
          </View>

          <View style={styles.logoutText}>
            <Text
              onPress={() => props.name.navigate('LandingHome')}
              style={{color: 'blue'}}>
              Logout
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
    marginTop: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10%',
  },
  tinyLogo: {
    width: 160,
    height: 160,
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
