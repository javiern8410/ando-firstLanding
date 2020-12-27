import React from 'react';
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ToTopBtn from "../components/totopbtn/ToTopBtn";

const Sales = () => {
	return (
		<React.Fragment>
			<main className="grid-container" id="top">
				<Header />
				<div>Hola</div>
				<Footer />
				<ToTopBtn />
			</main>
		</React.Fragment>
	);
}

export default Sales;