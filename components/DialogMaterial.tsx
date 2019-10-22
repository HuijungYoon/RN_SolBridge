import React, {useState} from 'react';
import {Button, Paragraph, Dialog, Portal, Provider} from 'react-native-paper';
import {View, StyleSheet} from 'react-native';
import {types} from '@babel/core';
function DialogMaterial() {
  const [dialogVisible, setDialogVisible] = useState(false);

  const _showDialog = () => {
    setDialogVisible(true);
  };
  const _hideDialog = () => {
    setDialogVisible(false);
  };
  const title: string = '2019 Fall Season Shuttle Bus Schedules';

  return (
    <>
      <Provider>
        <Button onPress={_showDialog}>Show Dialog</Button>
        <Portal>
          <Dialog visible={dialogVisible} onDismiss={_hideDialog}>
            <Dialog.Title>{title}</Dialog.Title>
            <Dialog.Content>
              <Paragraph>This is simple dialog</Paragraph>
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
