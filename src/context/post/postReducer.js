import {
  GET_POSTS,
  GET_USER_POST,
  GET_POST,
  ADD_POST,
  UPDATE_POST,
  DELETE_POST,
  POST_ERROR,
  SET_LOADING,
  SET_CURRENT,
  CLEAR_CURRENT,
} from "../types";

// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        userPosts: [action.payload, ...state.userPosts],
      };
    case GET_USER_POST:
      return {
        ...state,
        userPosts: action.payload,
        loading: false,
      };
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case POST_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
