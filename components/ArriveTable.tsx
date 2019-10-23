import React from 'react';
import {DataTable} from 'react-native-paper';
import {StyleSheet, Text, SafeAreaView, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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

          <DataTable.Row>
            <DataTable.Cell>10:40 AM</DataTable.Cell>
            <DataTable.Cell>
              <Icon name="bus" />
            </DataTable.Cell>
            <DataTable.Cell numeric>10:55 AM</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell>12:10 PM</DataTable.Cell>
            <DataTable.Cell>
              <Icon name="bus" />
            </DataTable.Cell>
            <DataTable.Cell numeric>12:25 PM</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>2:40 PM</DataTable.Cell>
            <DataTable.Cell>
              <Icon name="bus" />
            </DataTable.Cell>
            <DataTable.Cell numeric>2:55 PM</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>4:10 PM</DataTable.Cell>
            <DataTable.Cell>
              <Icon name="bus" />
              <Icon name="bus" />
            </DataTable.Cell>
            <DataTable.Cell numeric>4:25 PM</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>5:30 PM</DataTable.Cell>
            <DataTable.Cell>
              <Icon name="bus" />
            </DataTable.Cell>
            <DataTable.Cell numeric>5:45 PM</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>6:20 PM</DataTable.Cell>
            <DataTable.Cell>
              <Icon name="bus" />
              <Icon name="bus" />
              <Icon name="bus" />
            </DataTable.Cell>
            <DataTable.Cell numeric>6:35 PM</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row onPress={() => console.log('hello')}>
            <DataTable.Cell>7:50 PM</DataTable.Cell>
            <DataTable.Cell>
              <Icon name="bus" />
            </DataTable.Cell>
            <DataTable.Cell numeric>8:05 PM</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell>9:10 PM</DataTable.Cell>
            <DataTable.Cell>
              <Icon name="bus" />
            </DataTable.Cell>
            <DataTable.Cell numeric>9:25 PM</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
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
