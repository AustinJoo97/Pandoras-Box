import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query users {
    getUsers {
      _id
      username
      email
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    getUser(username: $username) {
      _id
      username
      email
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
    }
  }
`;

export const QUERY_COMMENTS = gql`
  query comments {
    getComments {
      _id
      commentText
      commentDate
      postedBy {
        _id
        username
      }
      albumCommented {
        _id
        name
        artist
      }
    }
  }
`;

export const QUERY_USER_COMMENTS = gql`
  query comment {
    getUserComments {
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

export const QUERY_ALBUMS = gql`
  query albums{
    getAlbums{
      _id
      name
      artist
      comments {
        _id
        commentText
        commentDate
        postedBy
        albumCommented
      }
    }
  }
`;

export const QUERY_FAVORITE_ALBUMS = gql`
  query favorites{
    getFavoritedAlbums{
      _id
      name
      artist
      comments {
        _id
        commentText
        commentDate
        postedBy
        albumCommented
      }
    }
  }
`;

export const QUERY_SINGLE_ALBUM = gql`
  query singleAlbum($albumID: String!){
    getSingleAlbum(_id: albumID){
      _id
      name
      artist
      comments {
        _id
        commentText
        commentDate
        postedBy
        albumCommented
      }
    }
  }
`;

