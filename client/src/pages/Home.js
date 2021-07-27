import React from 'react';
import { useQuery } from '@apollo/client';


import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Home.css";
// import RecentlyReleased from '../components/RecentlyReleasedSection';
// import YourFavorites from '../components/YourFavoritesSection';
import BasedOnFavorites from '../components/BasedOnFavoritesSection';
import RecentComments from '../components/RecentCommentSection';

import CreateCarousel from '../components/Carousel';

import { QUERY_ALBUMS } from '../utils/queries';
import { QUERY_FAVORITE_ALBUMS } from '../utils/queries';
// import { QUERY_LISTS } from '../utils/queries';

const Home = () => {

  const { allAlbumsloading, allAlbumData } = useQuery(QUERY_ALBUMS);
  const albums = allAlbumData?.getAlbums || [];

  const { favoriteAlbumsloading, favoriteAlbumData } = useQuery(QUERY_FAVORITE_ALBUMS);
  const favoriteAlbums = favoriteAlbumData?.getFavoritedAlbums || [];

  return (
    <main>
      <div className="">
      {allAlbumsloading ? (
        <div>Loading...</div>
      ) : (
        <CreateCarousel
        albums={albums}
        title="Recently Released"
        />
      )}
      {favoriteAlbumsloading ? (
        <div>Loading...</div>
      ) : (
        <CreateCarousel
        albums={favoriteAlbums}
        title="Your Favorite Albums"
        />
      )}
      <BasedOnFavorites />
      <RecentComments />
      </div>
    </main>
  );
};

export default Home;
