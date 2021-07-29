import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Home.css";
import { useState, useEffect } from 'react'

import RecentComments from '../components/RecentCommentSection';
import PopulateCarousel from '../components/Carousel';
import { getTokenThenAlbumGenres } from '../utils/API'


// query 3 calls to spotify api to get three different sets of data for the carousel
const grabData = async (setAllAlbums) => {

  // create empty object to await a specific queries response,
  // then assign that data(val) to it's name(key) in that object
  const promises = {};
  try {
    promises.rock = await getTokenThenAlbumGenres('rock')
    promises.rap = await getTokenThenAlbumGenres('rap')
    promises.jazz = await getTokenThenAlbumGenres('jazz')
    // console.log(promises)


    // create new object that will hold our filtered values
    // these value names will then be passed on to componenets like carousel
    const filteredResults = {}

    // for each entry in the promise object...
    Object.entries(promises).forEach(([key, val]) => {
      // set promise's name = to an array of the newly named values using map
      filteredResults[key] = val.map(album => ({
        albumName: album.name,
        artistName: album.artists[0].name,
        albumImg: album.images[0].url,
        albumId: album.id,
        artistId: album.artists[0].id
      })
      )
    })
    // console.log(filteredResults)

    // Set our state as this object of filtered results
    setAllAlbums(filteredResults)

  } catch (err) {
    console.error(err);
  }
}



const Home = () => {
  // create state that holds all albums/entries data
  const [allAlbums, setAllAlbums] = useState([])


  // run function that will start the queries to spotify API
  // what specifically is getting searched is handled in there
  // pass in our stateChange function to hold our data after all all data was fetched
  useEffect(() => {
    grabData(setAllAlbums);
  }, [setAllAlbums])


  return (
    <main>
      <div className="">
        <PopulateCarousel queryResults={allAlbums.rap} queryTitle="Rap Albums" />
        <PopulateCarousel queryResults={allAlbums.jazz} queryTitle="Jazz Albums" />
        <PopulateCarousel queryResults={allAlbums.rock} queryTitle="Rock Albums" />
        <RecentComments />
      </div>
    </main>
  );
};

export default Home;
