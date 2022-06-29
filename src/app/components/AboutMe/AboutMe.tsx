import { Box, Grid, Typography } from "@mui/material";
import TagCloud from "./TagCloud";

export default function AboutMe() {
	console.log("AboutMe");

	return (
		<Box
			sx={{
				p: "5rem",
				backgroundColor: "#111",
				color: "#d0d0d0",
			}}
		>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
					<Box>
						<Typography variant="h3">About Me</Typography>
						<br />
						<Typography>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nam nulla sed laborum recusandae magni nostrum, sunt voluptates maiores dolore facere laboriosam in
							quaerat voluptatibus earum? Tempore quibusdam ab perferendis?
						</Typography>
					</Box>
				</Grid>
				<Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
					<TagCloud />
				</Grid>
			</Grid>
		</Box>
	);
}
