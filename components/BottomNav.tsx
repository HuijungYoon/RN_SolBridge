import * as React from 'react';
import {BottomNavigation, Modal, Portal, Provider} from 'react-native-paper';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Picker,
} from 'react-native';
import DialogMaterial from './DialogMaterial';

const NoticeRoute = () => <Text>Notice</Text>;

const FacultyRoute = () => <Text>Faculty</Text>;

const IntroCourseRoute = () => <Text>아무거나적어보자</Text>;

const BusTimeRoute = () => (
  <>
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Next Bus : {test} </Text>
    </View>
    <DialogMaterial />
  </>
);
const test = '10:45';

const styles = StyleSheet.create({
  bustime: {
    position: 'absolute',
    left: '30%',
    top: '50%',
    right: 0,
    bottom: 0,
    alignItems: 'center',
  },
});
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#0984e3',
    accent: '#f1c40f',
  },
};
export default class BottomNav extends React.Component {
  state = {
    index: 0,
    routes: [
      {key: 'Notice', title: 'Notice', icon: 'star'},
      {key: 'Faculty', title: 'Faculty', icon: 'camera'},
      {key: 'IntroCourse', title: 'IntroCourse', icon: 'history'},
      {key: 'BusTime', title: 'BusTime', icon: 'history'},
    ],
  };

  _handleIndexChange = index => this.setState({index});

  _renderScene = BottomNavigation.SceneMap({
    Notice: NoticeRoute,
    Faculty: FacultyRoute,
    IntroCourse: IntroCourseRoute,
    BusTime: BusTimeRoute,
  });

  render() {
    return (
      <>
        <BottomNavigation
          theme={theme}
          navigationState={this.state}
          onIndexChange={this._handleIndexChange}
          renderScene={this._renderScene}
        />
      </>
    );
  }
}
