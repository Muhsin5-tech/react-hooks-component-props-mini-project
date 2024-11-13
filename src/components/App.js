import React from 'react';
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';
import { blogData } from '../data/blog';

function App() {
  const blogInfo = {
    name: "My Personal Blog",
    about: "This is a blog about my personal journey and thoughts.",
    image: "data:image/jpeg;base64,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",  // Placeholder image
    posts: blogData,
  };

  return (
    <div className='App'>
      <Header name={blogInfo.name} />
      <About image={blogInfo.image} about={blogInfo.about} />
      <ArticleList posts={blogInfo.posts} />
    </div>
  );
}

export default App;
