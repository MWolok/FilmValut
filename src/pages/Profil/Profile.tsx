import "./Profile.css";
import netflix from "../../img/platforms/netflix1.jpg";
import hbo from "../../img/platforms/hbop.jpg";
import disney from "../../img/platforms/disney1.jpg";
import { useState } from "react";
import EditProfile from "./EditProfile";
import NavBar from "../../components/NavBar";
import Footer from "../Home/Footer";
import { Link } from "react-router-dom";

const Profil = () => {
const [profilInfo, setProfilInfo] = useState();

const [profilPlatforms, setProfilPlatforms]=useState([])





	return (
		<>
		<NavBar></NavBar>
		<div className="container">
				<div className="main-body">
					<div className="row gutters-sm">
						<div className="col-md-4 mb-3">
							<div className="card">
								<div className="card-body">
									<div className="d-flex flex-column align-items-center text-center">
										<img
											src="https://bootdey.com/img/Content/avatar/avatar7.png"
											alt="Admin"
											className="rounded-circle"
											width="150"
										/>
										<div className="mt-3">
											<h4>John Doe</h4>

											<p className="text-muted font-size-sm">
												Bay Area, San Francisco, CA
											</p>
											<Link className="nav-link" to='/profil/edit'><button  className="btn btn-primary">Edit Profil</button></Link>
											<button className="btn btn-outline-primary">
												Change Pic
											</button>
										</div>
									</div>
								</div>
							</div>
							<div className="card mt-3">
								<ul className="list-group list-group-flush">
									<li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
										<h6 className="mb-0">Gender</h6>
										<span className="text-secondary">Male</span>
									</li>
									<li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
										<h6 className="mb-0">Role</h6>
										<span className="text-secondary">User</span>
									</li>
									<li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
										<h6 className="mb-0">Region</h6>
										<span className="text-secondary">PL</span>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-md-8">
							<div className="card mb-3">
								<div className="card-body">
									<div className="row">
										<div className="col-sm-3">
											<h6 className="mb-0">Full Name</h6>
										</div>
										<div className="col-sm-9 text-secondary">
											Kenneth Valdez
										</div>
									</div>
									<hr />
									<div className="row">
										<div className="col-sm-3">
											<h6 className="mb-0">Email</h6>
										</div>
										<div className="col-sm-9 text-secondary">fip@jukmuh.al</div>
									</div>
									<hr />
									<div className="row">
										<div className="col-sm-3">
											<h6 className="mb-0">UserName</h6>
										</div>
										<div className="col-sm-9 text-secondary">Name</div>
									</div>
									<hr />
									<div className="row">
										<div className="col-sm-3">
											<h6 className="mb-0">Birth Date</h6>
										</div>
										<div className="col-sm-9 text-secondary">
											(320) 380-4539
										</div>
									</div>
									<hr />
									<div className="row">
										<div className="col-sm-3">
											<h6 className="mb-0">crreatedAt</h6>
										</div>
										<div className="col-sm-9 text-secondary">1-1-11111</div>
									</div>
									<hr />
									<div className="row">
										<div className="col-sm-3">
											<h6 className="mb-0">LastActivity</h6>
										</div>
										<div className="col-sm-9 text-secondary">1-11-1111</div>
									</div>
									<hr />
								</div>
							</div>

							<div className="row gutters-sm">
								<div className="col-sm-12 mb-3">
									<div className="card h-100">
										<div className="card-body">
											<h6 className="d-flex align-items-center mb-3">
												Streming Platform
											</h6>
											<img
												src={netflix}
												alt="Admin"
												className="rounded-circle"
												width="50"
											/>
											<img
												src={hbo}
												alt="Admin"
												className="rounded-circle"
												width="50"
											/>
											<img
												src={disney}
												alt="Admin"
												className="rounded-circle"
												width="50"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		<Footer></Footer>
		</>
	);
};
export default Profil;
