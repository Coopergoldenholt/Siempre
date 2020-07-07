import React from "react";
import "../css/mask.css";

//mathing color = #DADADA

{
	/* <style>
    .map-container {
      height: 200px;
      position: relative;
    }

    .map-container iframe {
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      position: absolute;
    }
  </style> */
}

class ContactForm extends React.Component {
	render() {
		const formStyle = {
			textAlign: "left",
		};
		const buttonsStyle = {
			margin: "1rem",
			textAlign: "center",
		};
		return (
			<div id="contact-form">
				<div style={{ paddingTop: ".6rem" }}>
					<section class="px-md-5 mx-md-5 text-center dark-grey-text">
						<div id="map-container-google-1" class="map-container mb-5">
							<p class="text-muted">
								<span className="allura"> Always...</span> the perfect location!
							</p>
							<p style={{ marginBottom: "25px" }}>
								Just 25 miles south of Salt Lake City, in Draper, Utah, you
								can't miss us! Just look for the beautiful garden rotunda, which
								is the Siempre's signature trademark, which will be visable from
								I-15, conviently located 5 minutes away. In addition, we are
								just 1/2 mile northeast of the Church of Jesus Chrst of
								Latter-day Saints Draper temple.{" "}
							</p>
							<iframe
								style={{ width: "100%", height: "100%" }}
								src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJv0VI6qCAUocRcwb7Y-VpbVs&key=AIzaSyC-w45KD-7OHVms-rz2Nok-3u9VvKQtM2M"
								frameborder="0"
								allowfullscreen
							></iframe>
						</div>
						<form
							class="text-center p-5"
							style={{
								border: "solid 2px #DADADA",
								marginBottom: "2rem",
								marginLeft: "10px",
								marginRight: "10px",
							}}
							action={this.props.action}
							method="post"
						>
							<p class="h4 ">Interested?</p>
							<p>
								Fill out the form below and a represntative will reach out to
								you as soon as possible!
							</p>

							<input
								type="text"
								name="fullname"
								id="defaultContactFormName"
								class="form-control mb-4"
								placeholder="Name"
							/>

							<input
								type="email"
								id="defaultContactFormEmail"
								class="form-control mb-4"
								placeholder="E-mail"
								name="email"
							/>
							<input
								type="phone"
								id="defaultContactFormNumber"
								class="form-control mb-4"
								placeholder="Phone Number"
								name="phone"
							/>

							<div class="form-group">
								<textarea
									name="message"
									class="form-control rounded-0"
									id="exampleFormControlTextarea2"
									rows="3"
									placeholder="Message"
								></textarea>
							</div>

							<button class="bnt-contact ripple" type="submit">
								Send
							</button>
						</form>

						<div class="row text-center" style={{ margin: 0 }}>
							<div
								class="col-lg-4 col-md-12 mb-4 mb-md-0"
								style={{ maxWidth: "100vw" }}
							>
								<i class="fas fa-map-marker-alt fa-2x"></i>

								<p class="font-weight-bold my-3">Address</p>

								<p class="text-muted">1247 E Mike Weir Dr, Draper, UT 84020</p>
							</div>

							<div class="col-lg-4 col-md-6 mb-4" style={{ maxWidth: "100vw" }}>
								<i class="fas fa-phone fa-2x"></i>

								<p class="font-weight-bold my-3">Phone number</p>

								<p class="text-muted">+ 01 234 567 89</p>
							</div>

							<div
								class="col-lg-4 col-md-6 mb-4 mb-md-0"
								style={{ maxWidth: "100vw" }}
							>
								<i class="fas fa-envelope fa-2x"></i>

								<p class="font-weight-bold my-3">E-mail</p>

								<p class="text-muted">info@siempreutah.com</p>
							</div>
						</div>
					</section>
				</div>
			</div>
		);
	}
}

export default ContactForm;
