import { useEffect, useState } from 'react';
import { getTokenThenArtistAlbums } from '../utils/API';

import ViewArtist from '../components/DisplayArtistView';


const queryArtist = async (setArtistData) => {
    const params = new URLSearchParams(window.location.search);
    const artistId = params.get('q')

    // grab albums
    const response = await getTokenThenArtistAlbums(artistId);
    console.log(response)
    setArtistData(response)

    // search for artist info

}


const ArtistPage = () => {
    const [artistData, setArtistData] = useState([])

    useEffect(() => {
        queryArtist(setArtistData)
    }, [setArtistData])
   
    return (
        <div>
            <ViewArtist artist={artistData} />
            
        </div>
    )
}

export default ArtistPage;