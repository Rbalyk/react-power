import React, { PureComponent } from 'react';
import './style.scss'


class AboutMe extends PureComponent {
    render() {
        return (
            <div className={"aboutMe"}>
                <div className="content">
                    <p>I am a competent Front-End Developer with 3.6 years of practical coding experience, particularly in
                        HTML5, CSS3, JavaScript, React, Angular and using preprocessors (LESS, SASS) and library jQuery. I am skilled in responsive and
                        mobile layout development as well as performance optimization, and I have a clear understanding of
                        cross-browser issues.
                        <br/>
                        I interested in growing up as Front-End professional and using and improving my skills and find some new
                        experience in other technologies.
                        <br/>
                        I regard myself as a trustworthy, loyal and dedicated individual and take great pride in my work by paying
                        particular attention to detail.
                        <br/>
                        I am very approachable, easy to work with and I always have good relations within a team.
                        Also I'm always ready to learn something new and advance my knowledge.
                        <br/>
                        Expectations from work: Professional and friendly team with whom I be able to share similar interests, and
                        improve my technical skills in JS development.
                        <br/>
                        <b>The main goal for me now is switch to work with React.js</b>
                    </p>

                     <div className="skills">
                         <h3>Skills</h3>
                         <ul className="skills-list">
                             <li><span>HTML5/CSS3 (high-level)</span></li>
                             <li><span>Bootstrap(high-level)</span></li>
                             <li><span>Less and SCSS (SASS) (high-level)</span></li>
                             <li><span>SVG and Paralax animation (high-level)</span></li>
                             <li><span>jQuery (high-level)</span></li>
                             <li><span>JavaScript (middle-level)</span></li>
                             <li><span>React.js (middle-level)</span></li>
                             <li><span>Angular 8 (elementary-level)</span></li>
                             <li><span>Ember.js (middle-level)</span></li>
                             <li><span>GSAP.js, d3.js (middle-level)</span></li>
                             <li><span>WordPress (middle-level)</span></li>
                             <li><span>Drupal (elementary-level)</span></li>
                             <li><span>PHP (elementary-level)</span></li>
                             <li><span>Git (middle-level)</span></li>
                             <li><span>Gulp and Bower (middle-level)</span></li>
                             <li><span>Adobe Illustrator,Photoshop,Sketch</span></li>
                         </ul>
                     </div>
                    <div className="experience">
                        <h3>Experience</h3>
                        <div className="item-work">
                            <div className="item-work-info">
                                <div className="item-position">
                                    Front End Developer
                                </div>
                                <span>Bytebrand Solutions GmbH</span>
                                <span>Dates Employed:​ Jan 2017​ – Present</span>
                                <span> Employment Duration:​ 2 yrs 6 mos</span>
                            </div>
                              <div className="item-work-info">
                                <div className="item-position">
                                    Angular Developer
                                </div>
                                <span>Code.Craft</span>
                                <span>Dates Employed: Sep 2016 – Dec 2016</span>
                                <span>Employment Duration: 4 mos</span>
                            </div>
                            <div className="item-work-info">
                                <div className="item-position">
                                    Freelancer
                                </div>
                                <span>Freelance.ua</span>
                                <span>Dates Employed: Mar 2016 – Aug 2016</span>
                                <span>Employment Duration:​ 6 mos</span>
                            </div>
                        </div>












                    </div>
                </div>
            </div>
        );
    }
}

export default (AboutMe);
