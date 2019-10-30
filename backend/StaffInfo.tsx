import React from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  Text,
  Button,
  FlatList,
} from 'react-native';
import {DataTable, Avatar} from 'react-native-paper';
import SQLite from 'react-native-sqlite-storage';
//const staffUrl = `https://www.solbridge.ac.kr/story/page/index.jsp?code=solbridge_n020201`;
// async function loadGraphicCards(url) {
//   const cheerio = require('react-native-cheerio');
//   let staffImageBaseUrlArr: string[] = new Array();
//   const response = await fetch(url); // fetch page
//   const htmlString = await response.text(); // get response text
//   const imageBaseUrl = 'https://www.solbridge.ac.kr/';

//   let $ = cheerio.load(htmlString);
//   $('.faculty-research').each(function(item) {
//     // let name: string[] = $(this)
//     //   .find('.row')
//     //   .find('.profile')
//     //   .text()
//     //   .trim();

//     let name: string[] = $(this)
//       .find('.row')
//       .find('.col-sm-8')
//       .children('h2')
//       .text()
//       .trim();

//     let role: string[] = $(this)
//       .find('row')
//       .find('.col-sm-8')
//       .children('p')
//       .text()
//       .trim();

//     for (let i = 0; i < 6; i++) {
//       const image: [] = $('.col-sm-4')
//         .find('img')
//         .eq(i)
//         .attr('src');

//       const completeUrl = imageBaseUrl + image;
//       staffImageBaseUrlArr.push(completeUrl);
//     }

//     // console.log(htmlString);
//     console.log(name);
//     // console.log(staffImageBaseUrlArr);
//   });
// }

//loadGraphicCards(staffUrl);

interface State {
  db: SQLite.SQLiteDatabase;
  //users: Array<IUser>;
}

function Server() {
  //console.log('여기서부터');

  return (
    <>
      <Text>hello</Text>
    </>
  );
}

export default Server;
