import React, { Component } from "react";
import PersonalItem from "./PersonalItem.jsx";
import EducationItem from "./EducationItem.jsx";
import ExperienceItem from "./ExperienceItem.jsx";

export default class CVPreview extends Component{
        render() {
        const { personalInfo, educationInfo, experienceInfo, } = this.props;

        return (
            <div className="cv-preview">
                <div className="cv-preview-header">
                    <PersonalItem
                        name={personalInfo.name}
                        location={personalInfo.location}
                        email={personalInfo.email}
                        phone={personalInfo.phone}
                    />
                </div>
                <div className="cv-preview-main">
                    <div className="education-preview-container">
                        <div className="section-header">
                            <h1>Education</h1>
                            <hr />
                        </div>
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
                    <div className="experience-preview-container">
                        <div className="section-header">
                            <h1>Experience</h1>
                            <hr />
                        </div>
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
        );
    }
}