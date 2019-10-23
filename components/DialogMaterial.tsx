import React, {useState} from 'react';
import {Button, Paragraph, Dialog, Portal, Provider} from 'react-native-paper';
import {View, StyleSheet, Text} from 'react-native';
import {types} from '@babel/core';
import TabViewMaterial from './TabViewMaterial';
function DialogMaterial() {
  const [dialogVisible, setDialogVisible] = useState(false);

  const _showDialog = () => {
    setDialogVisible(true);
  };
  const _hideDialog = () => {
    setDialogVisible(false);
  };
  const title: string = '2019 Fall Shuttle Bus Time';

  return (
    <>
      <Provider>
        <Button onPress={_showDialog}>See All Bus Schedules</Button>
        <Portal>
          <Dialog visible={dialogVisible} onDismiss={_hideDialog}>
            <Dialog.Title>{title}</Dialog.Title>
            <Dialog.Content>
              <TabViewMaterial />
              <Text>왜안나와</Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={_hideDialog}>OK</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 250,
  },
  modalLayout: {
    alignItems: 'center',
  },
  modalText: {
    fontSize: 35,
  },
});

export default DialogMaterial;
