import {
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_SET_CURRENCY,
  PRODUCT_SET_LIMIT,
  PRODUCT_SET_PAGE,
  PRODUCT_SET_SEARCH,
} from '../../ActionTypes/ProductTypes/ProductTypes'

function productListReducer(
  state = {
    products: [],
    next: {},
    allDocs: 0,
    search: '',
    currency: 'eur',
    page: 0,
  },
  action,
) {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return {
        loading: true,
        ...state,
      }
    case PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: action.products,
        allDocs: action.allDocs,
        limit: action.limit,
        selected: state.selected,
        currency: state.currency,
        page: state.page,
        search: state.search,
      }
    case PRODUCT_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      }

    case PRODUCT_SET_LIMIT:
      return {
        ...state,
        limit: action.payload,
      }
    case PRODUCT_SET_CURRENCY:
      return {
        ...state,
        currency: action.payload,
      }
    case PRODUCT_SET_PAGE:
      return {
        ...state,
        page: action.payload,
      }
    case PRODUCT_SET_SEARCH:
      return {
        ...state,
        search: action.payload,
      }

    default:
      return state
  }
}
function productDetailsReducer(state = { product: [] }, action) {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true }
    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload }
    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload }

    default:
      return state
  }
}

export { productListReducer, productDetailsReducer } /*eslint-disable */
