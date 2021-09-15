import { useState, useEffect } from "react";

const FavoriteEvent = ({ id }) => {
  const [EventDetails, setEventDetails] = useState(null);
  useEffect(() => {
    detailsResults();
  }, []);

  const detailsResults = () => {
    fetch(
      `https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records/${id}`
    )
      .then((result) => result.json())
      .then((response) => {
        setEventDetails(response.record.fields);
      });
  };

  if (!EventDetails) return <p>Loading ...</p>;

  return <p>{EventDetails.title}</p>;
};

export default FavoriteEvent;
