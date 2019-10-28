import React, {useState} from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {View, Dimensions, StyleSheet, Text} from 'react-native';
import Server from '../backend/Server';

const FirstRoute = () => (
  <View style={[styles.scene, {backgroundColor: '#ecf0f1'}]}>
    <Text>hellodddd</Text>
    <Server />
  </View>
);

const SecondRoute = () => (
  <View style={[styles.scene, {backgroundColor: '#ecf0f1'}]}></View>
);

const TabViewMaterial = () => {
  const [state, setState] = useState({
    index: 0,
    routes: [
      {key: 'Faculty', title: 'Faculty'},
      {key: 'Staff', title: 'Staff'},
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
          Faculty: FirstRoute,
          Staff: SecondRoute,
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
export default TabViewMaterial;
