import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './scss/index.scss';
import App from './App';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Projects from './components/Projects';
import BlogPost from './components/BlogPost';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />}></Route>
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:blogId" element={<BlogPost />} />
          <Route path="projects" element={<Projects />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="*" element={<p>Nothing here</p>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
