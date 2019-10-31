import React from 'react';
//import console = require('console');
import {
  View,
  Dimensions,
  StyleSheet,
  Text,
  Button,
  FlatList,
} from 'react-native';
//import console = require('console');
//import console = require('console');
//import console = require('console');
//import console = require('console');

const cheerio = require('react-native-cheerio');

const courseUrl =
  'https://www.solbridge.ac.kr/story/page/index.jsp?code=solbridge_n030102';

async function loadCourse() {
  const response = await fetch(courseUrl);
  const htmlString = await response.text();

  let $ = cheerio.load(htmlString);

  try {
    let divideName = '';
    let courseName = '';
    let description = '';

    $('table')
      .find('tr')
      .each(function(index, elem) {
        if (index % 8 === 0) {
          divideName = $(this)
            .find('tbody')
            .children('td')
            .text()
            .trim();

          console.log(`${divideName}`);
        } else {
          courseName = $(this)
            .find('td')
            .text()
            .trim();
          description = $(this)
            .find('th')
            .next()
            .text()
            .trim();

          // console.log(` -> ${description}`);
        }
      });
  } catch (error) {
    console.error(error);
  }
}

const CourseInfo = () => {
  console.log('여기');
  loadCourse();
  return (
    <>
      <Text>hello there</Text>
    </>
  );
};

export default CourseInfo;
