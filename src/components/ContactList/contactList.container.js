import { connect } from "react-redux";
import operations from "../../redux/operations";
import { getVisibleContacts } from "../../redux/selectors";
import ContactList from "./contactList";

// const getVisibleContacts = (items, filter) => {
//   const normalizedFilter = filter.toLowerCase();

//   return items.filter(({ name }) =>
//     name.toLowerCase().includes(normalizedFilter)
//   );
// };

const mapStateToProps = (state) => ({
  items: getVisibleContacts(state),
});

// const mapStateToProps = (state) => {
//   const { filter, items } = state.contacts;
//   const normalizedFilter = filter.toLowerCase();

//   const filtr = items.filter(({ name }) =>
//     name.toLowerCase().includes(normalizedFilter)
//   );

//   return {
//     items: filtr,
//   };
// };

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (id) => dispatch(operations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
