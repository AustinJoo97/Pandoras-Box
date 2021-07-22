const { AuthenticationError } = require('apollo-server-express');
const { User, Comment, Album, Artist } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    getUsers: async () => {
      return User.find().populate('favorites', 'comments');
      // return User.find().populate('favorites').populate('comments');
    },
    getSingleUser: async (parent, { username }) => {
      return User.findOne({ username }).populate('favorites', 'comments');
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('favorites', 'comments');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    getComments: async() => {
      return Comment.find().populate('postedBy', 'albumCommented', 'artistCommented');
    },
    getAlbums: async() => {
      return Album.find().populate('artist', 'comments');
    },
    getSingleAlbum: async(parent, { albumName }) => {
      return await Album.findOne({ name: albumName }).populate('artist', 'comments');
    },
    getArtists: async() => {
      return Artist.find().populate('albums', 'comments');
    },
    getSingleArtist: async(parent, { artistName }) => {
      return await Artist.findOne({name: artistName}).populate('albums', 'comments');
    }
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addNewFavorite: async (parent, { albumID, artistID }){
      return
    },
    deleteFavorite: async (parent, { albumID, artistID }){
      return
    },
    addComment: async (parent, { commentText, commentDate, albumCommented, artistCommented }){
      return
    },
    editComment: async (parent, { commentID, commentText, commentDate }){
      return
    },
    deleteComment: async (parent, { commentID }){
      return
    }
  },
};

module.exports = resolvers;
