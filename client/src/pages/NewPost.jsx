import React from 'react';
import { useNavigate } from 'react-router-dom';
import PostForm from '../components/PostForm';
import useApi from '../hooks/useApi';

const NewPost = () => {
  const navigate = useNavigate();
  const { request: createPost } = useApi();

  const handleSave = async (postData) => {
    await createPost('post', '/api/posts', postData);
    navigate('/');
  };

  return (
    <div>
      <h1>Create New Post</h1>
      <PostForm onSave={handleSave} />
    </div>
  );
};

export default NewPost;
