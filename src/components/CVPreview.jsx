import React, { Component } from "react";
import PersonalItem from "./PersonalItem.jsx";
import EducationItem from "./EducationItem.jsx";
import ExperienceItem from "./ExperienceItem.jsx";
import "../styles/preview.css";

export default class CVPreview extends Component{
        render() {
        const { personalInfo, educationInfo, experienceInfo, } = this.props;

        return (
            <div className="cv-preview">
                <div className="header">
                    <h1>{personalInfo.name}</h1>
                </div>
                <div className="body">
                    <div className="sidebar">
                        <div className="personal-container">
                            <h2>CONTACT</h2>
                            <PersonalItem
                                phone={personalInfo.phone}
                                email={personalInfo.email}
                                location={personalInfo.location}
                                link={personalInfo.link}
                            />
                        </div>
                        <div className="education-container">
                            <h2>EDUCATION</h2>
                            <div className="section-content">
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
                    </div>
                    <div className="main">
                        <div className="summary-container">
                            <h2>SUMMARY</h2>
                            <p>{personalInfo.summary}</p>
                        </div>
                        <div className="experience-container">
                            <h2>EXPERIENCE</h2>
                            <div className="section-content">
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
            </div>
        );
    }
}