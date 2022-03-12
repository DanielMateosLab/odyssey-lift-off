import { gql, useQuery } from "@apollo/client";
import React from "react";
import { Layout, QueryResult } from "../components";
import TrackCard from "../containers/track-card";

export const TRACKS = gql`
  query getTracks {
    tracksForHome {
      id
      title
      author {
        name
        id
        photo
      }
      thumbnail
      length
      modulesCount
    }
  }
`;

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const query = useQuery(TRACKS);

  return (
    <Layout grid>
      <QueryResult {...query}>
        {query.data?.tracksForHome?.map((track) => (
          <TrackCard track={track} />
        ))}
      </QueryResult>
    </Layout>
  );
};

export default Tracks;
