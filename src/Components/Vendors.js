import React from "react";

class Vendors extends React.Component {
	render() {
		const formStyle = {
			textAlign: "left",
		};
		const buttonsStyle = {
			margin: "1rem",
			textAlign: "center",
		};

		return (
			// <div style={{ paddingTop: '.6rem' }} id="contact-form">
			//   <section class="px-md-5 mx-md-5 text-center dark-grey-text">
			//     <form
			//       class="text-center p-5"
			//       style={{
			//         border: 'solid 2px #DADADA',
			//         marginBottom: '2rem',
			//         marginLeft: '10px',
			//         marginRight: '10px',
			//       }}
			//       action={this.props.action}
			//       method="post"
			//     >
			//       <p class="h4 mb-4">Get More Info!</p>

			//       <input
			//         type="text"
			//         name="fullname"
			//         id="defaultContactFormName"
			//         class="form-control mb-4"
			//         placeholder="Name"
			//       />

			//       <input
			//         type="email"
			//         id="defaultContactFormEmail"
			//         class="form-control mb-4"
			//         placeholder="E-mail"
			//         name="email"
			//       />
			//       <input
			//         type="phone"
			//         id="defaultContactFormNumber"
			//         class="form-control mb-4"
			//         placeholder="Phone Number"
			//         name="phone"
			//       />

			//       <div class="form-group">
			//         <textarea
			//           name="message"
			//           class="form-control rounded-0"
			//           id="exampleFormControlTextarea2"
			//           rows="3"
			//           placeholder="Message"
			//         ></textarea>
			//       </div>

			//       <button class="bnt-contact ripple" type="submit">
			//         Send
			//       </button>
			//     </form>
			//   </section>
			// </div>
			<div id="vendors" class="container my-5 py-5">
				<section class="px-md-5 mx-md-5 text-center text-lg-left dark-grey-text">
					<div
						class="row d-flex justify-content-center"
						style={{
							border: "solid 2px #DADADA",
							marginLeft: "10px",
							marginRight: "10px",
							paddingBottom: "1rem",
							paddingTop: "1rem",
						}}
					>
						<div class="col-md-6">
							<form
								class="text-center"
								action={this.props.action}
								method="post"
							>
								<h3 class="font-weight-bold mb-4">
									Interested in Becoming a Vendor?
								</h3>

								<input
									type="text"
									name="Name"
									id="defaultContactFormName"
									class="form-control mb-4"
									placeholder="Name"
								/>
								<input
									type="text"
									name="Business Name"
									id="defaultContactFormBuisnessName"
									class="form-control mb-4"
									placeholder="Business Name"
								/>

								<input
									type="email"
									name="Email"
									id="defaultContactFormEmail"
									class="form-control mb-4"
									placeholder="E-mail"
								/>
								<input
									type="number"
									name="Phone Number"
									id="defaultContactFormNumber"
									class="form-control mb-4"
									placeholder="Phone"
								/>

								<label>Category</label>
								<select
									name="Business Type"
									class="browser-default custom-select mb-4"
								>
									<option value="" disabled>
										Choose option
									</option>
									<option value="Catering" selected>
										Catering
									</option>
									<option value="Photography & Videography<">
										Photography & Videography
									</option>
									<option value="Cakes">Cakes</option>
									<option value="Hair & Makeup">Hair & Makeup</option>
									<option value="Bridal Gowns & Tuxedos">
										Bridal Gowns & Tuxedos
									</option>
									<option value="DJ & Music">DJ & Music</option>
									<option value="Rentals">Rentals</option>
									<option value="Accomidations">Accomidations</option>
									<option value="Invitations">Invitations</option>
									<option value="Lighting">Lighting</option>
									<option value="Bartending">Bartending</option>
									<option value="Other">Other</option>
								</select>

								<div class="form-group">
									<textarea
										class="form-control rounded-0"
										id="exampleFormControlTextarea2"
										rows="3"
										placeholder="Message"
										name="message"
									></textarea>
								</div>

								{/* <div class="custom-control custom-checkbox mb-4">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="defaultContactFormCopy"
                />
                <label
                  class="custom-control-label"
                  for="defaultContactFormCopy"
                >
                  Send me a copy of this message
                </label>
              </div> */}

								<button
									class="btn btn-block"
									style={{ backgroundColor: "#e8dae2" }}
									type="submit"
								>
									Send
								</button>
							</form>
						</div>
					</div>
				</section>
			</div>
		);
	}
}
export default Vendors;
