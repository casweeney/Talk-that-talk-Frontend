import React, { useContext, useEffect } from "react";
import PostForm from "./PostForm";
import Post from "./Post";
import AuthContext from "../../context/auth/authContext";
import PostContext from "../../context/post/postContext";

const Submit = () => {
  const authContext = useContext(AuthContext);
  const { loadUser } = authContext;

  const postContext = useContext(PostContext);
  const { getUserPosts, userPosts } = postContext;

  useEffect(() => {
    loadUser();
    getUserPosts();
  }, []);

  return (
    <div className="container mt-5">
      <PostForm />

      {userPosts !== null &&
        userPosts.map((post) => <Post key={post.id} post={post} />)}
    </div>
  );
};

export default Submit;
