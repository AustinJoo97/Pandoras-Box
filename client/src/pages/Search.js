import React from 'react';
import PopulateSearchResults from '../components/SearchResultsDetails';

const sampAlbums = [
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
    },
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
    },
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


const ShowSearchScreen = ({ query }) => {

    // take query and fetch api based on query
    // store response as variable, pass into populate seach results component

    return(
        <section id="searchResults" className="row">
            <PopulateSearchResults queryResults={sampAlbums} />

        </section>
    )
}

export default ShowSearchScreen;