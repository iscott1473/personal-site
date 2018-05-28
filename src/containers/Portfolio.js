import React from 'react'
import {withRouteData} from 'react-static'
import convert from 'htmr'
import '../styles/portfolioStyles.css'

export default withRouteData(({myProjects, whatIDo}) => (
    <div className = 'portfolioGrid primary-style main-font'>
        <div className = 'whatIDo'>
            <div className = 'wid-contents border'>
                {convert(whatIDo.contents)}
            </div>
        </div>
        <div className = 'projects'>
            <div className = 'pr-contents border'>
                <div>These are all of the projects I have worked on</div>
                {myProjects.map(project => (
                    <div key = {project.slug} className = 'project-contents border'>
                        {convert(project.contents)}
                    </div>
                
                ))}
            </div>
        </div>
    </div>
))