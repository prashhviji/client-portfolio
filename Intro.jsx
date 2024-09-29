import React from 'react'
import './intro.css';
import bg from '../../assets/bg_1.png';
import { Link } from 'react-scroll';
import btn from '../../assets/hireme.png'
const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello</span>
        <span className="introText">I'm <span className="introName">Porchezhian
        </span><br/>Digital Artist  & 3D Artist</span>
        <p className="introPara">I am a Digital Artist and 3D Artist, specializing in creating visually <br/> stunning and immersive artworks.</p>
        <Link><button className="btn"><img src={btn} alt=""  className='btnImg' />Hire Me</button></Link>
      </div>
      <img src={bg} alt="profile" className="bg" />
        
    </section>
  )
}

export default Intro
