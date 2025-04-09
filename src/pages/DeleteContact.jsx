import React, {useEffect} from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useParams } from "react-router-dom";
import { deleteContact } from "../hooks/actions";

export const DeleteContact = () => {

  const {store, dispatch} =useGlobalReducer()
  const {id} = useParams()

  useEffect(() => {
    deleteContact(dispatch, {id:id})
  }, [])
  
	return (
    <div className="text-center"></div>
	);
}; 