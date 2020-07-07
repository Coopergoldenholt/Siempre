import React from "react";
import {
	MDBCarousel,
	MDBCarouselInner,
	MDBCarouselItem,
	MDBView,
	MDBMask,
} from "mdbreact";
import "../css/carousel.css";
import image1 from "../images/WeddingPhoto2.jpg";
import image2 from "../images/WeddingPhoto3.jpg";
import image5 from "../images/WeddingPhoto.jpg";

const CarouselPage = () => {
	return (
		<MDBCarousel
			activeItem={1}
			length={3}
			className="z-depth-1"
			style={{ marginBottom: "4rem", height: "95vh" }}
		>
			<MDBCarouselInner style={{ height: "95vh" }}>
				<MDBCarouselItem itemId="1">
					<MDBView>
						<img
							className="d-block w-100"
							src={image5}
							alt="First slide"
							style={{ height: "95vh" }}
						/>
						<MDBMask overlay="black-strong" />
					</MDBView>
				</MDBCarouselItem>
				<MDBCarouselItem itemId="2">
					<MDBView>
						<img
							className="d-block w-100"
							src={image1}
							alt="Second slide"
							style={{ height: "95vh" }}
						/>
						<MDBMask overlay="black-strong" />
					</MDBView>
				</MDBCarouselItem>
				<MDBCarouselItem itemId="3">
					<MDBView>
						<img
							className="d-block w-100"
							src={image2}
							alt="Mattonit's item"
							style={{ height: "95vh" }}
						/>
						<MDBMask overlay="black-strong" />
					</MDBView>
				</MDBCarouselItem>
			</MDBCarouselInner>
		</MDBCarousel>
	);
};

export default CarouselPage;
