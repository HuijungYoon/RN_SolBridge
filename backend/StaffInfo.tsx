import React from 'react';
import {View, Dimensions, StyleSheet, Text} from 'react-native';
import {DataTable, Avatar} from 'react-native-paper';
import {labeledStatement} from '@babel/types';

async function loadGraphicCards() {
  const cheerio = require('react-native-cheerio');
  let staffImageBaseUrlArr: string[] = new Array();
  const searchUrl = `https://www.solbridge.ac.kr/story/page/index.jsp?code=solbridge_n020201`;
  const response = await fetch(searchUrl); // fetch page
  const htmlString = await response.text(); // get response text
  const imageBaseUrl = 'https://www.solbridge.ac.kr/';

  let $ = cheerio.load(htmlString);
  $('.faculty-research').each(function(item) {
    let name: string[] = $(this)
      .find('.row')
      .find('.profile')
      .text()
      .trim();

    for (let i = 0; i < 6; i++) {
      const image: [] = $('.col-sm-4')
        .find('img')
        .eq(i)
        .attr('src');

      const completeUrl = imageBaseUrl + image;
      staffImageBaseUrlArr.push(completeUrl);
    }

    console.log(name);
    console.log(staffImageBaseUrlArr);
  });
}

function Server() {
  console.log('여기서부터');
  let a = loadGraphicCards().then;
  console.log(a);
  //loadGraphicCards();
  return (
    <>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>name</DataTable.Title>
          <DataTable.Title>role</DataTable.Title>
          <DataTable.Title numeric>more</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell>1</DataTable.Cell>
          <DataTable.Cell>2</DataTable.Cell>
          <DataTable.Cell numeric>3</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>왜안되냐 </DataTable.Cell>
          <DataTable.Cell numeric>237</DataTable.Cell>
          <DataTable.Cell numeric>8.0</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Pagination
          page={1}
          numberOfPages={3}
          onPageChange={page => {
            console.log(page);
          }}
          label="1-2 of 6"
        />
      </DataTable>
    </>
  );
}

export default Server;
