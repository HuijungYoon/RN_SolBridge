import React from 'react';
import {View, Dimensions, StyleSheet, Text} from 'react-native';

async function loadGraphicCards() {
  const searchUrl = `https://www.solbridge.ac.kr/story/page/index.jsp?code=solbridge_n020201`;
  const response = await fetch(searchUrl); // fetch page

  const htmlString = await response.text(); // get response text
  console.log(htmlString);
}
function Server() {
  console.log('hello serverdd');
  loadGraphicCards();
  return (
    <>
      <Text>hi serverㅇdddㅇdddfffßㅇ</Text>
    </>
  );
}

export default Server;
