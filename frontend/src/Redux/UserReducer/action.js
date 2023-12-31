import axios from "axios";

import {
  USRES_REQUEST_PENDING,
  USRES_REQUEST_FAILURE,
  USRES_REQUEST_SUCCESS,
  ADD_USERS_SUCCSESS,
  SINGLE_USERS_SUCCESS,
  PATCH_USERS_SUCCSESS,
  DELELE_USERS_SUCCESS,
} from "./actionTypes";

// post the user

export const addUserstData = (adData) => (dispatch) => {
  dispatch(req_users());
  axios
    .post("https://usermanagement-9gy2.onrender.com/users/postuser", adData)
    .then((res) => {
      //   console.log(res);
      dispatch(add_users());
    })
    .catch((err) => {
      //   console.log(err);
      dispatch(fai_users());
    });
};

// get the users
export const usersData = (dispatch) => {
  // Complete get products functionality here
  dispatch(req_users());
  axios
    .get(`https://usermanagement-9gy2.onrender.com/users/getuser`)
    .then((res) => {
      // console.log(res);
      dispatch(suc_users(res.data));
    })
    .catch((err) => {
      console.log(err);
      dispatch(fai_users());
    });
};

// delete the users
export const deleteUsers = (id) => (dispatch) => {
  dispatch(req_users());

  axios
    .delete(`https://usermanagement-9gy2.onrender.com/users/deleteuser/${id}`)
    .then((res) => {
      dispatch({ type: DELELE_USERS_SUCCESS });
    })
    .catch((err) => {
      dispatch(fai_users());
    });
};

// update the users
// /updateuser/:id
export const editdata = (dataobj, id) => (dispatch) => {
  dispatch(req_users());
  axios
    .patch(
      `https://usermanagement-9gy2.onrender.com/users/updateuser/${id}`,
      dataobj
    )
    .then((res) => {
      dispatch({ type: PATCH_USERS_SUCCSESS });
    })
    .catch((err) => {
      dispatch(fai_users());
    });
};
export const req_users = () => {
  return { type: USRES_REQUEST_PENDING };
};
export const suc_users = (payload) => {
  return { type: USRES_REQUEST_SUCCESS, payload };
};
export const fai_users = () => {
  return { type: USRES_REQUEST_FAILURE };
};
export const add_users = () => {
  return { type: ADD_USERS_SUCCSESS };
};
export const single_users = () => {
  return { type: SINGLE_USERS_SUCCESS };
};
