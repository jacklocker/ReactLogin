import React from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LandingPage from './screen/LandingPage';
import LoginScreen from './screen/LoginScreen';
import RegistrationScreen from './screen/RegistrationScreen';
import WelcomePage from './screen/WelcomePage';

function LandingHomeScreen({navigation}) {
  return (
    <View>
      <LandingPage name={navigation} />
    </View>
  );
}

function LoginPageScreen({navigation}) {
  return (
    <View>
      <LoginScreen name={navigation} />
    </View>
  );
}

function RegisterPageScreen({navigation}) {
  return (
    <View>
      <RegistrationScreen name={navigation} />
    </View>
  );
}

function WelcomePageScreen() {
  return (
    <View>
      <WelcomePage />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingHome">
        <Stack.Screen name="LandingHome" component={LandingHomeScreen} />
        <Stack.Screen name="LoginScreenPage" component={LoginPageScreen} />
        <Stack.Screen
          name="RegisterScreenPage"
          component={RegisterPageScreen}
        />
        <Stack.Screen name="WelcomeScreenPage" component={WelcomePageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
