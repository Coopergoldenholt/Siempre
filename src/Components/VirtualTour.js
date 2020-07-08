import React from "react";
const VirtualTour = (props) => (
	<>
		<div
			id="virtual-tour"
			style={{
				display: "flex",
				justifyContent: "center",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			<h2 style={{ color: "#4f4f4f" }}>Take A Virtual Tour</h2>
			<hr
				className=""
				style={{
					margin: "auto",
					width: "65%",
					backgroundColor: "#4f4f4f",
					marginBottom: "1.3rem",
				}}
			/>
			<div className="embed-responsive embed-responsive-16by9">
				<iframe
					style={{ marginRight: 0 }}
					src="https://player.vimeo.com/video/436236537"
					title={props.videoTitle}
					allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
					frameBorder="0"
					allowFullScreen
					autoplay="false"
				/>
			</div>
		</div>
	</>
);
export default VirtualTour;
