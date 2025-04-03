import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const ContactCard = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className="text-center mb-1">
			
			<div className="card w-50">
  <div class="card-body">
    <h5 class="card-title">John Legend</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
  </div>
</div>
		</div>
	);
}; 