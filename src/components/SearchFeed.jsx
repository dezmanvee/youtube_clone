import { Box, Typography } from "@mui/material";
import { Videos } from "./";
import { fetchFromAPI } from "../utils/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items);
    });
  }, [searchTerm]);
  return (
    <Box sx={{ p: 2, overflowY: "auto", flex: 2 }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", mb: 2, color: "#fff" }}
      >
        Search result for <span style={{ color: "#fc1503" }}>{searchTerm}</span>{" "}
        videos
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
};
export default SearchFeed;
