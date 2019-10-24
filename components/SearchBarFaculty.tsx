import React, {useState} from 'react';
import {Searchbar} from 'react-native-paper';
function SearchBarFaculty() {
  const [firstQuery, setFirstQuery] = useState();
  return (
    <>
      <Searchbar
        placeholder="Search"
        onChangeText={query => {
          setFirstQuery({firstQuery: query});
        }}
        value={firstQuery}
      />
    </>
  );
}

export default SearchBarFaculty;
