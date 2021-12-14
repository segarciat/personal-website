import React, { useEffect, useState } from 'react';
import brandPhoto from '../images/brand-photo.jfif';

const Home = () => {
  const brandPhotoStyle = {
    height: '10rem',
    width: '10rem',
    border: 'none',
    borderRadius: '50%',
    marginRight: '0.5rem',
  };
  const [role, setRole] = useState({});

  useEffect(() => {
    const roles = [
      { title: 'Programmer', icon: 'fas fa-terminal' },
      { title: 'Mathematician', icon: 'fas fa-infinity' },
      { title: 'Teacher', icon: 'fas fa-graduation-cap' },
    ];
    let index = 0;
    setRole(roles[0]);
    setInterval(() => {
      index = (index + 1) % roles.length;
      setRole(roles[index]);
    }, 4000);
  }, []);
  return (
    <React.Fragment>
      <section id="hero">
        <img style={brandPhotoStyle} src={brandPhoto} alt="Sergio" />
        <h1>Sergio E. Garcia T.</h1>
        <strong className="role">
          <i className={role.icon}></i> {role.title}
        </strong>
        <p>
          I'm a self-taught programmer, primarily interested in web development
          and game development.
        </p>
      </section>
    </React.Fragment>
  );
};

export default Home;
