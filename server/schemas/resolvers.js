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
    user: async (parent, { _id }) => {
      return User.findOne({ _id })
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
    updateUser: async (parent, args) => {
      const user = await User.findOneAndUpdate({ _id: args._id }, args, { new: true })
      return user
    },
    deleteUser: async (parent, args) => {
      const user = await User.findOneAndDelete(args)
      return('User was deleted!')
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
    },
    deleteWait: async (parent, args) => {
      const wait = await Waitlist.findOneAndDelete(args)
    }
  }
};

module.exports = resolvers;
