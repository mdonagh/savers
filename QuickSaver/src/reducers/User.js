import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  CLEAR_SERVER_ERROR,
  CHOOSE_CATAGORY_SUCCESS,
  CHOOSE_CATAGORY_FAILURE,
  REMOVE_CATAGORY_SUCCESS,
  REMOVE_CATAGORY_FAILURE,
  LIKE_DISCOUNT_SUCCESS,
  LIKE_DISCOUNT_FAILURE,
  REMOVE_DISCOUNT_LIKE_SUCCESS,
  REMOVE_DISCOUNT_LIKE_FAILURE,
  UPDATE_USER_SUCCESS,
} from '../constants/User';

const initialState = {
  id: 0,
  email: '',
  fullName: '',
  imgURL: '',
  serverError: '',
  resetPassword: false,
  selected_catagories: [],
  all_catagories: [],
  user_discounts: [],
  created_at: '',
};

export default function PortfolioReducer(state = initialState, action) {
  console.log('action', action)
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        id: action.details.id,
        email: action.details.email,
        fullName: action.details.full_name,
        imgURL: action.details.img_url,
        resetPassword: action.details.reset_password,
        serverError: '',
        selected_catagories: action.details.selected_catagories,
        all_catagories: action.details.all_catagories,
        user_discounts: action.details.user_discounts,
        created_at: action.details.created_at,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        serverError: 'Wrong email or password.',
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        id: action.details.id,
        email: action.details.email,
        fullName: action.details.full_name,
        serverError: '',
        all_catagories: action.details.all_catagories,
        user_discounts: action.details.user_discounts,
        created_at: action.details.created_at,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        serverError: 'Email is already taken.',
      };
    case CLEAR_SERVER_ERROR:
      return {
        ...state,
        serverError: '',
      };
    case CHOOSE_CATAGORY_SUCCESS:
      return {
        ...state,
        selected_catagories: action.details.selected_catagories,
      };
    case CHOOSE_CATAGORY_FAILURE:
      return { ...state };
    case REMOVE_CATAGORY_SUCCESS:
      return {
        ...state,
        selected_catagories: action.details.selected_catagories,
      };
    case REMOVE_CATAGORY_FAILURE:
      return { ...state };
    case LIKE_DISCOUNT_SUCCESS:
      return {
        ...state,
        user_discounts: action.details.user_discounts,
      };
    case LIKE_DISCOUNT_FAILURE:
      return { ...state };
    case REMOVE_DISCOUNT_LIKE_SUCCESS:
      return {
        ...state,
        user_discounts: action.details.user_discounts,
      };
    case REMOVE_DISCOUNT_LIKE_FAILURE:
      return { ...state };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        imgURL: action.details.img_url,
      };
  }
  return state;
}
