const resolvers = {
  Query: {
    // Returns an array of tracks that will be used to populate
    // the client homepage grid
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackApi.getTracksForHome();
    },
  },

  Track: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.trackApi.getAuthor(authorId);
    },
  },
};

module.exports = resolvers;
