import React, { useReducer } from "react";
import axios from "axios";
import PostContext from "./postContext";
import postReducer from "./postReducer";
import setAuthToken from "../../utils/setAuthToken";
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

const PostState = (props) => {
  const initialState = {
    posts: null,
    userPosts: null,
    post: {},
    loading: false,
    current: null,
    error: null,
  };

  const [state, dispatch] = useReducer(postReducer, initialState);

  // Get Posts
  const getPosts = async () => {
    setLoading();

    try {
      const res = await axios.get("http://localhost:8000/api/posts/all");

      dispatch({
        type: GET_POSTS,
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: POST_ERROR,
        payload: err.response.data.message,
      });
    }
  };

  // Get User Posts
  const getUserPosts = async () => {
    if (localStorage.access_token) {
      setAuthToken(localStorage.access_token);
    }

    setLoading();

    try {
      const res = await axios.get("http://localhost:8000/api/posts");

      dispatch({
        type: GET_USER_POST,
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: POST_ERROR,
        payload: err.response.data.message,
      });
    }
  };

  // Get Post

  // Add Post
  const addPost = async (formData) => {
    if (localStorage.access_token) {
      setAuthToken(localStorage.access_token);
    }

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        "http://localhost:8000/api/posts",
        formData,
        config
      );

      dispatch({
        type: ADD_POST,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: POST_ERROR,
        payload: err.response.data.message,
      });
    }
  };

  // Update Post

  // Delete Post

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  // Set Current

  // Clear Current

  return (
    <PostContext.Provider
      value={{
        posts: state.posts,
        userPosts: state.userPosts,
        post: state.post,
        loading: state.loading,
        current: state.current,
        error: state.error,
        getPosts,
        getUserPosts,
        addPost,
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};

export default PostState;
