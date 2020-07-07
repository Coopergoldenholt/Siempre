import React, { useState, useEffect } from "react";
import { MDBContainer, MDBBtn, MDBIcon, MDBRow, MDBCol } from "mdbreact";
import "../css/mask.css";

const TopText = ({ children }) => {
	const [isMobile, setIsMobile] = useState(false);
	const [scroll, scrollTo] = useState(true);

	useEffect(() => {
		if (window.innerWidth < 600) {
			setIsMobile(true);
		}
		if (window.innerWidth > 600) {
			setIsMobile(false);
		}
	}, [window.innerWidth]);

	return (
		<div
			id="home"
			style={{
				display: "flex",
				color: "white",
				height: "95vh",
				width: "100%",
				top: "5vh",
				right: 0,
				alignItems: "center",
			}}
		>
			<MDBContainer>
				<MDBRow>
					<MDBCol md="12" className="white-text text-center">
						<h2
							className="pt-5 siempre-title allura"
							style={{ fontSize: "4rem", fontFamily: "tahom" }}
						>
							Siempre
						</h2>
						<h2 className="h1-responsive font-weight-bold white-text mb-0 allura">
							Always & Forever
						</h2>
						<hr className="hr-light my-4 w-75" style={{ margin: "auto" }} />
						<p
							className="subtext-header h4-responsive mt-2 mb-4"
							style={isMobile ? { fontSize: "1rem" } : { fontSize: "1.3rem" }}
						>
							Siempre is Utah's newest and most stunning wedding and event venue
							that you've always dreamed of. Nestled perfectly on the hillside
							of the Wasatch Mountains in Draper, just 5 minutes from I-15,
							Siempre has{" "}
							<span style={{ fontSize: "1.3rem" }} className="allura">
								forever
							</span>{" "}
							panoramic views that will take your breath away as you say...{" "}
							<p style={{ fontSize: "1.3rem" }} className="allura">
								I Do!
							</p>
						</p>
						{/* <MDBBtn
            style={{ backgroundColor: 'transparent' }}
            className="main-button"
          >
            <MDBIcon icon="home" className="mr-2" /> Visit us
          </MDBBtn> */}
						{/* <Link to="/#contact-form"> */}
						<button
							type="button"
							className="bnt-home ripple"
							onClick={() => scrollTo("#contact-form")}
							// style={{
							//   border: '2px solid #e8dae2',
							//   backgroundColor: 'transparent',
							// }}
						>
							<MDBIcon icon="home" className="mr-2" /> Contact Us
						</button>
						{/* </Link> */}
					</MDBCol>
				</MDBRow>
			</MDBContainer>
		</div>
	);
};

export default TopText;
