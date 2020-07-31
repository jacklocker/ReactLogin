import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import LoginScreen from './screen/LoginScreen';
import RegistrationScreen from './screen/RegistrationScreen';
import LandingPage from './screen/LandingPage';
import WelcomePage from './screen/WelcomePage';
export default function App() {
  const [screenToDisplay, setScreenToDisplay] = useState();
  const [whichButton, setWhichButton] = useState('');
  const [valueEmail, setValueEmail] = useState('');

  const buttonClickEvent = (id, valueEntered) => {
    setWhichButton(id);
    setValueEmail(valueEntered);
  };

  let content = <LandingPage buttonClickEvents={buttonClickEvent} />;
  if (whichButton === 'Login') {
    content = <LoginScreen buttonClickEvents={buttonClickEvent} />;
  } else if (whichButton === 'register') {
    content = <RegistrationScreen buttonClickEvents={buttonClickEvent} />;
  } else if (whichButton === 'welcome') {
    content = (
      <WelcomePage
        buttonClickEvents={buttonClickEvent}
        todo={valueEmail}
        buttonClickEvents={buttonClickEvent}
      />
    );
  } else {
    content = <LandingPage buttonClickEvents={buttonClickEvent} />;
  }
  return <View>{content}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
