import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { ContactCard } from "../components/ContactCard";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className="text-center">
		<h1>Welcome to La Salle University!!</h1>
	        <ContactCard/>
			<ContactCard/>
			<ContactCard/>
			<ContactCard/>
		</div>
	);
}; 