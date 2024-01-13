import React from "react";
import PersonalForm from "./PersonalForm.jsx";
import EducationForm from "./EducationForm.jsx";
import ExperienceForm from "./ExperienceForm.jsx";
import SkillForm from "./SkillForm.jsx";
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
        <section className="w-full flex flex-col gap-4 p-2 m-auto mt-3 rounded-lg sm:w-3/5">
            <div className="flex flex-col justify-center gap-4 p-4 rounded-lg text-black bg-zinc-200 shadow-[0px_5px_5px_rgba(0,0,0,0.548)]">
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
            <div className="flex flex-col justify-center gap-4 p-4 rounded-lg text-black bg-zinc-200 shadow-[0px_5px_5px_rgba(0,0,0,0.548)]">
                <h2>Education</h2>
                <div className="flex flex-col justify-center">
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
                <button onClick={handleAddNewEducation}>
                    <img src={addImg} alt="" />
                    <span>Add education</span>
                </button>
            </div>
            <div className="flex flex-col justify-center gap-4 p-4 rounded-lg text-black bg-zinc-200 shadow-[0px_5px_5px_rgba(0,0,0,0.548)]">
                <h2>Experience</h2>
                <div className="flex flex-col justify-center">
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
                <button onClick={handleAddNewExperience}>
                    <img src={addImg} alt="" />
                    <span>Add experience</span>
                </button>
            </div>
            <div className="flex flex-col justify-center gap-4 p-4 rounded-lg text-black bg-zinc-200 shadow-[0px_5px_5px_rgba(0,0,0,0.548)]">
                <h2>Skills</h2>
                <div className="flex flex-col justify-center">
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
                <button onClick={handleAddNewSkill}>
                    <img src={addImg} alt="" />
                    Add skill
                </button>
            </div>
        </section>
    );
}