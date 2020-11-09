import {
  ADD_DETAIL,
  GET_DETAIL,
  UPDATE_DETAIL,
  DELETE_DETAIL
} from "../constant/types";


// actions
export const addDetail = (contact) => ({  
    type: ADD_DETAIL,
    payload:contact,  
});
//get a contact
export const getDetail = (id) => ({
  type: GET_DETAIL,
  payload: id,
});

// update a contact
export const updateDetail = (contact) => ({
  type: UPDATE_DETAIL,
  payload: contact,
});

export const deleteDetail = (id) => ({
  type: DELETE_DETAIL,
  payload: id,
});

