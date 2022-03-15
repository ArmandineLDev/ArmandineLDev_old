import React from 'react'
import {About} from './About'
import {Contact} from './Contact'
import {Project} from './Project'
import Skills from './Skills'

export const Body = () => {
    return (
        <div>
            <About />
            <Project />
            <Skills />
            <Contact />
        </div>
    )
}


