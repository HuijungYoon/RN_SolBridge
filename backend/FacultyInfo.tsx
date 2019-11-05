import React, {useState} from 'react';
import facultyData from '../data/faculty.json';
import {DataTable, Avatar, Divider} from 'react-native-paper';
import {ListItem, SearchBar, Icon} from 'react-native-elements';
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
import {withNavigation} from 'react-navigation';

function FacultyInfo({navigation}) {
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const faculty = facultyData.facultyData.faculty.map((faculty, i) => (
    <>
      <ListItem
        key={i}
        leftAvatar={{source: {uri: faculty.image}}}
        title={faculty.name}
        subtitle={faculty.role}
        bottomDivider
        chevron
        onPress={() =>
          navigation.navigate('FacultyModal', {
            name: faculty.name,
            role: faculty.role,
            image: faculty.image,
            email: faculty.email,
            phone: faculty.phone,
            university: faculty.university,
            teachArea: faculty.teachArea,
            room: faculty.room,
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
      <ScrollView style={styles.scrollView}>{faculty}</ScrollView>
    </>
  );
}

export class FacultyModal extends React.Component {
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

    const facultyName = navigation.getParam('name');
    const facultyRole = navigation.getParam('role');
    const facultyUniversity = navigation.getParam('university');
    const facultyRoom = navigation.getParam('room');
    const facultyTeachArea = navigation.getParam('teachArea');

    return (
      <>
        <View style={{flex: 5, alignItems: 'center', justifyContent: 'center'}}>
          <Avatar.Image
            size={140}
            source={{
              uri: image,
            }}
          />
          <Text style={{fontSize: 30, marginTop: 10}}>{facultyName}</Text>
          <Text style={{fontSize: 18, marginTop: 10, textAlign: 'center'}}>
            {facultyRole}
          </Text>
          <Text style={{fontSize: 15, marginTop: 10, textAlign: 'center'}}>
            {facultyUniversity}
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
            <Text style={{marginLeft: 5}}>TeachArea</Text>
          </View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '500',
              marginTop: 5,
              textAlign: 'center',
            }}>
            {' '}
            {facultyTeachArea}
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
              marginTop: 5,
            }}>
            <Icon name="home" />
            <Text>{facultyRoom}</Text>
          </View>
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
export default withNavigation(FacultyInfo);
