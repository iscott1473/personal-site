import React from 'react'
import {withRouteData} from 'react-static'
import convert from 'htmr'

export default withRouteData(({project}) => (
    <div>
        {convert(project.contents)}
    </div>
))