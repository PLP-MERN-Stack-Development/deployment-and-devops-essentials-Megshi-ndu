import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PostForm from '../components/PostForm';
import useApi from '../hooks/useApi';

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: post, request: fetchPost } = useApi();
  const { request: updatePost } = useApi();

  useEffect(() => {
    fetchPost('get', `/api/posts/${id}`);
  }, [id]);

  const handleSave = async (postData) => {
    await updatePost('put', `/api/posts/`, postData);
    navigate(`/posts/`);
  };

  return (
    <div>
      <h1>Edit Post</h1>
      {post && <PostForm onSave={handleSave} initialData={post} />}
    </div>
  );
};

export default EditPost;
