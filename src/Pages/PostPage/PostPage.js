import React, { useState, useEffect } from "react";
import Post from "../../Components/Post";
import { useParams } from "react-router-dom";
import postData from "../../mockData/postData";
import networkRequests from "../../services/networkRequests";

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState({
    title: "",
    author: "",
    content: ""
  });

  useEffect(() => {
    networkRequests(`/posts/${id}`)
      .then(result => {
        const { post = {} } = result;
        setPost(post);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return <Post {...post} />;
};

export default PostPage;
