import React, { useState, useEffect } from 'react';
import useApi from '../hooks/useApi';

const PostForm = ({ onSave, initialData = {} }) => {
  const [title, setTitle] = useState(initialData.title || '');
  const [content, setContent] = useState(initialData.content || '');
  const [categoryId, setCategoryId] = useState(initialData.category?._id || '');
  const { data: categories, request: fetchCategories } = useApi();

  useEffect(() => {
    fetchCategories('get', '/api/categories');
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ title, content, category: categoryId });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="category">Category</label>
        <select
          id="category"
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          required
        >
          <option value="">Select a category</option>
          {categories &&
            categories.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.name}
              </option>
            ))}
        </select>
      </div>
      <button type="submit">Save Post</button>
    </form>
  );
};

export default PostForm;
