import { createStore } from "redux";
import productApp from "./reducers";
// import addProduct from "./actions";
const store = createStore(productApp);

console.log(store.getState());

const unsubscribe = store.subscribe(() => console.log(store.getState()));

// const product = {
// category: "Sporting Goods",
// price: "$79.99",
// stocked: true,
// name: "Shoes"
// };

store.dispatch({
  type: "ADD_PRODUCT",
  product: {
    category: "Sporting Goods",
    price: "$79.99",
    stocked: true,
    name: "Shoes"
  }
});

store.dispatch({
  type: "ADD_PRODUCT",
  product: {
    category: "Electronics",
    price: "$59.99",
    stocked: true,
    name: "HyperX MicroPhone"
  }
});

store.dispatch({ type: "IS_OUTSTOCK", index: 7 });
store.dispatch({ type: "IS_OUTSTOCK", index: 6 });
store.dispatch({
  type: "SET_VISIBILITY_FILTER",
  filter: "SHOW_INSTOCK"
});

store.dispatch({ type: "SEARCH_PRODUCT", filterText: "ball" });

unsubscribe();
