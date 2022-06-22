import { Box, Typography } from "@mui/material";
import { bodyStyle } from "../../../assets/css/style";
import Intro from "../Intro/Intro";

export default function Home() {
  return (
    <>
      <Box sx={bodyStyle}>
        <Intro />
        <br />
      </Box>
      <Box>
        <Typography>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
          veritatis id architecto aliquam soluta quis recusandae itaque
          explicabo illum, suscipit quibusdam magni ex fugit dolores quo
          eligendi voluptates nulla odio.
        </Typography>
      </Box>
    </>
  );
}
