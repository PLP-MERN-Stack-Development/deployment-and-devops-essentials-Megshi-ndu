import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Post from './pages/Post';
import NewPost from './pages/NewPost';
import EditPost from './pages/EditPost';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:id" element={<Post />} />
        <Route path="/new-post" element={<NewPost />} />
        <Route path="/edit-post/:id" element={<EditPost />} />
      </Routes>
    </Layout>
  );
}

export default App;
