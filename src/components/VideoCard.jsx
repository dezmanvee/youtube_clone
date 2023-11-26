import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import {CheckCircle} from '@mui/icons-material';

import {
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle
} from "../utils/constants";


const VideoCard = ({ video }) => {

  const {
    id: { videoId },
    snippet,
  } = video;

  return (
    <Card sx={{ width: { xs: '100%', md: '320px'}, borderRadius: 0, boxShadow: 'none'}}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: 340, height: 180 }}
        />
      </Link>
      <CardContent sx={{ background: "#1e1e1e", height: 106 }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography
            variant="subtitle1"
            sx={{ color: "#fff", fontWeight: "bold" }}
          >
            {`${snippet?.title.slice(0, 60)}...` ||
              `${demoVideoTitle?.title.slice(0, 60)}...`}
          </Typography>
        </Link>

        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
          <Typography
            variant="subtitle2"
            sx={{ color: "gray", fontWeight: "bold" }}
          >
            {`${snippet?.channelTitle.slice(0, 60)}` ||
              `${demoChannelTitle?.demoChannelTitle.slice(0, 60)}`}

          <CheckCircle sx={{ fontSize: 12, ml: "5px"}}/>
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};
export default VideoCard;
