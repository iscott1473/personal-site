import React from 'react'
import {withRouteData} from 'react-static'
import convert from 'htmr'
import {Grid, Work, Education, MySkills, Download} from '../styles/resumeStyles.css'
export default withRouteData(({mySkills, education, work}) => (
    <div className = 'resumeGrid primary-style main-font'>
        <div className = 'skills'>
            <div className = 's-contents border'>
                {convert(mySkills.contents)}
            </div>
        </div>
        <div className = 'education'>
            <div className = 'e-contents border'>
                {convert(education.contents)}
            </div>
        </div>
        <div className = 'work'>
            <div className = 'w-contents border'>
                {convert(work.contents)}
            </div>
        </div>
        <div className = 'download'> 
            <div className = 'd-contents border'>
                Download all of this stuff right here:
            </div>
        </div>
    </div>
))