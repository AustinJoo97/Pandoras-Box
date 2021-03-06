import { useEffect, useState } from 'react';
import { getTokenThenArtistsDetails, getTokenThenArtistAlbums } from '../utils/API';

import ViewArtist from '../components/DisplayArtistView';


const queryArtist = async (setArtistData, setLoading) => {
    const params = new URLSearchParams(window.location.search);
    const artistId = params.get('q')
    const allArtistInfo = {};

    // grab albums
    allArtistInfo.albums = await getTokenThenArtistAlbums(artistId);
    // console.log(allArtistInfo.albums)
    // setArtistData(albumsResponse)

    // search for artist info
    allArtistInfo.artist = await getTokenThenArtistsDetails(artistId);
    // console.log(allArtistInfo.artist);
    await setArtistData(allArtistInfo);
    setLoading(false);

}


const ArtistPage = () => {
    const [artistData, setArtistData] = useState([])
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        queryArtist(setArtistData, setLoading)
    }, [setArtistData])
   
    // console.log(artistData);

    if (isLoading) {
        return (
            <h5>Loading...</h5>
        )
    }
    return (
        <div>
            <ViewArtist artist={artistData.artist} albums={artistData.albums} />
            
        </div>
    )
}

export default ArtistPage;