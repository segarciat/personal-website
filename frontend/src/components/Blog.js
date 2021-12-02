import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  let blogs = [
    { title: 'Introduction to derivatives', date: Date(), id: 1 },
    { title: 'Coding with pygame', date: Date(), id: 2 },
  ];
  return (
    <div>
      <h1 className="text-center">Blog</h1>
      <nav>
        <ul>
          {blogs.map((blog) => (
            <li key={blog.id}>
              <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Blog;
