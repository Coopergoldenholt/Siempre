import React from "react";
import "./css/bootstrap.min.css";
import "./css/bootstrap-grid.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Nav from "./Components/Nav";
import TopText from "./Components/TopText";
import Carousel from "./Components/Carousel";
import AboutUs from "./Components/AboutUs";
import VirutalTour from "./Components/VirtualTour";
import Vendors from "./Components/Vendors";
import AlwaysRoom from "./Components/AlwaysRoom";
import ForeverRoom from "./Components/ForeverRoom";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";

const { REACT_APP_EMAIL_KEY } = process.env;

function App() {
	console.log(REACT_APP_EMAIL_KEY);

	return (
		<div>
			<Nav />
			<Carousel />
			<TopText />
			<AboutUs />
			<VirutalTour />
			{/* <Vendors
				action={`https://www.flexyform.com/f/a8518e814c55a5ce51db564dd06d57abb4412549`}
			/> */}
			<AlwaysRoom />
			<ForeverRoom />
			<div>pricing</div>
			<ContactUs action="https://www.flexyform.com/f/a8518e814c55a5ce51db564dd06d57abb4412549" />
			<Footer />
		</div>
	);
}

export default App;
