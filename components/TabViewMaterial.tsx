import React, {useState} from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {View, Dimensions, StyleSheet} from 'react-native';
import DepartureTable from './DepartureTable';
import ArriveTable from './ArriveTable';

const FirstRoute = () => (
  <View style={[styles.scene, {backgroundColor: '#ecf0f1'}]}>
    <DepartureTable />
  </View>
);

const SecondRoute = () => (
  <View style={[styles.scene, {backgroundColor: '#ecf0f1'}]}>
    <ArriveTable />
  </View>
);

const TabViewMaterial = () => {
  const [state, setState] = useState({
    index: 0,
    routes: [
      {key: 'EastCampus', title: 'East Campus'},
      {key: 'SolBridge', title: 'SolBridge'},
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
          EastCampus: FirstRoute,
          SolBridge: SecondRoute,
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
