import { loadFull } from "tsparticles";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import AvatarPng from "../../../assets/images/AvatarMaker.png";
import ParticlesDiv from "./Particles";
import { KeyboardArrowDown } from "@mui/icons-material";
import Typewriter from "typewriter-effect";
import { display } from "@mui/system";

export default function Intro() {
  const handleType = (count: number) => {
    // access word count number
    console.log(count);
  };

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };

  return (
    <>
      <Box sx={{ position: "relative" }}>
        <ParticlesDiv />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: 400,
            width: "85%",
            zIndex: "10",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Typography sx={{ m: "auto" }}>
            <Typography variant="h3" className="linearGradientText">
              Hi, My name is <br />
              <Typography variant="h1">
                <strong>Pankaj Sharma.</strong>
              </Typography>
            </Typography>

            <Typography variant="h5" sx={{ color: "#d0d0d0" }}>
              I'm a{" "}
              <Typography
                variant="h5"
                sx={{ display: "inline-flex !important", fontWeight: "bold" }}
              >
                <Typewriter
                  options={{
                    strings: [
                      "Full Stack Web Developer",
                      "Shopify App Developer",
                      "Shopify Theme Developer",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Typography>
            </Typography>

            {/* <Typography>
              Hello 
            <Typewriter
                  options={{
                    strings: ["Hello", "World"],
                    autoStart: true,
                    loop: true,
                  }}
                />
            </Typography>
            <h1
              style={{
                paddingTop: "1rem",
                margin: "auto 0",
                fontWeight: "normal",
              }}
            >
              I'm{" "}
              <span style={{ fontWeight: "bold" }}>
                
                <Typewriter
                  options={{
                    strings: ["Hello", "World"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h1> */}

            {/* <Typography variant="h4">
              I am a Full Stack Web Developer
            </Typography> */}
          </Typography>
        </Box>
        <KeyboardArrowDown
          sx={{
            width: "100%",
            position: "absolute",
            bottom: "20px",
            textAlign: "center",
          }}
          fontSize="large"
          className="ball"
        />

        {/* <Typography
          className="ball"
          sx={{
            width: "100%",
            position: "absolute",
            bottom: "20px",
            textAlign: "center",
          }}
        >
          Scroll Down
        </Typography> */}
        {/* <Box
          p={5}
          sx={{
            height: 400,
            zIndex: "10",
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          }}
        >
          <Grid container sx={{ height: "inherit" }}>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <Typography sx={{ fontWeight: "400", m: "auto" }}>
                  <Typography variant="h2" className="linearGradientText">
                    Hi, My name is <br />
                    <strong>Pankaj Sharma.</strong>
                  </Typography>

                  <Typography variant="h4">
                    I am a Full Stack Web Developer
                  </Typography>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <Avatar
                  src={AvatarPng}
                  sx={{ height: 160, width: 160, m: "auto" }}
                ></Avatar>
              </Box>
            </Grid>
          </Grid>
        </Box>
         */}
      </Box>
    </>
  );
}
