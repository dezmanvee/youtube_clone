import { Box, CardMedia, CardContent, Typography } from "@mui/material";
import {CheckCircle} from '@mui/icons-material'
import { demoProfilePicture } from "../utils/constants";
import { Link } from "react-router-dom";

const ChannelCard = ({ channelDetail }) => {
  return (
    <Box sx={{ boxShadow: "none", borderRadius: "20px", display: 'flex', justifyContent: 'center', alignItems: 'center', width: {xs: '356px', md: '320px'}, height: '326px', margin: 'auto' }}>
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <CardMedia
            image={ channelDetail?.snippet?.thumbnails?.high?.url ||demoProfilePicture
            }
            sx={{
              height: "180px",
              width: "180px",
              borderRadius: "50%",
              border: "1px solid #e3e3e3",
              mb: 2,
            }}
            alt={channelDetail?.snippet?.title}
          />
          <Typography variant="h6">
                {channelDetail?.snippet?.title}
                <CheckCircle sx={{ fontSize: 14, ml: "5px", color: 'gray'}}/>
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography>
                {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};
export default ChannelCard;
