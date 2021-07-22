import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import RecentlyReleased from '../components/RecentlyReleasedSection';
import YourFavorites from '../components/YourFavoritesSection';
import BasedOnFavorites from '../components/BasedOnFavoritesSection';
import RecentComments from '../components/RecentCommentSection';
// import { useQuery } from '@apollo/client';

// import { QUERY_LISTS } from '../utils/queries';

const Home = () => {
  // const { loading, data } = useQuery(QUERY_LISTS);
  // const lists = data?.lists || [];

  return (
    <main>
      <div className="">
      <RecentlyReleased />
      <YourFavorites />
      <BasedOnFavorites />
      <RecentComments />
      </div>
    </main>
  );
};

export default Home;
