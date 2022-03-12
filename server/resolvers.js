const resolvers = {
  Query: {
    // Returns an array of tracks that will be used to populate
    // the client homepage grid
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackApi.getTracksForHome();
    },
  },
};

module.exports = resolvers;
