import React, {PureComponent} from 'react';
import './style.scss'


class AboutMe extends PureComponent {
    render() {
        return (
            <div className={"aboutMe"}>
                <div className="content">
                    <p>I am a competent Front-End Developer with 3.6 years of practical coding experience, particularly
                        in
                        HTML5, CSS3, JavaScript, React, Angular and using preprocessors (LESS, SASS) and library jQuery.
                        I am skilled in responsive and
                        mobile layout development as well as performance optimization, and I have a clear understanding
                        of
                        cross-browser issues.
                        <br/>
                        I interested in growing up as Front-End professional and using and improving my skills and find
                        some new
                        experience in other technologies.
                        <br/>
                        I regard myself as a trustworthy, loyal and dedicated individual and take great pride in my work
                        by paying
                        particular attention to detail.
                        <br/>
                        I am very approachable, easy to work with and I always have good relations within a team.
                        Also I'm always ready to learn something new and advance my knowledge.
                        <br/>
                        Expectations from work: Professional and friendly team with whom I be able to share similar
                        interests, and
                        improve my technical skills in JS development.
                        <br/>
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
                            <li><span>Photoshop,Sketch</span></li>
                        </ul>
                    </div>
                    <div className="other">
                        <div className="experience">
                            <h3>Experience</h3>
                            <div className="item-other">
                                <div className="item-other-info">
                                    <p>Bytebrand Solutions GmbH <span><b>(Front End Developer)</b></span></p>
                                    <p>Dates Employed:​ Jan 2017​ – Present</p>
                                    <p> Employment Duration:​ 2 yrs 7 mos</p>
                                </div>

                                <div className="item-other-info">
                                    <p>Code.Craft<span><b>(Angular Developer)</b></span></p>
                                    <p>Dates Employed: Sep 2016 – Dec 2016</p>
                                    <p>Employment Duration: 4 mos</p>
                                </div>
                                <div className="item-other-info">
                                    <p>Freelance.ua<span><b>(Freelancer)</b></span></p>
                                    <p>Dates Employed: Mar 2016 – Aug 2016</p>
                                    <p>Employment Duration:​ 6 mos</p>
                                </div>
                            </div>
                        </div>
                        <div className="lang-skills">
                            <h3>Language Skills</h3>
                            <div className="item-other">
                                <div className="item-other-info">
                                    <p><b>English (intermediate)</b></p>
                                    <p>I can be interviewed in this language</p>
                                </div>
                                <div className="item-other-info">
                                    <p><b>Russian (fluent)</b></p>
                                    <p>I can be interviewed in this language</p>
                                </div>
                                <div className="item-other-info">
                                    <p><b>Ukrainian (native)</b></p>
                                    <p>I can be interviewed in this language</p>
                                </div>
                            </div>
                            <h3>Contacts</h3>
                            <div className="item-other">
                                <div className="item-other-info">
                                    <p><a href="tel:+38(093)-126-47-45" target='_blank'  rel="noopener noreferrer">+38(093)-126-47-45</a></p>
                                    <p><a href="mailto:rbalik341@gmail.com" target='_blank'rel="noopener noreferrer">rbalik341@gmail.com</a></p>
                                    <p><a href="skype:romanbalykleon" target='_blank' rel="noopener noreferrer" >skype: romanbalykleon</a></p>
                                    <p><a href="https://www.linkedin.com/in/roman-balyk-087456116/" target='_blank' rel="noopener noreferrer" >Linkedin</a></p>
                                    <p><a href="Front-end-developer.pdf" download target='_blank' rel="noopener noreferrer">Download.pdf</a></p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        );
    }
}

export default (AboutMe);
