import React from 'react';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import {Appbar} from 'react-native-paper';

function appbar() {
  const _goBack = () => console.log('Went back');

  const _onSearch = () => console.log('Searching');

  const _onMore = () => console.log('Shown more');

  return (
    <>
      <Appbar.Header theme={theme}>
        <Appbar.Content title="SolBridge" subtitle="InfoSystem" />
        <Appbar.Action icon="more-vert" onPress={_onMore} />
      </Appbar.Header>
    </>
  );
}
const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#0984e3',
    accent: '#f1c40f',
  },
};

export default appbar;
