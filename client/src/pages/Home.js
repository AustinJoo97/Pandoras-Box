import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useQuery } from '@apollo/client';

import RecentlyReleased from '../components/RecentlyReleasedSection';
import YourFavorites from '../components/YourFavoritesSection';
import BasedOnFavorites from '../components/BasedOnFavoritesSection';
import RecentComments from '../components/RecentCommentSection';
import { QUERY_FAVORITES, QUERY_PREPOP } from '../utils/queries';
import { searchSpotifyByGenreName } from '../utils/API';

const Home = () => {

  // to query for a users favorites list. can do without this if unable
  const { loading, userData } = useQuery(QUERY_FAVORITES);
  const lists = userData?.lists || [];

  // will most likely need a call for each list from spotify we want to initially generate
  const HandleApiCalls = async () => {
    try {
      const response = await searchSpotifyByGenreName('rock');

      if (!response.ok) {
        throw new Error('could not fetch!');
      }

      const { rockAlbums } = await response.json();

    } catch (err) {
      console.error(err)
    }
  }

  return (
    <main>
      <div className="">
      <RecentlyReleased />
      <YourFavorites data={userData}/>
      <BasedOnFavorites />
      <RecentComments />
      </div>
    </main>
  );
};

export default Home;
