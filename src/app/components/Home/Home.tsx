import { Box, Typography } from "@mui/material";
import { bodyStyle } from "../../../assets/css/style";
import AboutMe from "../AboutMe/AboutMe";
import Intro from "../Intro/Intro";

export default function Home() {
	console.log("Home");

	return (
		<>
			<Box sx={bodyStyle}>
				<Intro />
			</Box>
			<AboutMe />
		</>
	);
}
