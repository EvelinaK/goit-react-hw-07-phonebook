import { createSelector } from "@reduxjs/toolkit";

export const getLoading = (state) => state.contacts.loading;
export const getFilter = (state) => state.contacts.filter;
export const getAllCont = (state) => state.contacts.items;

// export const getVisibleContacts = (state) => {
//   const filter = getFilter(state);
//   const items = getAllCont(state);
//   const normalizedFilter = filter.toLowerCase();
//   return items.filter(({ name }) =>
//     name.toLowerCase().includes(normalizedFilter)
//   );
// };
export const getVisibleContacts = createSelector(
  [getAllCont, getFilter],
  (items, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return items.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }
);
