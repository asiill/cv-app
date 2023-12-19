import React from "react";
import PersonalForm from "./PersonalForm.jsx";
import EducationForm from "./EducationForm.jsx";
import ExperienceForm from "./ExperienceForm.jsx";
import "../styles/form.css";

export default function CVForm({
    personalInfo,
    educationInfo,
    experienceInfo,
    handlePersonalChange,
    handleEducationChange,
    handleExperienceChange,
    handleEducationDelete,
    handleExperienceDelete,
    handleAddNewEducation,
    handleAddNewExperience,
    handleKeyDown,
    handleShowPreview,
}) {
    return (
        <div className="cv-form">
            <div className="personal-form-container">
                <h2>Personal information</h2>
                <PersonalForm 
                    name={personalInfo.name}
                    location={personalInfo.location}
                    email={personalInfo.email}
                    phone={personalInfo.phone}
                    handleChange={handlePersonalChange}
                />
            </div>
            <div className="education-form-container">
                <h2>Education</h2>
                <div className="education-items">
                    {educationInfo.educationArr.map(edu => {
                        return (
                            <EducationForm
                                key={edu.id}
                                school={edu.school}
                                location={edu.location}
                                degree={edu.degree}
                                date={edu.date}
                                id={edu.id}
                                handleChange={handleEducationChange}
                                handleDelete={handleEducationDelete}
                                handleKeyDown={handleKeyDown}
                            />
                        );
                    })}
                </div>
                <button className="add-education-btn" onClick={handleAddNewEducation}>Add education</button>
            </div>
            <div className="experience-form-container">
                <h2>Experience</h2>
                <div className="experience-items">
                    {experienceInfo.experienceArr.map(exp => {
                        return (
                            <ExperienceForm
                                key={exp.id}
                                employer={exp.employer}
                                location={exp.location}
                                startDate={exp.startDate}
                                endDate={exp.endDate}
                                position={exp.position}
                                description={exp.description}
                                id={exp.id}
                                handleChange={handleExperienceChange}
                                handleDelete={handleExperienceDelete}
                                handleKeyDown={handleKeyDown}
                            />
                        )
                    })}
                </div>
                <button className="add-experience-btn" onClick={handleAddNewExperience}>Add experience</button>
            </div>
        </div>
    );
}