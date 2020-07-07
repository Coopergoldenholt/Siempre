import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import Lightbox from "react-image-lightbox";
import "../css/lightbox.css";
import imageOne from "../images/ForeverRoomGardenPic.jpg";
import imageTwo from "../images/ForeverRoomPic1.jpg";
import imageThree from "../images/ForeverRoomPicTwo.jpg";
import imageFour from "../images/ForeverRoomPicThree.jpg";
import imageFive from "../images/ForeverRoomPicFour.jpg";
import imageSix from "../images/ForeverRoomPicFive.jpg";
import imageSeven from "../images/RotundaNigth.jpg";
import imageEight from "../images/RotundaWedding.jpg";
import imageNine from "../images/bride 2.jpg";

class LightboxPage extends React.Component {
	state = {
		photoIndex: 0,
		isOpen: false,
		images: [
			`${imageTwo}`,
			`${imageThree}`,
			`${imageFour}`,
			`${imageFive}`,
			`${imageSix}`,
			`${imageOne}`,
			`${imageEight}`,
			`${imageSeven}`,
			`${imageNine}`,
		],
		colWidth: [3, 3, 3, 3, 4, 4, 4, 3, 3, 3, 3],
	};

	renderImages = () => {
		let photoIndex = -1;
		const { images } = this.state;

		return images.map((imageSrc, index) => {
			photoIndex++;
			const privateKey = photoIndex;
			return (
				// <MDBCol md={this.state.colWidth[index]} key={photoIndex}>

				<img
					style={{
						width: "300px",
						height: "300px",
						objectFit: "cover",
						margin: "0",
					}}
					src={imageSrc}
					alt="Gallery"
					className="z-depth-1"
					onClick={() =>
						this.setState({ photoIndex: privateKey, isOpen: true })
					}
				/>

				// </MDBCol>
			);
		});
	};

	render() {
		const { photoIndex, isOpen, images } = this.state;
		return (
			<>
				<div
					id="forever-room"
					style={{
						display: "flex",
						alignItems: "center",
						flexDirection: "column",
					}}
				>
					<h3 style={{ color: "#4f4f4f" }}>Forever Room</h3>
					<hr
						className=""
						style={{
							margin: "auto",
							width: "55%",
							backgroundColor: "#4f4f4f",
							marginBottom: ".3rem",
						}}
					/>
				</div>
				<MDBContainer className=" p-3">
					<div className="mdb-lightbox p-3">
						<MDBRow style={{ justifyContent: "center" }}>
							{this.renderImages()}
						</MDBRow>
					</div>
					{isOpen && (
						<Lightbox
							mainSrc={images[photoIndex]}
							nextSrc={images[(photoIndex + 1) % images.length]}
							prevSrc={images[(photoIndex + images.length - 1) % images.length]}
							imageTitle={photoIndex + 1 + "/" + images.length}
							onCloseRequest={() => this.setState({ isOpen: false })}
							onMovePrevRequest={() =>
								this.setState({
									photoIndex: (photoIndex + images.length - 1) % images.length,
								})
							}
							onMoveNextRequest={() =>
								this.setState({
									photoIndex: (photoIndex + 1) % images.length,
								})
							}
						/>
					)}
				</MDBContainer>
				<hr
					className=""
					style={{
						margin: "auto",
						width: "95%",
						backgroundColor: "#4f4f4f",
						marginBottom: "1.3rem",
					}}
				/>
			</>
		);
	}
}

export default LightboxPage;
