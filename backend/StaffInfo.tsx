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
  Linking,
  Platform,
} from 'react-native';
import {DataTable, Avatar, Divider} from 'react-native-paper';
import staffData from '../data/staff.json';
import {ListItem, SearchBar, Icon} from 'react-native-elements';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {withNavigation} from 'react-navigation';
import {url} from 'inspector';
//import console = require('console');
//import console = require('console');
function StaffInfo({navigation}) {
  // console.log(JSON.stringify(staffData.memberData.staff[0].image));
  //console.log(staffData.memberData.staff[0].image);

  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [info, setInfo] = useState('no');

  const staff = staffData.memberData.staff.map((staff, i) => (
    <>
      <ListItem
        key={i}
        leftAvatar={{source: {uri: staff.image}}}
        title={staff.name}
        subtitle={staff.role}
        bottomDivider
        chevron
        onPress={() =>
          navigation.navigate('MyModal', {
            name: staff.name,
            role: staff.role,
            image: staff.image,
            email: staff.email,
            phone: staff.phone,
            task: staff.task,
          })
        }
      />
    </>
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
      <ScrollView style={styles.scrollView}>{staff}</ScrollView>
    </>
  );
}

export class ModalScreen extends React.Component {
  render() {
    const {navigation} = this.props;
    // const image = JSON.stringify(navigation.getParam('image'));
    const image = navigation.getParam('image');
    const phoneNumber = navigation.getParam('phone');
    //console.log(image);
    const dialCall = number => {
      let phoneNumber = '';
      if (Platform.OS === 'android') {
        phoneNumber = `tel:${number}`;
      } else {
        phoneNumber = `telprompt:${number}`;
      }
      Linking.openURL(phoneNumber);
    };

    return (
      <>
        <View style={{flex: 5, alignItems: 'center', justifyContent: 'center'}}>
          <Avatar.Image
            size={140}
            source={{
              uri: image,
            }}
          />
          <Text style={{fontSize: 30, marginTop: 10}}>
            {navigation.getParam('name')}
          </Text>
          <Text style={{fontSize: 18, marginTop: 10}}>
            {navigation.getParam('role')}
          </Text>
        </View>
        <View>
          <Divider />
        </View>
        <View
          style={{
            flex: 2,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon name="checklist" type="octicon" />
            <Text style={{marginLeft: 5}}>Field</Text>
          </View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '500',
              marginTop: 20,
              textAlign: 'center',
            }}>
            {' '}
            {navigation.getParam('task')}
          </Text>
        </View>
        <View>
          <Divider />
        </View>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon name="call" />
            <Text
              onPress={() => {
                Linking.openURL(`tel:${phoneNumber}`);
              }}>
              {' '}
              {navigation.getParam('phone')}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon name="mail" />
            <Text> {navigation.getParam('email')}</Text>
            {/* <Icon name="mail" />
          <Text> {navigation.getParam('email')}</Text> */}
          </View>
        </View>
        <View style={styles.container}>
          <Button
            onPress={() => this.props.navigation.goBack()}
            title="Back"
            style={{marginBottom: 100}}
          />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    //backgroundColor: 'pink',
    //marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 25,
  },
  MdoalImage: {
    flex: 3,
    alignSelf: 'center',
  },
  name: {
    flex: 1,
    textAlign: 'center',
  },
});

export default withNavigation(StaffInfo);
