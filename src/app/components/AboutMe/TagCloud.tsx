import { useEffect } from "react";

const TagCloudInit = require("TagCloud");

export default function TagCloud() {
	const myTags = ["JavaScript", "CSS", "HTML", "C", "C++", "React", "Python", "Java", "git", "django", "Node.js", "OpenCV", "GCP", "MySQL", "jQuery"];
	const options = {
		// radius in px
		radius: 200,

		// animation speed
		// slow, normal, fast
		maxSpeed: "fast",
		initSpeed: "fast",

		// 0 = top
		// 90 = left
		// 135 = right-bottom
		direction: 135,

		// interact with cursor move on mouse out
		keep: true,
	};

	useEffect(() => {
		TagCloudInit(".tagsContainer", myTags, options);
	}, [myTags]);

	return (
		<>
			<div className="tagsContainer"></div>
		</>
	);
}
