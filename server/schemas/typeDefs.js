const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    favorites: [Album]
    comments: [Comment]
  }

  type Comments{
    _id: ID!
    commentText: String!
    commentDate: String!
    postedBy: User
    albumCommented: Album
    artistCommented: Artist
  }

  type Album {
    _id: ID,
    spotifyID: String!
    name: String!
    artist: String
    popularity: Int
    favorited: Int
    comments: [Comment]
  }

  type Artist{
    _id: String!
    spotifyID: String!
    name: String!
    albums: [Album]
    comments: [Comment]
  }

  type Auth {
    token: ID!
    user: User
  }



  type Query {
    getUsers: [User]
    getSingleUser(username: String!): User
    getComments: [Comment]
    getAlbums: [Album]
    getSingleAlbum(name: String!): Album
    GetArtist(name: String!): Artist
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addComment
    editComment
  }
`;

module.exports = typeDefs;
