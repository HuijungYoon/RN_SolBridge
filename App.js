/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState, useEffect} from 'react';
import {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import AppBar from './components/AppBar';
import BottomNav from './components/BottomNav';
import ModalMaterial from './components/DialogMaterial';

import SplashScreen from 'react-native-splash-screen';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Provider} from 'mobx-react';
import {ModalScreen} from './backend/StaffInfo';
import {FacultyModal} from './backend/FacultyInfo';
//import Store from './mobx/listStore';
class LogoTitle extends React.Component {
  render() {
    return (
      <>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: 'bold',
              color: '#ffffff',
            }}>
            SOLBRIDGE
          </Text>
          <Text style={{color: '#ffffff'}}>InfoSystem</Text>
        </View>
      </>
    );
  }
}

function HomeScreen() {
  useEffect(() => {
    SplashScreen.hide();
  });
  return (
    <>
      <StatusBar backgroundColor="#0984e3" />
      <BottomNav />
    </>
  );
}

const MainStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerTitle: () => <LogoTitle />,
      },
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#0984e3',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainStack,
      //헤더 없애기
      navigationOptions: ({navigation}) => ({header: null}),
    },
    MyModal: {
      screen: ModalScreen,
      //headerShown: true,
      navigationOptions: {
        title: 'Staff',
        headerBackTitle: null,
      },
    },
    FacultyModal: {
      screen: FacultyModal,
      navigationOptions: {
        title: 'Faculty',
        headerBackTitle: null,
      },
    },
  },
  {
    mode: 'modal',
    //headerMode: 'none',
  },
);
const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
