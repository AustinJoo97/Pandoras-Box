import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Row} from "react-bootstrap";

import PopulateSearchResults from '../components/SearchResultsDetails';
import { getTokenThenArtists } from '../utils/API';

// spotify query based on search type
const queryArtists = async (setSeachResults) => {
  // get our data values
  const params = new URLSearchParams(window.location.search);
  const searchQuery = params.get('q')
  const searchType = params.get('type');


  if (searchType === 'artist') {
    const response = await getTokenThenArtists(searchQuery)
    setSeachResults(response)
    
  } else if (searchType === 'genre') {
    // get genre search
  }
}


const ShowSearchScreen = (props) => {
  // create state to hold that data from the query
  const [searchResults, setSeachResults] = useState([])

  useEffect(() => {
    queryArtists(setSeachResults)
  }, [setSeachResults])

  const params = new URLSearchParams(window.location.search);
  const searchQuery = params.get('q')
  const searchType = params.get('type');

  // console.log(searchResults)

  return (
    <Container>
      <h2 className="show-query">Search results for {searchQuery}</h2>
      <Row id="searchResults" className="">
        <PopulateSearchResults queryResults={searchResults} queryType={searchType} />
        
      </Row>
    </Container>
  
    )
}

export default ShowSearchScreen;