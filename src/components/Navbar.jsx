import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-dark bg-dark">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-1 h1">La Salle University</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-light p-1 ">Add a new Student</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};