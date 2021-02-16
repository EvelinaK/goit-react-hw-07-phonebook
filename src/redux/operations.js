import axios from "axios";
import {
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  deleteContactsRequest,
  deleteContactsSuccess,
  deleteContactsError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from "./actions";

axios.defaults.baseURL = "http://localhost:4040";

const fetchContacts = () => async (dispatch) => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await axios.get("/contacts");

    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error));
  }

  // axios
  //   .get("/contacts")
  //   .then(({ data }) => dispatch(fetchContactsSuccess(data)))
  //   .catch((error) => dispatch(fetchContactsError(error)));
};

const addContact = (name, number) => (dispatch) => {
  const contact = {
    name,
    number,
  };

  dispatch(addContactsRequest());

  axios
    .post("/contacts", contact)
    .then(({ data }) => dispatch(addContactsSuccess(data)))
    .catch((error) => dispatch(addContactsError(error)));
};

const deleteContact = (ContId) => (dispatch) => {
  dispatch(deleteContactsRequest());

  axios
    .delete(`/contacts/${ContId}`)
    .then(() => dispatch(deleteContactsSuccess(ContId)))
    .catch((error) => dispatch(deleteContactsError(error)));
};

export default {
  fetchContacts,
  addContact,
  deleteContact,
};
