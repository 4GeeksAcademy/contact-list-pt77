import React, { useState, useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { ContactCard } from "../components/ContactCard";


export const Home = () => {
  const [contacts, setContacts] = useState([]);
  const { store, dispatch, fetchAgenda } = useGlobalReducer()

  useEffect(() => {
    fetchAgenda()
  }, [])

  useEffect(() => {
    setContacts(store.contacts)
    console.log(store.contacts)
  }, [store.contacts])
   
  
  return (
    
    <div className="text-center">
      <h1 className="bg bg-dark"> Student Portal</h1>
  <div className="d-flex justify-content-center">
      {
        
        contacts?.length > 0
            ? contacts.map((contact, index) => (
               <ContactCard key={index} contact={contact} />
            ))
            
          :<h1> you </h1>
      }
      </div>
    </div>
  );
}; 