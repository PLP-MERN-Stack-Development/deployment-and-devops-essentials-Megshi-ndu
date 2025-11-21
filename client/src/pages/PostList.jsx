import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useApi from '../hooks/useApi';

const PostList = () => {
  const { data: posts, loading, error, request: fetchPosts } = useApi();

  useEffect(() => {
    fetchPosts('get', '/api/posts');
  }, []);

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error loading posts: {error.message}</p>;

  return (
    <div className="post-list">
      {posts && posts.map((post) => (
        <div key={post._id} className="post-preview">
          <h2>
            <Link to={`/posts/${post._id}`}>{post.title}</Link>
          </h2>
          <p>Category: {post.category?.name}</p>
          <p>{post.content.substring(0, 100)}...</p>
          <Link to={`/edit-post/${post._id}`}>Edit</Link>
        </div>
      ))}
    </div>
  );
};

export default PostList;
