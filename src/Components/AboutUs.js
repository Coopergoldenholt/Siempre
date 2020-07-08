import React from "react";

import imageOne from "../images/fairwayPicTwo.jpg";
import "../css/mask.css";
import "../css/AboutUs.css";

const AboutUs = () => {
	return (
		<div
			class="container"
			style={{ marginBottom: "30px", marginTop: "30px" }}
			id="about-us"
		>
			<section class="dark-grey-text">
				<div class="row pr-lg-5">
					<div class="col-md-7 mb-4">
						<div class="view">
							<img src={imageOne} class="img-fluid" alt="smaple image" />
						</div>
					</div>
					<div class="col-md-5 d-flex align-items-center">
						<div>
							<h2 class=" mb-4">About Siempre</h2>
							<p class="text-muted">
								We <span className="allura"> always</span> believe in...
							</p>

							{/* <p style={{ fontSize: '.9rem' }}>
                Nestled on the hillside of the Wasatch mountains, with
                unforgettable panormaic view, you will say, <span>"I DO"</span>{' '}
                as you fall in love with this location at first sight!
              </p> */}

							<p style={{ fontSize: ".9rem" }}>
								Whether your event style is simple & elegant, modern & classy or
								traditional & romantic, Siempre will{" "}
								<span className="allura" style={{ fontSize: "1.2rem" }}>
									forever
								</span>{" "}
								be your dream location to a stress-free joyful day. Because
								every detail matters, our event coordinators will sit down with
								you to help you plan, prepare, and execute your special day.
							</p>
							{/* <button type="button" class="btn btn-orange btn-rounded mx-0">
                Download
              </button> */}
						</div>
					</div>
				</div>
			</section>
		</div>
		// <div
		//   className="about-us-container"
		//   style={{
		//     backgroundColor: 'white',
		//     marginTop: 0,
		//     marginBottom: 0,

		//     paddingBottom: '30px',

		//     display: 'flex',
		//     alignItems: 'center',
		//   }}
		// >
		//   <section class="px-md-5 text-centre text-lg-left dark-grey-text">
		//     <div class="row" style={{ maxWidth: '100vw' }}>
		//       <div class="col-md-6 mb-4 mb-md-0">
		//         <h3 class="font-weight-bold">About Us</h3>

		//         <p class="text-muted">
		//           <span className="allura"> Always...</span> the perfect location!
		//         </p>
		//         <p style={{ fontSize: '.9rem' }}>
		//           Nestled on the hillside of the Wasatch mountains, with
		//           unforgettable panormaic view, you will say , <span>"I DO"</span>{' '}
		//           as you fall in love with this location at first sight!
		//         </p>
		//         <p style={{ fontSize: '.9rem' }}>
		//           Just 25 miles south of Salt Lake CIty, in Draper Utah, you can't
		//           miss us! Just look for the beautiful garden rotunda, which is the
		//           Siempre's signature trademarkm which will be visable from I-15,
		//           conviently located 5 minutes away. In addition, are just 1/2 mile
		//           northeast of the Church of Jesus Chirst of Latter-dat Siant Draper
		//           temple.
		//         </p>
		//       </div>

		//       <div
		//         class="col-md-6 mb-4 mb-md-0"
		//         style={{ paddingRight: 0, paddingLeft: 0 }}
		//       >
		//         <div class="view overlay z-depth-1-half">
		//           <img
		//             src="https://archive.sltrib.com/images/2017/0716/ldsnumbers_062517~2.jpg"
		//             class="img-fluid"
		//             alt=""
		//           />
		//         </div>
		//       </div>
		//     </div>
		//   </section>
		// </div>
	);
};

export default AboutUs;
