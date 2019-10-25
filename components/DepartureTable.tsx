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
//console.log(time);
const chooseBustimeFromNow = () => {
  //AM
  if (checkAMandPM() === 'AM') {
    if (numberAMPM < 9) {
      //8시 25분
      if (numberAMPM === 8 && numberTimeMin <= 25) {
        return '8시25분';
      }
      //8시 30분
      else if (numberAMPM === 8 && numberTimeMin > 25 && numberTimeMin <= 30) {
        return '8시30분';
      }
      //8시 35분
      else if (numberAMPM === 8 && numberTimeMin > 30 && numberTimeMin <= 35) {
        return '8시35분';
      }
      //8시 35분 이후는 무조건10시
      else if (numberAMPM === 8 && numberTimeMin > 35) {
        return '10시';
      }
      //이외에는 8시 25분
      else {
        return '8시25분';
      }
    }
    //11까지
    else if (numberAMPM <= 11) {
      //10시포함전까지
      if (numberAMPM <= 10) {
        //10시 이상부터
        if (numberAMPM === 10 && numberTimeMin > 0) {
          return '11시30분';
          //나머지는 모두 10시
        } else {
          return '10시';
        }
        //11시이후
      } else if (numberAMPM > 10) {
        //11시30분포함 전까지
        if (numberAMPM === 11 && numberTimeMin <= 30) {
          return '11시30분';
          //11시반 이후
        } else if (numberAMPM === 11 && numberTimeMin > 30) {
          return '12시30분';
        }
      }
    } else {
      console.log('SomeThing is Wrong.... All thing is Developers fault');
    }
  }
  //PM
  else {
    //2시전까지
    if (numberAMPM < 14) {
      //12시 30분이상이라면
      if ((numberAMPM === 12 && numberTimeMin > 30) || numberAMPM === 13) {
        return '2시';
        //그전까지는 모두 12시30분
      } else {
        return '12시30분';
      }
    } else numberAMPM >= 14;
    {
      //5시0분 이후 거나 6시 그리고 7시 10분포함 전까지는 7시 10분
      if (
        (numberAMPM === 17 && numberTimeMin > 0) ||
        numberAMPM === 18 ||
        (numberAMPM === 19 && numberTimeMin <= 10)
      ) {
        return '7시10분';
        //3시30분 이후 그리고 4시 5시까지는 5시
      } else if (
        (numberAMPM === 15 && numberTimeMin > 30) ||
        numberAMPM === 16 ||
        (numberAMPM === 17 && numberTimeMin === 0)
      ) {
        return '5시';
        //7시 10분 이후부터는 버스없음여
      } else if (numberAMPM > 19 || (numberAMPM === 19 && numberTimeMin > 10)) {
        return 'No More Bus';
        //이외의 조건들은 3시30분
      } else {
        return '3시30분';
      }
    }
  }
};
//console.log(chooseBustimeFromNow());

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
          <DataTable.Row
            style={[
              chooseBustimeFromNow() === '12시30분'
                ? styles.chooseBusTimeFromCurrentTime
                : styles.basic,
            ]}>
            <DataTable.Cell>12:30 PMdddd</DataTable.Cell>
            <DataTable.Cell>
              <Icon name="bus" />
              <Icon name="bus" />
            </DataTable.Cell>
            <DataTable.Cell numeric>12:45 PM</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row
            style={[
              chooseBustimeFromNow() === '2시'
                ? styles.chooseBusTimeFromCurrentTime
                : styles.basic,
            ]}>
            <DataTable.Cell>2:00 PM</DataTable.Cell>
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
          <DataTable.Row
            style={[
              chooseBustimeFromNow() === '7시10분'
                ? styles.chooseBusTimeFromCurrentTime
                : styles.basic,
            ]}>
            <DataTable.Cell>7:10 PM</DataTable.Cell>
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
