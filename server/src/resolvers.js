const resolvers = {
  Query: {
    // Returns an array of tracks that will be used to populate
    // the client homepage grid
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackApi.getTracksForHome();
    },
    // Get a single track by its id
    track: (_, { id }, { dataSources }) => {
      return dataSources.trackApi.getTrack(id);
    },
  },

  Track: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.trackApi.getAuthor(authorId);
    },
    modules: ({ id }, _, { dataSources }) => {
      return dataSources.trackApi.getTrackModules(id);
    },
  },
};

module.exports = resolvers;
