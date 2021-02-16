import React from "react";
import PropTypes from "prop-types";
import "./contactList.scss";
import "font-awesome/css/font-awesome.min.css";

const ContactList = ({ items, onDeleteContact }) => (
  <div className="contacts-info-table">
    {/* <p>{items}</p> */}
    <ul className="list">
      {items.map(({ id, name, number }) => (
        <li className="actions" key={id}>
          <span className="listItemText">{name}:</span>
          <span className="listItemText">{number}</span>
          <button
            className="button"
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            <i className="fa fa-trash" aria-hidden="true"></i>
          </button>
        </li>
      ))}
    </ul>
  </div>
);
ContactList.propTypes = {
  items: PropTypes.array,
  onDeleteContact: PropTypes.func,
};
export default ContactList;

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
