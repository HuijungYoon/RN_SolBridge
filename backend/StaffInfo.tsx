import React, {useState} from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  Text,
  Button,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import {DataTable, Avatar} from 'react-native-paper';
import SQLite from 'react-native-sqlite-storage';
import staffData from '../data/staff.json';
import {ListItem, SearchBar, Overlay} from 'react-native-elements';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
//import console = require('console');
//import console = require('console');

function StaffInfo({navigation}) {
  // console.log(JSON.stringify(staffData.memberData.staff[0].image));
  //console.log(staffData.memberData.staff[0].image);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const staff = staffData.memberData.staff.map((staff, i) => (
    <ListItem
      key={i}
      leftAvatar={{source: {uri: staff.image}}}
      title={staff.name}
      subtitle={staff.role}
      bottomDivider
      chevron
      onPress={() => {
        console.log(staff.name);
      }}
    />
  ));

  const update = e => {
    //  e.preventDefault();
    setIsLoading(true);
    //console.log(e.target);
    setSearch(e);
  };
  const _cancel = () => {
    setIsLoading(false);
    //setSearch(search.searchText :);
  };

  return (
    <>
      <SearchBar
        placeholder="search"
        // onChangeText={() => setSearch('')}
        onChangeText={text => setSearch(text)}
        value={search}
        showLoading={isLoading}
        onClear={() => update}
        onCancel={_cancel}
      />
      <ScrollView>{staff}</ScrollView>
    </>
  );
}

export default StaffInfo;
