import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Text,
  ScrollView
} from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import SwiperFlatList from 'react-native-swiper-flatlist';

const LoginScreen = (props) => {

  return (
    <SafeAreaView>
      <ScrollView>
      <View >
    

      <View style= {styles.forPager}>
      
      <SwiperFlatList
          //autoplay
          //autoplayDelay={2}
          //autoplayLoop
          index={0}
          showPagination
        >
          <View style={styles.one}>
            <Image
            style={styles.tinyLogo}
        source={require('../images/aks-it-services-squarelogo-1525843901819.png')}
             />
          </View>
          <View style={styles.two}>
          <Image
            style={styles.tinyLogo}
        source={require('../images/1200px-SNice.svg.png')}
             />
          </View>
          <View style={styles.three}>
          <Image
            style={styles.tinyLogo}
        source={require('../images/hqdefault.jpg')}
             />
          </View>
        </SwiperFlatList>
      </View>







      </View>
      <View style={styles.inputContainerView}>
        <View style={styles.signupView}>
          <TouchableOpacity
            style={styles.signupButton}
            onPress={() => props.name.navigate('LoginScreenPage')}>
            <Text style={styles.textStyle}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signupView}>
          <TouchableOpacity
            style={styles.registerButton}
            onPress={() => props.name.navigate('RegisterScreenPage')}>
            <Text style={styles.textStyle}>REGISTER</Text>
          </TouchableOpacity>
        </View>
        
      </View>

      
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
 
  tinyLogo: {
    width: 150,
    height: 150,
  },
  inputContainerView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerButton: {
    height: 50,
    backgroundColor: '#919191',
    borderRadius: 50,
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
  forPager: {
    marginTop: '25%',
    width: 150,
    height: 150,
    backgroundColor: 'green',
    //marginBottom: 100,
    marginLeft: 100
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewPager: {
    flex: 1,
  },
  one: {
    width: 150,
    height: 150,
    backgroundColor: 'red'
  },
  two: {
    width: 150,
    height: 150,
  backgroundColor: 'pink'

  },
  three: {
    width: 150,
    height: 150,
  backgroundColor: 'yellow'

  },
  child: {
    height: '100%',
    width: '100%',
    justifyContent: 'center'
  },
  text: {
    fontSize: 20,
    textAlign: 'center'
  }
});

export default LoginScreen;
