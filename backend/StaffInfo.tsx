import React, {useState} from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  Text,
  Button,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import {DataTable, Avatar} from 'react-native-paper';
import SQLite from 'react-native-sqlite-storage';
import staffData from '../data/staff.json';
import {ListItem, SearchBar} from 'react-native-elements';

// const staffUrl = `https://www.solbridge.ac.kr/story/page/index.jsp?code=solbridge_n020201`;
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

// loadGraphicCards(staffUrl);

// interface State {
//   db: SQLite.SQLiteDatabase;
//   //users: Array<IUser>;
// }

function StaffInfo() {
  // console.log(JSON.stringify(staffData.memberData.staff[0].image));
  //console.log(staffData.memberData.staff[0].image);
  const [search, setSearch] = useState('');
  const staffImage = staffData.memberData.staff.map((staff, i) => (
    <ListItem
      key={i}
      leftAvatar={{source: {uri: staff.image}}}
      title={staff.name}
      subtitle={staff.role}
      bottomDivider
      chevron
    />
  ));
  const update = e => {
    //  e.preventDefault();

    //console.log(e.target);
    setSearch(e);
  };

  return (
    <>
      <SearchBar
        placeholder="search"
        // onChangeText={() => setSearch('')}
        onChangeText={update}
        value={search}
      />
      <ScrollView>{staffImage}</ScrollView>
    </>
  );
}

export default StaffInfo;
