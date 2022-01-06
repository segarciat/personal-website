import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import GalleryItem from './GalleryItem';
import JumpAdventureSample from '../images/jump-adventure-sample.png';
import BlastZoneSample from '../images/blast-zone-sample.png';

const PortfolioGallery = () => {
  const SWIPE_TIMEOUT = 250;
  const SWIPE_X_THRESHOLD = 50;
  const projects = [
    {
      title: 'Blast Zone',
      image: BlastZoneSample,
      description:
        'A 2D topdown tank battle game where the user faces an AI tank.',
    },
    {
      title: 'Jump Adventure',
      image: JumpAdventureSample,
      description:
        'A 2D platformer game where the player races time to obtain all stage artifacts.',
    },
  ];
  // Index of current (leftmost viewable) project.
  const [currentProject, setCurrentProject] = useState(0);

  const handleTouchStart = (e) => {
    function handleTouchEnd(evt, swipeX0, swipeT0) {
      e.target.removeEventListener('touchend', handleTouchEnd);
      const dx = evt.changedTouches[0].clientX - swipeX0;
      const dt = Date.now() - swipeT0;
      if (dt < SWIPE_TIMEOUT || Math.abs(dx) > SWIPE_X_THRESHOLD) {
        if (dx < 0 && currentProject < projects.length - 1) {
          setCurrentProject(currentProject + 1);
          console.log('swipe left');
        } else if (dx > 0 && currentProject > 0) {
          setCurrentProject(currentProject - 1);
          console.log('swipe right');
        }
      }
    }
    let x0 = e.touches[0].clientX;
    let t0 = Date.now();
    e.target.addEventListener('touchend', (evt) => handleTouchEnd(evt, x0, t0));
  };

  return (
    <ul
      onTouchStart={handleTouchStart}
      style={{
        transform: `translate(-${(currentProject / projects.length) * 100}%)`,
        transition: 'transform ease-in-out 0.25s',
      }}
    >
      {projects.map((project) => (
        <GalleryItem key={uuidv4()} {...project} />
      ))}
    </ul>
  );
};

export default PortfolioGallery;
