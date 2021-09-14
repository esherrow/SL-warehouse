const { AuthenticationError } = require('apollo-server-express');
const { User, Thought, Waitlist } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
    users: async () => {
      return User.find()
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
    },
    waitlist: async () => {
      return Waitlist.find()
    }
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
  
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect user credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
    ADD_TO_WAIT: async (parent, args) => {
      const wait = await Waitlist.create(args);

      return (wait);
    }
  }
};

module.exports = resolvers;
