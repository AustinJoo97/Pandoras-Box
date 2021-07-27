// import { Redirect, useParams } from 'react-router-dom';
// import { useQuery } from '@apollo/client';
// import { QUERY_ARTIST } from '../utils/queries';

import ViewArtist from '../components/DisplayArtistView';
// import ViewAlbum from '../components/DisplayAlbumView';


const sampData = {
    artistName: "The beatles",
    artistId: "125246",
    img: "https://i.kym-cdn.com/photos/images/newsfeed/001/513/412/84b.jpg",
    bio: "I'm baby kitsch disrupt vaporware chia banh mi umami. Viral tumeric vice coloring book irony everyday carry yr jean shorts affogato migas you probably haven't heard of them. Banh mi coloring book everyday carry thundercats cloud bread hoodie church-key semiotics asymmetrical sustainable venmo keffiyeh typewriter bushwick. Activated charcoal kogi locavore viral intelligentsia keffiyeh affogato blog tacos adaptogen butcher cray. Mixtape VHS +1, man bun schlitz try-hard bitters intelligentsia. Poke copper mug synth, trust fund fanny pack hammock chicharrones kale chips shaman yr leggings. Asymmetrical banjo blog kitsch pork belly. Tbh brunch edison bulb fashion axe craft beer prism occupy poke migas vaporware squid hell of. +1 cliche semiotics 8-bit. Vape crucifix flannel craft beer, cold-pressed hexagon everyday carry af taiyaki coloring book hoodie pickled cliche. Hoodie food truck tofu normcore mlkshk whatever vexillologist microdosing hammock farm-to-table lyft.",
    popularity: "88",
    members: [
        "John Lennon", "Paul McCartney", "George Harrison", "Ringo Freakin' Starr"
    ],
    genres: [
        "rock", "pop-rock", "psychadelic-rock"
    ],
    albums: [
        {
            title: "yellow submarine",
            albumId: "e89hrishd",
            year: "1967",
            img: "https://images-na.ssl-images-amazon.com/images/I/91IaG%2BLrzmL._SX522_.jpg",
            popularity: "59",
            description: "I'm baby selfies affogato poutine, hoodie small batch vexillologist schlitz sartorial mixtape. Gentrify ullamco asymmetrical bicycle rights health goth etsy in tbh. Leggings hammock messenger bag sunt drinking vinegar kinfolk duis chicharrones aesthetic lorem fingerstache. 90's kombucha quinoa synth health goth. Woke magna hella biodiesel tote bag",
            songs: [
                "we", "all", "live", "in", "the", "yellow", "submarine"
            ]
        },
        {
            title: "let it be",
            albumId: "al3rgfedd",
            year: "1969",
            img: "https://c-fa.cdn.smule.com/s-sf-bck4/arr/18/37/c59988bd-aeb2-49d0-8607-657b84ca91eb.jpg",
            popularity: "79",
            description: "I'm baby selfies affogato poutine, hoodie small batch vexillologist schlitz sartorial mixtape. Gentrify ullamco asymmetrical bicycle rights health goth etsy in tbh. Leggings hammock messenger bag sunt drinking vinegar kinfolk duis chicharrones aesthetic lorem fingerstache. 90's kombucha quinoa synth health goth. Woke magna hella biodiesel tote bag",
            songs: [
                "let", "it", "be"
            ]
        },
        {
            title: "the super duper mystery tour",
            albumId: "a87erihsd",
            year: "1967",
            img: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e8/MagicalMysteryTourDoubleEPcover.jpg/220px-MagicalMysteryTourDoubleEPcover.jpg",
            popularity: "65",
            description: "I'm baby selfies affogato poutine, hoodie small batch vexillologist schlitz sartorial mixtape. Gentrify ullamco asymmetrical bicycle rights health goth etsy in tbh. Leggings hammock messenger bag sunt drinking vinegar kinfolk duis chicharrones aesthetic lorem fingerstache. 90's kombucha quinoa synth health goth. Woke magna hella biodiesel tote bag",
            songs: [
                "I", "AM", "THE", "WALRUS"
            ]
        },
        {
            title: "please please me",
            albumId: "oiuhudsa",
            year: "1963",
            img: "https://upload.wikimedia.org/wikipedia/en/c/c0/PleasePleaseMe_audio_cover.jpg",
            popularity: "60",
            description: "I'm baby selfies affogato poutine, hoodie small batch vexillologist schlitz sartorial mixtape. Gentrify ullamco asymmetrical bicycle rights health goth etsy in tbh. Leggings hammock messenger bag sunt drinking vinegar kinfolk duis chicharrones aesthetic lorem fingerstache. 90's kombucha quinoa synth health goth. Woke magna hella biodiesel tote bag",
            songs: [
                "please", "please", "please", "please", "please", "please", "please", "me"
            ]
        }
    ]
}

const ArtistPage = () => {

    // sample data for artist search
    

    // for when we have our fetch set up
    // 
    // const { artist: artistParam } = useParams();

    // const { loading, data } = useQuery(QUERY_ARTIST, {
    //     variables: { artist: artistParam },
    // });

    // const targetArtist = data.artist || {};

    // if(loading){
    //     return <div>Loading...</div>
    // }

    // if (data.artist.length = 0) {
    //     return (
    //         <h4>Error finding seach, please check your spelling and try again.</h4>
    //     )
    // }

    return (
        <div>
            <ViewArtist artist={sampData} />
            {/* <ViewAlbum 
                album={sampData.albums[0]}
                artist={sampData.artistName} 
            /> */}
        </div>
    )
}

export default ArtistPage;