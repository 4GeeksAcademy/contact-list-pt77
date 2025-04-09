import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-dark bg-dark">
			<div className="container">
				<div className="icon">
				<Link to="/">
				<i className="fa-solid fa-building-columns fa-4x text-light"></i>
				</Link>
				</div>
				<div className="Add">
					<Link to="/demo">
					<Link to={`/create`} className="btn btn-primary m-1">Add a New student</Link>
					</Link>
				</div>
			</div>
		</nav>
	);
};