import React from 'react';
// import { useQuery } from '@apollo/client';


import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Home.css";

import RecentComments from '../components/RecentCommentSection';
import { artistAlbumsSampleData } from '../utils/sampleData';

import PopulateCarousel from '../components/Carousel';


// import { QUERY_ALBUMS } from '../utils/queries';
// import { QUERY_FAVORITE_ALBUMS } from '../utils/queries';
// import { QUERY_LISTS } from '../utils/queries';

//sample data to match query
const albumsQuery = artistAlbumsSampleData;

const Home = () => {

  const response = albumsQuery;

  // const { allAlbumsloading, allAlbumData } = useQuery(QUERY_ALBUMS);
  // const albums = artistAlbumsSampleData

  // const { favoriteAlbumsloading, favoriteAlbumData } = useQuery(QUERY_FAVORITE_ALBUMS);
  // const favoriteAlbums = favoriteAlbumData?.getFavoritedAlbums || [];

  return (
    <main>
      <div className="">
        <PopulateCarousel queryResults={response} queryType="general" queryTitle="General Albums 1"/>
        <PopulateCarousel queryResults={response} queryType="general" queryTitle="General Albums 2"/>
        <PopulateCarousel queryResults={response} queryType="general" queryTitle="General Albums 3"/>
        <RecentComments />
      </div>
    </main>
  );
};

export default Home;
