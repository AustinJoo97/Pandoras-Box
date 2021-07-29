import React from 'react';
import { useEffect } from 'react';

import { getTokenThenAlbumGenres, getAlbumGenres } from '../utils/API';
// import PopulateCarousel from '../components/Carousel';

const Test = () => {


    // useEffect(() => {
    //     getTokenThenAlbumGenres('rock').then(res => {
    //         console.log(res)
    //     })
    //     // return console.log(response)
    // }, [])

    const grabData = async () => {
        try {
            const response = await getTokenThenAlbumGenres('rock');
            console.log(response);

        } catch (err) {
            console.error(err);
        }



        
        // try {

        //     if (!response.status === 200) {
        //       console.log('nope')
        //     }

        //     const { jsonData } = await response.json()

        //     console.log(jsonData);

        // } catch (err) {
        //     console.error(err);
        // }
    }

    grabData();
    console.log('ok');

    return (
        <div>
            <h2>Now testing...</h2>
        </div>
    )
}


export default Test;