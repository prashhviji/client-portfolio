import React from 'react'
import './Projects.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'
<my></my>
function ProjectCard() {
  return (
    <section id="projects">
      <div className="mywork">
        <div className="mywork-title">
          <h1>My latest work</h1>
          <img src={theme_pattern} alt="" />
        </div>
        <div className="mywork-container">
          {mywork_data.map((work,index)=>{
            return <img key={index} src={work.w_img} alt="" />
          })}
        </div>
        
      </div>
    </section>
  )
}

export default ProjectCard

