import React, { useEffect, useState  } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const UpdateContact = () => {
  const { id }= useParams();
  const [currentContact, setCurrentContact] = useState({name:"", phone:"", email:"", address:"", id:""})
  const {store, dispatch, updateContact, getContacts} =useGlobalReducer()
  const navigate = useNavigate();
 
  useEffect(() => {
    getContacts()
  }, [])

	useEffect(() => {
    let contact = store.contacts?.filter((contact, index) => {return contact.id == id})
    if (contact.lenght > 0) {
      setCurrentContact(contact[0])
    }
  }, [store.contacts])

  const handleUpdateContact = (e) => {
    e.preventDefault();
    updateContact({...currentContact,id:id});
    navigate("/")
  }
  return (
    <div className="text-center mt-5">
      <div className="student-form p-3">
        <div className="form-floating mb-3 mt-2">
          <input 
          onChange={(e) => setCurrentContact({...currentContact, name: e.target.value})}
          placeholder={currentContact?.name}
          type="Name" className="form-control" id="floatingInput" />
          <label htmlFor="floatingInput">Full Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            onChange={(e) => setCurrentContact({...currentContact, email: e.target.value})}
            placeholder={currentContact?.email}
            type="Email" className="form-control" id="floatingEmail" />
          <label htmlFor="floatingInput">Email</label>
        </div>
        <div className="form-floating mb-3">
          <input
          onChange={(e) => setCurrentContact({...currentContact, phone: e.target.value})}
          placeholder={currentContact?.phone}
          type="Phone" className="form-control" id="floatingInput" />
          <label htmlFor="floatingInput">Phone Number</label>
        </div>
        <div className="form-floating mb-3">
          <input
          onChange={(e) => setCurrentContact({...currentContact, address: e.target.value})}
          placeholder={currentContact?.address}
          type="Address" className="form-control" id="floatingPassword"/>
          <label htmlFor="floatingInput">Address</label>
          <a href="#" className="btn btn-primary mt-3" onClick={(e) => handleUpdateContact(e)}>Update Student</a>
        </div>
        
      </div>
    </div>
  );
}; 