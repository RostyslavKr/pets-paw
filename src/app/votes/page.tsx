"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { SearchBar } from "@/components";
import {
  writeImageToLS,
  writeUserActionLogsToLS,
  getUserLogsFromLS,
} from "../../utils";

const API_KEY =
  "live_triBeaZCXy9folcyHumtgrawK9UQYoVHYIhcOTXs53Wzylim899aaE4apzA8MKnJ";

axios.defaults.headers.common["x-api-key"] = API_KEY;

export default function Votes() {
  const [image, setImage] = useState(null);
  const [currentVote, setCurrentVote] = useState(null);
  const [actionLogs, setActionLogs] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(
      ` https://api.thecatapi.com/v1/images/search`
    );

    setImage(response.data[0]);
  };

  useEffect(() => {
    fetchData();
    setActionLogs(getUserLogsFromLS());
  }, []);
  console.log(image);

  useEffect(() => {
    switch (currentVote) {
      case null:
        return;
      case "like":
        writeImageToLS("like", image);
        writeUserActionLogsToLS(image.id, "Likes");
        setActionLogs(getUserLogsFromLS());
        fetchData();
        setCurrentVote(null);
        break;
      case "favorite":
        writeImageToLS("favorite", image);
        writeUserActionLogsToLS(image.id, "Favorites");
        setActionLogs(getUserLogsFromLS());
        fetchData();
        setCurrentVote(null);
        break;
      case "dislike":
        writeImageToLS("dislike", image);
        writeUserActionLogsToLS(image.id, "Dislikes");
        setActionLogs(getUserLogsFromLS());
        fetchData();
        setCurrentVote(null);
        break;
      default:
        null;
    }
  }, [currentVote]);

  return (
    <div>
      <SearchBar />
      {image !== null && (
        <>
          <img src={image.url} alt="cat" width={300} height={200} />
          <button
            onClick={() => {
              setCurrentVote("like");
            }}
          >
            Like
          </button>
          <button
            onClick={() => {
              setCurrentVote("favorite");
            }}
          >
            Favorite
          </button>
          <button
            onClick={() => {
              setCurrentVote("dislike");
            }}
          >
            Dislike
          </button>{" "}
        </>
      )}
      {actionLogs !== null && (
        <ul>
          {actionLogs.map(({ data, id, key }) => (
            <li key={id}>
              <p>
                {data} Image ID: {id} was added to {key}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

//api_key=live_triBeaZCXy9folcyHumtgrawK9UQYoVHYIhcOTXs53Wzylim899aaE4apzA8MKnJ;
