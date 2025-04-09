import React, { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useNavigate } from "react-router-dom";

export const CreateContact = () => {
  const [newContact, setNewContact] = useState({ name: "", phone: "", email: "", address: "" });
  const { store, dispatch, createContact } = useGlobalReducer()
  const navigate = useNavigate();
  
  const handleCreateContact = (e) => {
  e.preventDefault();
  createContact(newContact)
  navigate("/")
  }
  return (
    <div className="text-center mt-5">
      <div className="student-form p-3">
        <div className="form-floating mb-3 mt-2">
          <input 
          onChange={(e) => setNewContact({...newContact, name: e.target.value})}
          type="Name" className="form-control" id="floatingInput" placeholder="Name" />
          <label htmlFor="floatingInput">Full Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            onChange={(e) => setNewContact({...newContact, email: e.target.value})}
            type="Email" className="form-control" id="floatingEmail" placeholder="Email" />
          <label htmlFor="floatingInput">Email</label>
        </div>
        <div className="form-floating mb-3">
          <input
          onChange={(e) => setNewContact({...newContact, phone: e.target.value})}
          type="Phone" className="form-control" id="floatingInput" placeholder="Phone" />
          <label htmlFor="floatingInput">Phone Number</label>
        </div>
        <div className="form-floating mb-3">
          <input
          onChange={(e) => setNewContact({...newContact, address: e.target.value})}
          type="Address" className="form-control" id="floatingPassword" placeholder="Address" />
          <label htmlFor="floatingInput">Address</label>
          <a href="#" className="btn btn-primary mt-3" onClick={(e) => handleCreateContact(e)}>Create Student</a>
        </div>
        
      </div>
    </div>
  );
}; 