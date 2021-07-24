const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    location: String
    bio: String
    favorites: [Album]
    comments: [Comment]
  }

  type Comment {
    _id: ID!
    commentText: String!
    commentDate: String!
    postedBy: User
    albumCommented: Album
  }

  type Album {
    _id: String!
    name: String!
    artist: String
    images: [String]
    genre: String
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
    getUserComments: [Comment]
    getAlbums: [Album]
    getFavoritedAlbums: [Album]
    getSingleAlbum(albumID: ID): Album
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addNewFavorite(albumID: ID): Album
    deleteFavorite(albumID: ID): Album
    addComment(commentText: String!, albumCommented: String!): Comment
    editComment(commentID: ID!, commentText: String!): Comment
    deleteComment(commentID: ID!): Comment
  }
`;

module.exports = typeDefs;
