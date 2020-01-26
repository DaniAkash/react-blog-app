import React, { useState, useEffect } from "react";
import Post from "../../Components/Post";
import { useParams } from "react-router-dom";
import postData from "../../mockData/postData";

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState({
    title: "",
    author: "",
    content: ""
  });

  useEffect(() => {
    const requiredPost = postData.find(postItem => postItem.id === id);
    setPost(requiredPost);
  }, []);

  return <Post {...post} />;
};

export default PostPage;
