import React from "react";
import SiempreVideo from "../images/SiempreVideo.mp4";
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
					src={SiempreVideo}
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
