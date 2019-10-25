import React from 'react';
import {DataTable} from 'react-native-paper';
import {StyleSheet, Text, SafeAreaView, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
  chooseBusTimeFromCurrentTime: {
    backgroundColor: '#0984e3',
  },
  basic: {},
});
const today: any = new Date();
const time = today.getHours() + ':' + today.getMinutes();
const AMPM = today.getHours();
const timeMin = today.getMinutes();
const numberTimeMin = Number(timeMin);
const numberAMPM = Number(AMPM);

// numberAMPM = 22;
// numberTimeMin = 10;

const checkAMandPM = () => {
  if (numberAMPM > 11) {
    return 'PM';
  } else {
    return 'AM';
  }
};

const chooseBustimeFromNow = () => {
  //AM
  if (checkAMandPM() === 'AM') {
    if (numberAMPM < 12) {
      //10시40분전까지
      if (numberAMPM < 10 || (numberAMPM === 10 && numberTimeMin <= 40)) {
        return '10시40분';
      }
      //10시40분이후부터는 12시 10분차
      else {
        return '12시10분';
      }
    }
  }
  //PM
  else {
    //12시전까지
    if (numberAMPM < 13) {
      //12시 10분이전까지
      if (numberTimeMin <= 10) {
        return '12시10분';
        //12시 10분이후
      } else {
        return '2시40분';
      }
      //2시이후부터
    } else numberAMPM > 13;
    {
      //9시 10분 이후 10시 10분 이전
      if (
        (numberAMPM === 21 && numberTimeMin > 10) ||
        (numberAMPM === 22 && numberTimeMin <= 10)
      ) {
        return '10시10분';
        //7시50분 이후 그리고 8시 9시10분전까지
      } else if (
        (numberAMPM === 19 && numberTimeMin > 50) ||
        numberAMPM === 20 ||
        (numberAMPM === 21 && numberTimeMin <= 10)
      ) {
        return '9시10분';

        //6시20분이후 그리고 7시 50분전까지
      } else if (
        (numberAMPM === 18 && numberTimeMin > 20) ||
        (numberAMPM === 19 && numberTimeMin <= 50)
      ) {
        return '7시50분';
        //5시30분이후 그리고 6시 20분전까지
      } else if (
        (numberAMPM === 17 && numberTimeMin > 30) ||
        (numberAMPM === 18 && numberTimeMin <= 20)
      ) {
        return '6시20분';
        //4시10분 이후 그리고 5시 30분전까지
      } else if (
        (numberAMPM === 16 && numberTimeMin > 10) ||
        (numberAMPM === 17 && numberTimeMin <= 30)
      ) {
        return '5시30분';
        //2시 40분 이후 그리고 3시 그리고 4시10분전까지
      } else if (
        (numberAMPM === 14 && numberTimeMin > 40) ||
        numberAMPM === 15 ||
        (numberAMPM === 16 && numberTimeMin <= 10)
      ) {
        return '4시10분';
      }
      //10시거나 10시이후에는
      else if (numberAMPM > 22 || (numberAMPM === 22 && numberTimeMin > 10)) {
        return 'No More Bus';
        //이외의 조건들은 2시40분
      } else {
        return '2시40분';
      }
    }
  }
};
console.log(chooseBustimeFromNow());

function ArriveTable() {
  return (
    <>
      <ScrollView>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Departs</DataTable.Title>
            <DataTable.Title>Buses</DataTable.Title>
            <DataTable.Title numeric>Arriving</DataTable.Title>
          </DataTable.Header>

          <DataTable.Row
            style={[
              chooseBustimeFromNow() === '10시40분'
                ? styles.chooseBusTimeFromCurrentTime
                : styles.basic,
            ]}>
            <DataTable.Cell>10:40 AM</DataTable.Cell>
            <DataTable.Cell>
              <Icon name="bus" />
            </DataTable.Cell>
            <DataTable.Cell numeric>10:55 AM</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row
            style={[
              chooseBustimeFromNow() === '12시10분'
                ? styles.chooseBusTimeFromCurrentTime
                : styles.basic,
            ]}>
            <DataTable.Cell>12:10 PM</DataTable.Cell>
            <DataTable.Cell>
              <Icon name="bus" />
            </DataTable.Cell>
            <DataTable.Cell numeric>12:25 PM</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row
            style={[
              chooseBustimeFromNow() === '2시40분'
                ? styles.chooseBusTimeFromCurrentTime
                : styles.basic,
            ]}>
            <DataTable.Cell>2:40 PM</DataTable.Cell>
            <DataTable.Cell>
              <Icon name="bus" />
            </DataTable.Cell>
            <DataTable.Cell numeric>2:55 PM</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row
            style={[
              chooseBustimeFromNow() === '4시10분'
                ? styles.chooseBusTimeFromCurrentTime
                : styles.basic,
            ]}>
            <DataTable.Cell>4:10 PM</DataTable.Cell>
            <DataTable.Cell>
              <Icon name="bus" />
              <Icon name="bus" />
            </DataTable.Cell>
            <DataTable.Cell numeric>4:25 PM</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row
            style={[
              chooseBustimeFromNow() === '5시30분'
                ? styles.chooseBusTimeFromCurrentTime
                : styles.basic,
            ]}>
            <DataTable.Cell>5:30 PM</DataTable.Cell>
            <DataTable.Cell>
              <Icon name="bus" />
            </DataTable.Cell>
            <DataTable.Cell numeric>5:45 PM</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row
            style={[
              chooseBustimeFromNow() === '6시20분'
                ? styles.chooseBusTimeFromCurrentTime
                : styles.basic,
            ]}>
            <DataTable.Cell>6:20 PM</DataTable.Cell>
            <DataTable.Cell>
              <Icon name="bus" />
              <Icon name="bus" />
              <Icon name="bus" />
            </DataTable.Cell>
            <DataTable.Cell numeric>6:35 PM</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row
            style={[
              chooseBustimeFromNow() === '7시50분'
                ? styles.chooseBusTimeFromCurrentTime
                : styles.basic,
            ]}>
            <DataTable.Cell>7:50 PM</DataTable.Cell>
            <DataTable.Cell>
              <Icon name="bus" />
            </DataTable.Cell>
            <DataTable.Cell numeric>8:05 PM</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row
            style={[
              chooseBustimeFromNow() === '9시10분'
                ? styles.chooseBusTimeFromCurrentTime
                : styles.basic,
            ]}>
            <DataTable.Cell>9:10 PM</DataTable.Cell>
            <DataTable.Cell>
              <Icon name="bus" />
            </DataTable.Cell>
            <DataTable.Cell numeric>9:25 PM</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row
            style={[
              chooseBustimeFromNow() === '10시10분'
                ? styles.chooseBusTimeFromCurrentTime
                : styles.basic,
            ]}>
            <DataTable.Cell>10:10 PM</DataTable.Cell>
            <DataTable.Cell>
              <Icon name="bus" />
            </DataTable.Cell>
            <DataTable.Cell numeric>10:25 PM</DataTable.Cell>
          </DataTable.Row>
        </DataTable>
      </ScrollView>
    </>
  );
}

export default ArriveTable;
