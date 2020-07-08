import React from "react";

const Footer = () => {
	return (
		<footer
			class="font-small"
			style={{ backgroundColor: "#e8dae2", height: "20vh" }}
		>
			<div
				class="container"
				style={{
					backgroundColor: "#d0c4cb",
					height: "15vh",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<div class="row">
					<div style={{ width: "100vw" }}>
						<div
							class=" "
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								height: "100%",
							}}
						>
							<a
								href="https://www.facebook.com/Siempre-586783231815269/"
								class="fb-ic"
							>
								<i
									class="fab fa-facebook-f fa-lg white-text fa-2x"
									style={{ margin: "1rem" }}
								>
									{" "}
								</i>
							</a>

							{/* <a class="tw-ic">
								<i class="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x">
									{" "}
								</i>
							</a> */}

							{/* <a class="gplus-ic">
								<i class="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x">
									{" "}
								</i>
							</a> */}

							{/* <a class="li-ic">
								<i class="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x">
									{" "}
								</i>
							</a> */}

							<a
								href="https://www.instagram.com/siempreutah/?igshid=1kihrshzzdj1q"
								class="ins-ic"
							>
								<i
									class="fab fa-instagram fa-lg white-text fa-2x"
									style={{ margin: "1rem" }}
								>
									{" "}
								</i>
							</a>

							{/* <a class="pin-ic">
								<i class="fab fa-pinterest fa-lg white-text fa-2x"> </i>
							</a> */}
						</div>
					</div>
				</div>
			</div>

			<div class="footer-copyright text-center">
				© 2023 Copyright:
				<a> Siempre</a>
			</div>
		</footer>
	);
};

export default Footer;
