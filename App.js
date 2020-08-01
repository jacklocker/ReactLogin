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

function WelcomePageScreen({navigation}) {
  return (
    <View>
      <WelcomePage name={navigation} />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingHome">
        <Stack.Screen name="LandingHome" component={LandingHomeScreen} options={{ title: '', headerShown: false }} />
        <Stack.Screen name="LoginScreenPage" component={LoginPageScreen} options={{ title: 'Login'}} />
        <Stack.Screen
          name="RegisterScreenPage"
          component={RegisterPageScreen} options={{ title: 'Register'}}
        />
        <Stack.Screen name="WelcomeScreenPage" component={WelcomePageScreen} options={{ title: 'Welcome'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
