import React from 'react'
import { withRouteData, Router, Route } from 'react-static'
import convert from 'htmr'
import '../styles/app.css'
import '../styles/homeStyles.css'
import '../../public/hero.jpg'
//

export default withRouteData(({video, aboutMe, qualifications, myProjects}) => (
  <div className = 'homeGrid primary-style main-font'>
    <div className = 'video'>
      <div className = 'heroText primary-style'>
        <h1>Hi. I'm Ian</h1>
        <h3 className = 'secondary-font'>
          I like to code stuff
        </h3>
      </div>
    </div>
    <div className = 'aboutMe'>
      <div className = 'am-contents primary-style border'>
        {convert(aboutMe.contents)}
      </div>
    </div>
    <div className = 'mySkills'>
      <div className = 'ms-contents secondary-style-invert border'>
        {convert(qualifications.contents)}
      </div>
    </div>
    <div className = 'portfolio'>
      <div className = 'p-contents border'>
        <div>This is my portfolio</div>
        {myProjects.map(project => (
          <div key = {project.slug} className = 'border project-contents'>
            {convert(project.contents)}
          </div>
        ))}
      </div>
    </div>
  </div>
))
