import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useApi from '../hooks/useApi';

const Post = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: post, loading, error, request: fetchPost } = useApi();
  const { request: deletePost } = useApi();

  useEffect(() => {
    fetchPost('get', `/api/posts/${id}`);
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      await deletePost('delete', `/api/posts/`);
      navigate('/');
    }
  };

  if (loading) return <p>Loading post...</p>;
  if (error) return <p>Error loading post: {error.message}</p>;

  return (
    post && (
      <div className="single-post">
        <h1>{post.title}</h1>
        <p><strong>Category:</strong> {post.category?.name}</p>
        <p>{post.content}</p>
        <button onClick={handleDelete}>Delete Post</button>
      </div>
    )
  );
};

export default Post;
