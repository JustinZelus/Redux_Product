/*
 * action types
 */

export const SEARCH_PRODUCT = "SEARCH_PRODUCT";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const IS_OUTSTOCK = "IS_OUTSTOCK";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_INSTOCK: "SHOW_INSTOCK"
};

/*
 * action creators
 */
export function addProduct(product) {
  return { type: ADD_PRODUCT, product };
}
