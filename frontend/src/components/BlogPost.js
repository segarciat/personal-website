import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  let params = useParams();
  return (
    <main>
      <h2>Blog Post {params.blogId}</h2>
    </main>
  );
};

export default BlogPost;
