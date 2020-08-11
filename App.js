import React, {useEffect} from 'react';
import { View, Button, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LandingPage from './screen/LandingPage';
import LoginScreen from './screen/LoginScreen';
import RegistrationScreen from './screen/RegistrationScreen';
import WelcomePage from './screen/WelcomePage';
import SplashScreen from 'react-native-splash-screen';
import ApiScreen from './screen/ApiScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FooterPart from './components/FooterPart';
function LandingHomeScreen({navigation}) {
  return (
    <View>
      <LandingPage name={navigation} />
    </View>
  );
}


const MyTheme = {
  dark: true,
  colors: {
    primary: 'blue',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

function LoginPageScreen({navigation}) {
  return (
    <View>
      <LoginScreen name={navigation} />
      <FooterPart name={navigation} />
    </View>
  );
}

function RegisterPageScreen({navigation}) {
  return (
    <View>
      <RegistrationScreen name={navigation} />
      <FooterPart name={navigation} />
    </View>
  );
}

// function footerPartScreen({navigation}) {
//   return (
//     <View>
//       <FooterPart name={navigation} />
//     </View>
//   );
// }

{/* <FooterPart name={navigation} /> */}

function WelcomePageScreen({navigation}) {
  return (
    <View>
      <WelcomePage name={navigation} />
    </View>
  );
}
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function App() {

  useEffect(() => {
SplashScreen.hide();

  }, [] );


  return (
    
    <NavigationContainer tapToClose theme={MyTheme}>
      <Drawer.Navigator initialRouteName="LandingHome">
        <Drawer.Screen name="LandingHome" component={LandingHomeScreen} options={{ title: 'Home', headerShown: false }} />
        <Drawer.Screen name="LoginScreenPage" component={LoginPageScreen} options={{ title: 'Login'}}  />
        <Drawer.Screen
          name="RegisterScreenPage"
          component={RegisterPageScreen} options={{ title: 'Register'}}
        />
        <Drawer.Screen name="WelcomeScreenPage" component={WelcomePageScreen} options={{ title: 'Welcome'}} />
        {/* <Drawer.Screen name="ApiScreenPage" component={footerPartScreen} options={{ title: 'xcvx'}} /> */}
       </Drawer.Navigator>
       
    </NavigationContainer>
   
    
    
  );
}
const styles = StyleSheet.create({
})

export default App;
