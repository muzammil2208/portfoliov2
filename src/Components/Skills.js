import React from 'react'

function Skills() {
  return (
    <div className="skills-container">
        <h1 className="skills-title">Skills</h1>
        <div className="skills-small">

        <div class="skills-small-container">
            <p class="highlight">Languages</p>
            <ul>
                <li>Java</li>
                <li>Python</li>
                <li>Javascript</li>
                <li>HTML/CSS</li>
                <li>SQL</li>
            </ul>
        </div><div class="skills-small-container">
            <p class="highlight">Frameworks</p>
            <ul>
                <li>React</li>
                <li>Django</li>
                <li>RobotFramework</li>
                <li>TestNg</li>
                <li>Node</li>
                <li>Cucmumber</li>
                <li>Maven</li>
            </ul>
        </div>
        <div class="skills-small-container">
            <p class="highlight">Tools</p>
            <ul>
                <li>NPM</li>
                <li>Postman</li>
                <li>Git & Github</li>
                <li>Mongo DB</li>
                <li>Figma</li>
                <li>Selenium</li>
                <li>UFT</li>
            </ul>
        </div>
        </div>

    </div>
  )
}

export default Skills