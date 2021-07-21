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
    albumID: String!
    name: String!
    artist: String
    favorited: Int
    comments: [Comment]
  }

  type Artist{
    _id: String!
    albumID: String!
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
    me: User
    getComments: [Comment]
    getAlbums: [Album]
    getSingleAlbum(name: String!): Album
    GetArtist(name: String!): Artist
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addNewFavorite(albumID: ID, artist: ID): Album
    deleteFavorite(albumID: ID, artist: ID): Album
    addComment(commentText: String!, commentDate: String!, albumCommented: String, artistCommented: String): Comment
    editComment(commentID: ID!): Comment
    deleteComment(commentID: ID!): Comment
  }
`;

module.exports = typeDefs;
