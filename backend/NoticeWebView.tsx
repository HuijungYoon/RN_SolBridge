import React, {useEffect} from 'react';
import {WebView} from 'react-native-webview';
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
  SafeAreaView,
} from 'react-native';
const mailUri = 'http://mail.office365.com';
function NoticeWebView() {
  // process.setMaxListeners(10);
  return (
    <>
      <WebView
        source={{uri: mailUri}}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        scalesPageToFit={false}
      />
      {/* <Text>hello</Text> */}
    </>
  );
}

export default NoticeWebView;
