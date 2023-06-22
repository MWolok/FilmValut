import "./Home.css";

const Contact = () => {
	return (
		<section id="contact" className="contact py-5">
			<h2 className="section-title">About Us</h2>
			<div className="underline-home"></div>

			<div className="container">
				<div className="row text-center contact-us">
					<div className="col-sm-6 col-lg-4 contact-item order-1">
						<h3>Headquarters</h3>
						<p>ul. Sezamkowa 0</p>
						<p>00-000 Kraków</p>
						<p>+48 000 000 000</p>
						<p>mail@mail.pl</p>
					</div>

					<div className="col-lg-4 order-0 order-lg-1">
						<h3>Social media</h3>
						<div className="social-media">
							<a href="#">
								<i className="fab fa-facebook-f"></i>
							</a>
							<a href="#">
								<i className="fab fa-twitter"></i>
							</a>
							<a href="#">
								<i className="fab fa-linkedin-in"></i>
							</a>
						</div>
					</div>

					<div className="col-sm-6 col-lg-4 contact-item order-1">
						<h3>Our partners</h3>
						<p>-Soon-</p>
						<p>-Soon-</p>
						<p>-Soon-</p>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Contact;
