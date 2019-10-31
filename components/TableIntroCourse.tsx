import React, {useState} from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {View, Dimensions, StyleSheet, Text} from 'react-native';
import CourseInfo from '../backend/CourseInfo';

const FirstRoute = () => (
  <View style={[styles.scene, {backgroundColor: '#ecf0f1'}]}>
    <CourseInfo />
  </View>
);

const SecondRoute = () => (
  <View style={[styles.scene, {backgroundColor: '#ecf0f1'}]}></View>
);
const ThridRoute = () => (
  <View style={[styles.scene, {backgroundColor: '#ecf0f1'}]}></View>
);
const FourthRoute = () => (
  <View style={[styles.scene, {backgroundColor: '#ecf0f1'}]}></View>
);

const TableIntroCourse = () => {
  const [state, setState] = useState({
    index: 0,
    routes: [
      {key: 'Core', title: 'Core'},
      {key: 'Specialization', title: 'Special'},
      {key: 'Elective', title: 'Elective'},
      {key: 'ForeignLanguage', title: 'Foreign'},
    ],
  });

  return (
    <>
      <TabView
        renderTabBar={props => (
          <TabBar
            {...props}
            indicatorStyle={{backgroundColor: '#f1c40f'}}
            style={{backgroundColor: '#0984e3'}}
          />
        )}
        navigationState={state}
        renderScene={SceneMap({
          Core: FirstRoute,
          Specialization: SecondRoute,
          Elective: ThridRoute,
          ForeignLanguage: FourthRoute,
        })}
        onIndexChange={index => setState({...state, index})}
        initialLayout={{width: Dimensions.get('window').width}}
      />
    </>
  );
};
const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});
export default TableIntroCourse;
