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
const checkAMandPM = () => {
  if (numberAMPM > 11) {
    return 'PM';
  } else {
    return 'AM';
  }
};
console.log(time);
const chooseBustimeFromNow = () => {
  //AM
  if (checkAMandPM() === 'AM') {
    //8시 25분
    if (numberAMPM < 9 && numberTimeMin <= 25) {
      return '8시25분';
    }
    //8시 30분
    else if (numberAMPM < 9 && numberTimeMin > 25 && numberTimeMin <= 30) {
      return '8시30분';
    }
    //8시 35분
    else if (numberAMPM < 9 && numberTimeMin > 30 && numberTimeMin <= 35) {
      return '8시35분';
    }
    //10시
    else if (numberAMPM <= 10 && numberAMPM >= 8) {
      return '10시';
    }
    //11시 30분
    else if (numberAMPM > 10 && numberTimeMin <= 30) {
      return '11시30분';
    }
    //12시 30분
    else if (numberAMPM > 11 && numberTimeMin <= 30) {
      return '12시30분';
    } else {
      console.log('No more Bus...');
    }
  }
  //PM
  else {
    //2시
    if (numberAMPM <= 14) {
      return '2시';
    }
    //3시반
    else if (numberAMPM > 14 && numberAMPM < 16 && numberTimeMin <= 30) {
      return '3시30분';
    }
    //5시
    else if (numberAMPM > 15 && numberAMPM <= 17) {
      return '5시';
    }
    //7시10분
    else if (numberAMPM => 17 && numberAMPM < 20) {
      return '7시10분';
    } else {
      return 'No More Bus';
    }
  }
};
console.log(chooseBustimeFromNow());

function DepartureTable() {
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
              chooseBustimeFromNow() === '8시25분'
                ? styles.chooseBusTimeFromCurrentTime
                : styles.basic,
            ]}>
            <DataTable.Cell>8:25 AM</DataTable.Cell>
            <DataTable.Cell>
              <Icon name="bus" />
            </DataTable.Cell>
            <DataTable.Cell numeric>8:40 AM</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row
            style={[
              chooseBustimeFromNow() === '8시30분'
                ? styles.chooseBusTimeFromCurrentTime
                : styles.basic,
            ]}>
            <DataTable.Cell>8:30 AM</DataTable.Cell>
            <DataTable.Cell>
              <Icon name="bus" />
              <Icon name="bus" />
              <Icon name="bus" />
            </DataTable.Cell>
            <DataTable.Cell numeric>8:45 AM</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row
            style={[
              chooseBustimeFromNow() === '8시35분'
                ? styles.chooseBusTimeFromCurrentTime
                : styles.basic,
            ]}>
            <DataTable.Cell>8:35 AM</DataTable.Cell>
            <DataTable.Cell>
              <Icon name="bus" />
            </DataTable.Cell>
            <DataTable.Cell numeric>8:50 AM</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row
            style={[
              chooseBustimeFromNow() === '10시'
                ? styles.chooseBusTimeFromCurrentTime
                : styles.basic,
            ]}>
            <DataTable.Cell>10:00 AM</DataTable.Cell>
            <DataTable.Cell>
              <Icon name="bus" />
              <Icon name="bus" />
            </DataTable.Cell>
            <DataTable.Cell numeric>10:15 AM</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row
            style={[
              chooseBustimeFromNow() === '11시30분'
                ? styles.chooseBusTimeFromCurrentTime
                : styles.basic,
            ]}>
            <DataTable.Cell>11:30 AM</DataTable.Cell>
            <DataTable.Cell>
              <Icon name="bus" />
            </DataTable.Cell>
            <DataTable.Cell numeric>11:45 AM</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell
              style={[
                chooseBustimeFromNow() === '12시30분'
                  ? styles.chooseBusTimeFromCurrentTime
                  : styles.basic,
              ]}>
              12:30 PM
            </DataTable.Cell>
            <DataTable.Cell>
              <Icon name="bus" />
              <Icon name="bus" />
            </DataTable.Cell>
            <DataTable.Cell numeric>12:45 PM</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell
              style={[
                chooseBustimeFromNow() === '2시'
                  ? styles.chooseBusTimeFromCurrentTime
                  : styles.basic,
              ]}>
              2:00 PM
            </DataTable.Cell>
            <DataTable.Cell>
              <Icon name="bus" />
            </DataTable.Cell>
            <DataTable.Cell numeric>2:15 PM</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row
            style={[
              chooseBustimeFromNow() === '3시30분'
                ? styles.chooseBusTimeFromCurrentTime
                : styles.basic,
            ]}>
            <DataTable.Cell>3:30 PM</DataTable.Cell>
            <DataTable.Cell>
              <Icon name="bus" />
            </DataTable.Cell>
            <DataTable.Cell numeric>3:45 PM</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row
            style={[
              chooseBustimeFromNow() === '5시'
                ? styles.chooseBusTimeFromCurrentTime
                : styles.basic,
            ]}>
            <DataTable.Cell>5:00 PM</DataTable.Cell>
            <DataTable.Cell>
              <Icon name="bus" />
            </DataTable.Cell>
            <DataTable.Cell numeric>5:15 PM</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell
              style={[
                chooseBustimeFromNow() === '7시10분'
                  ? styles.chooseBusTimeFromCurrentTime
                  : styles.basic,
              ]}>
              7:10 PM
            </DataTable.Cell>
            <DataTable.Cell>
              <Icon name="bus" />
            </DataTable.Cell>
            <DataTable.Cell numeric>7:25 PM</DataTable.Cell>
          </DataTable.Row>
        </DataTable>
      </ScrollView>
    </>
  );
}

export default DepartureTable;
