# Pandora Box

## Table of Contents
* [Description](#description)
* [Tech Used](#tech-used)
* [Node Libraries Used](#node-libraries-used)
* [Live Application](#live-application)
* [Use Case](#use-case)
* [User Workflow](#user-workflow)
* [Installation](#installation)
* [License](#license)
* [Contributors](#contributors)
* [Questions](#questions)
* [Screenshots](#screenshots)

## Description
A music based, socially fueled database, where you can keep track of all of your music, andexplore further based on your tastes. This application will take advantage of the MERN stackparadigm to serve up a responsive, one-page application for the client to browse the database,keep track of favorites, and create lists that will ultimately shape a client-specific interface.

### Tech Used
- Node.js
- MongoDB
- Mongoose
- GraphQL
- ApolloDB
- React.js
- React router
- express
- Bcrypt
- Heroku deployment
- Spotify developer
- APIJSONWebToken

### Node Libraries Used

See [package.json](./package.json) for full list of dependencies.

## Live Application
View the app deployment on Heroku:

## Use Case
```md
AS a musically enthused user;
I WANT a site that holds a large database of albums and artists,
SO THAT I can browse and discover a large selection of music.

AS an everyday casual user;
I WANT a site that is easy to navigate and explore,
SO THAT I can quickly view items that interest me.

AS a user who likes to keep track of my music;
I WANT a site that allows me to keep lists of music,
SO THAT I can quickly see what music I’ve listened to, as well as what I’d like to listen to.

AS a user who needs the help of ADA devices;
I WANT a site that has clearly defined elements that do not overlap,
SO THAT my device and I can easily navigate the site.

AS a Pandora’s box developer;
I WANT a repository that well organized and legible,
2SO THAT it is easy for me to debug and add features to.AS a Pandora’s box developer;
I WANT a repo that takes advantage of ESLint,
SO THAT all developers working on this app can write consistent code.

AS a potential advertiser/band;
I WANT each page to be tied to accurate tags/genres,SO THAT it is easier to identify demographics to target
```

## User Workflow
```md
GIVEN a music review website:
WHEN I want to manage my musical preferences,
THEN I will create an account for pandora box, and begin to explore the pages.
WHEN I am on the homepage,
THEN I am presented with multiple carousels that show me trending music, recommended music for myself, and my favorite music.
WHEN I want to find a specific piece of music,
THEN I will use the search bar to select whether I want to search by album or by user.
WHEN I type in a search in the search bar,
THEN I am presented with a screen that displays all potential music matches. (ie. if you search “boyz”, you will be presented with all albums or artists that have that in their name.)
WHEN I click on a result i like,
THEN I am brought to either the artist’s page, or the albums page that display’s all the associated information for that result.
WHEN i find an album or artist that I like,
THEN I can give it a “favorite” that will affect its total favorites count, boosting its global popularity.
WHEN I visit an album or artist page,
THEN I may choose to leave a comment or review for the music/artist that is displayed for any user searching that same page.
WHEN I favorite multiple albums,
THEN They are stored in a list tied to your user profile that you may browse as well.
WHEN you are on a page of an album or artist,
THEN I can add them to either a “listened to” or “want to listen to” lists that is also on my user profiles.
WHEN i am on an albums page,
THEN I am presented with all info associated with that album, including artist, release date, tracklist, ect..
WHEN I am on an artists page,
THEN I am presented with all of that artists albums, as well as artist information such as record labels, musicians associated, ect...
WHEN I visit my user dashboard,
THEN I am presented with my music lists, along with all of my reviews and other information about myself. Potentially a visual display of top genres/artists/albums.
WHEN I select the “random” category,
THEN I am brought to a random album or artist for me to explore.
WHEN I am looking through my “recommended music” list,
THEN I am presented with music recommendations that are associated with the bands or genres that I select.
```
## Installation
To run this application on your local machine, Node.js is _required_. Once Node.js is installed, clone the repository to your local development environment:
```
git clone https://github.com/AustinJoo97/Pandoras-Box.git
```

Run ```npm install``` to install all dependencies.  To use the application locally, run ```npm run develop``` in your CLI, and then open http://localhost:3001 in your preferred browser.

## License
Permission is hereby granted, free of charge, to any person obtaining a copy of this Software and associated documentation files (the "Software"), to deal in the Software without  restriction, including without limitation the rights to use, copy, modify, merge, publish distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions.

[View the full license](./LICENSE)

## Contributors
- Ashquinn Gordon GitHub: [@Ashquinn](https://github.com/Ashquinn)
- Austin Joo GitHub: [@AustinJoo97](https://github.com/AustinJoo97)
- Forest Wilson GitHub: [@ForestW70](https://github.com/ForestW70)
- Brandon Ford GitHub: [@brandonfordd](https://github.com/brandonfordd)


## Questions
If you have any questions, [open an issue on GitHub](https://github.com/AustinJoo97/Pandoras-Box/issues) and a contributor will be in touch!

## Screenshots
No screenshots currently :(
