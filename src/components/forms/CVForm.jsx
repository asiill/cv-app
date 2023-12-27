import React from "react";
import PersonalForm from "./PersonalForm.jsx";
import EducationForm from "./EducationForm.jsx";
import ExperienceForm from "./ExperienceForm.jsx";
import SkillForm from "./SkillForm.jsx";
import "../../styles/form.css";
import delImg from "../../icons/delete.svg";
import addImg from "../../icons/add.svg";

export default function CVForm({
    personalInfo,
    educationInfo,
    experienceInfo,
    skillInfo,
    handlePersonalChange,
    handleEducationChange,
    handleExperienceChange,
    handleSkillChange,
    handleEducationDelete,
    handleExperienceDelete,
    handleSkillDelete,
    handleAddNewEducation,
    handleAddNewExperience,
    handleAddNewSkill,
    handleKeyDown,
}) {
    return (
        <div className="cv-form">
            <div className="personal-form-container">
                <h2>Personal information</h2>
                <PersonalForm 
                    name={personalInfo.name}
                    phone={personalInfo.phone}
                    email={personalInfo.email}
                    location={personalInfo.location}
                    link={personalInfo.link}
                    summary={personalInfo.summary}
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
                                delImg={delImg}
                            />
                        );
                    })}
                </div>
                <button className="add-education-btn" onClick={handleAddNewEducation}>
                    <img src={addImg} title="Add education" alt="Add education" />
                    <span>Add education</span>
                </button>
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
                                delImg={delImg}
                            />
                        )
                    })}
                </div>
                <button className="add-experience-btn" onClick={handleAddNewExperience}>
                    <img src={addImg} title="Add experience" alt="Add experience" />
                    <span>Add experience</span>
                </button>
            </div>
            <div className="skill-form-container">
                <h2>Skills</h2>
                <div className="skill-items">
                    {skillInfo.skillArr.map(ski => {
                        return (
                            <SkillForm
                                key={ski.id}
                                skill={ski.skill}
                                id={ski.id}
                                handleChange={handleSkillChange}
                                handleDelete={handleSkillDelete}
                                handleKeyDown={handleKeyDown}
                                delImg={delImg}
                            />
                        )
                    })}
                </div>
                <button className="add-skill-btn" onClick={handleAddNewSkill}>
                    <img src={addImg} title="Add skill" alt="Add skill" />
                    Add skill
                </button>
            </div>
        </div>
    );
}