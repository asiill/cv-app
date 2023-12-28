import React, { Component } from "react";
import PersonalItem from "./PersonalItem.jsx";
import EducationItem from "./EducationItem.jsx";
import ExperienceItem from "./ExperienceItem.jsx";
import SkillItem from "./SkillItem.jsx";
import "../../styles/preview.css";

export default class CVPreview extends Component{
        render() {
        const { personalInfo, educationInfo, experienceInfo, skillInfo } = this.props;

        return (
            <section id="cv-preview">
                <div id="header">
                    <h1>{personalInfo.name}</h1>
                </div>
                <div id="body">
                    <div id="sidebar">
                        <div id="personal-container">
                            <h2>CONTACT</h2>
                            <PersonalItem
                                phone={personalInfo.phone}
                                email={personalInfo.email}
                                location={personalInfo.location}
                                link={personalInfo.link}
                            />
                        </div>
                        <div id="education-container">
                            <h2>EDUCATION</h2>
                            <div id="education-items">
                                {educationInfo.educationArr.map(edu => {
                                    return (
                                        <EducationItem
                                            key={edu.id}
                                            school={edu.school}
                                            location={edu.location}
                                            degree={edu.degree}
                                            date={edu.date}
                                            id={edu.id}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                        <div id="skill-container">
                            <h2>Skills</h2>
                            <div id="skill-items">
                                {skillInfo.skillArr.map(ski => {
                                    return (
                                        <SkillItem
                                            key={ski.id}
                                            skill={ski.skill}
                                            id={ski.id}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div id="main">
                        <div id="summary-container">
                            <h2>SUMMARY</h2>
                            <p>{personalInfo.summary}</p>
                        </div>
                        <div id="experience-container">
                            <h2>EXPERIENCE</h2>
                            <div id="experience-items">
                                {experienceInfo.experienceArr.map(exp => {
                                    return (
                                        <ExperienceItem
                                            key={exp.id}
                                            employer={exp.employer}
                                            location={exp.location}
                                            startDate={exp.startDate}
                                            endDate={exp.endDate}
                                            position={exp.position}
                                            description={exp.description}
                                            id={exp.id}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}