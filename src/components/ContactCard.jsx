import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";

export const ContactCard = ({contact}) => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className="text-center mb-1">
			
			<div className="card mx-2" style={{width: "12rem"}}>
  <img src="https://img.freepik.com/premium-photo/attractive-female-university-student-with-collection-notebooks-gazing-confidently-into-cam_890329-121.jpg"/>
  <div className="card-body">
    <h4 className="card-title">{contact.name}</h4>
    <li><i className="fa-solid fa-location-dot m-1"></i>{contact.address}</li>
    <li><i className="fa-solid fa-phone m-1"></i>{contact.phone}</li>
    <li><i className="fa-solid fa-envelope m-1"></i>{contact.email}</li>
    <Link to={`/create`} className="btn btn-primary m-1"><i className="fa-solid fa-plus"></i></Link>
    <Link to={`/update/${contact.id}`} className="btn btn-primary m-1"><i className="fa-solid fa-pen"></i></Link>
    <Link to={`/delete`} className="btn btn-primary m-1"><i className="fa-solid fa-trash"></i></Link>
  </div>
</div>
    </div>
	);
}; 