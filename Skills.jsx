import React from 'react';
import './Skills.css';
import design  from '../../assets/design1.png';
import design1 from '../../assets/digital1.png';
import story from '../../assets/story.png';

const Skills = () => {
  return (
    <section id='skills'>
      <div className="skillTitle">
      <span >Who am I</span>
      </div>
  
        <span className="skillDesc">I'm a skilled 3D and digital artist, creating detailed, immersive visuals with a strong focus on realism and creativity.</span>
        <div className="skillBars">
          <div className="skillBar">
            <img src={design} alt="" className="skillBarImg" />
            <p>3D artist</p>
          </div>

          <div className="skillBar">
            <img src={design1} alt="" className="skillBarImg" />
            <p>Digital Artist</p>
          </div>

          <div className="skillBar">
            <img src={story} alt="" className="skillBarImg" />
            <p>Story teller</p>
          </div>
        </div>

        <div className="descp2"><h1>Anything creative i do it</h1></div>
        
    </section>
    
  );
}

export default Skills;
