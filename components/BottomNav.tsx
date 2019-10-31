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
import TabViewMaterial from './TabViewMaterial';
import TableViewFaculty from './TableViewFaculty';
import TableIntroCourse from './TableIntroCourse';
const NoticeRoute = () => <Text>Notice</Text>;

const FacultyRoute = () => (
  <>
    <TableViewFaculty />
  </>
);

const IntroCourseRoute = () => (
  <>
    <TableIntroCourse />
  </>
);

const BusTimeRoute = () => (
  <>
    <TabViewMaterial />
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
      {key: 'Faculty', title: 'Faculty', icon: 'person'},
      {key: 'IntroCourse', title: 'IntroCourse', icon: 'book'},
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
