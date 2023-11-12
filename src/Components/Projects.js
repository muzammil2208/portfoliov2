import React from 'react'
import Arrow from './Icons/Arrow'

function Projects() {
  return (
    <div class="projects-main-container">
        <h1 class='projects-title'>Projects</h1>
        <div class='projects-container'>
            
            <div class='p-container'>
                <a class="project-title" href="https://weatherapp-lmmu.onrender.com">Weather app<Arrow/></a>
                <p class='project-description'> A simple web app which uses open weather api to show current weather information in your current city as well as for cities you search for.</p>
                <div class='project-skills-container'>
                    <span class="project-skills">Javascript</span><span class="project-skills" >HTML</span><span class="project-skills">CSS</span>
                </div>
            </div>
            <div class='p-container'>
                <a href="https://basic-cal.onrender.com" class="project-title">Calculator app<Arrow/></a>
                <p class='project-description'> A simple web app made using javascript,html and css and added some intresting features such as Dark and light mode</p>
                <div class='project-skills-container'>
                    <span class="project-skills">Javascript</span><span class="project-skills" >HTML</span><span class="project-skills">CSS</span>
                </div>
            </div>
            <div class='p-container'>
                <a href="https://github.com/muzammil2208/Basic-cal-c-test" class="project-title">Automation test suite for calculator app<Arrow/></a>
                <p class='project-description'> A simple automation test suite to test above mentioned calculator application.</p>
                <div class='project-skills-container'>
                    <span class="project-skills">TestNg</span><span class="project-skills">Java</span><span class="project-skills">Selenium</span><span class="project-skills">Maven</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects