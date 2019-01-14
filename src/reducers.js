import {
  SEARCH_PRODUCT,
  ADD_PRODUCT,
  IS_OUTSTOCK,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from "./actions";

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  products: [
    {
      category: "Sporting Goods",
      price: "$49.99",
      stocked: true,
      name: "Football"
    },
    {
      category: "Sporting Goods",
      price: "$9.99",
      stocked: true,
      name: "Baseball"
    },
    {
      category: "Sporting Goods",
      price: "$29.99",
      stocked: true,
      name: "Basketball"
    },
    {
      category: "Electronics",
      price: "$99.99",
      stocked: true,
      name: "iPod Touch"
    },
    {
      category: "Electronics",
      price: "$399.99",
      stocked: true,
      name: "iPhone 5"
    },
    {
      category: "Electronics",
      price: "$199.99",
      stocked: true,
      name: "Nexus 7"
    }
  ]
};

function productApp(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      });
    case SEARCH_PRODUCT:
      return Object.assign({}, state, {
        products: state.products.map(product => {
          if (product.name.indexOf(action.filterText) === -1) return;
          return product;
        })
      });
    case ADD_PRODUCT:
      return Object.assign({}, state, state.products.push(action.product));
    case IS_OUTSTOCK:
      return Object.assign({}, state, {
        products: state.products.map((product, index) => {
          if (index === action.index) {
            return Object.assign({}, product, {
              stocked: !product.stocked
            });
          }
          return product;
        })
      });
    default:
      return state;
  }
}

export default productApp;
