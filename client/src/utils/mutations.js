import { gql } from '@apollo/client';

// Working
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// Working
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;


export const ADD_NEW_FAVORITE = gql`
  mutation addFavorite($albumID: String!){
    addNewFavorite(albumID: $albumID){
      _id
      name
      artist
      images
      genre
      comments {
        _id
        commentText
        commentDate
        postedBy {
          _id
          username
          location
        }
      }
    }
  }
`;

export const DELETE_FAVORITE = gql`
  mutation deleteFavorite($albumID: String!){
    deleteFavorite(albumID: $albumID){
      _id
      name
    }
  }
`;

export const ADD_COMMENT = gql`
mutation addComment($commentText: String!, $albumCommented: String!){
  addComment(commentText: $commentString, albumCommented: $albumCommented){
    _id
    commentText
    commentDate
    albumCommented {
      _id
      name
      artist
    }
  }
}
`;

export const EDIT_COMMENT = gql`
mutation editComment($commentID: ID!, $commentText: String!){
  editComment(commentID: $commentID, commentText: $commentString){
    _id
    commentText
    commentDate
    postedBy {
      _id
      username
      location
    }
    albumCommented {
      _id
      name
      artist
    }
  }
}
`;

export const DELETE_COMMENT = gql`
mutation deleteComment($commentID: ID!){
  deleteComment(commentID: $commentID){
    _id
    commentText
    commentDate
    postedBy {
      _id
      username
      location
    }
    albumCommented {
      _id
      name
      artist
    }
  }
}
`;