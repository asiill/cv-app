import React, { Component } from "react";
import PersonalItem from "./PersonalItem.jsx";
import EducationItem from "./EducationItem.jsx";
import ExperienceItem from "./ExperienceItem.jsx";
import SkillItem from "./SkillItem.jsx";

export default class CVPreview extends Component{
        render() {
        const { personalInfo, educationInfo, experienceInfo, skillInfo } = this.props;

        return (
            <section className="max-w-[210mm] min-h-[297mm] flex flex-col gap-8 self-center ml-4 mr-4 mt-12 mb-auto p-8 text-sm rounded-lg bg-white shadow-[5px_10px_18px_rgba(0,0,0,0.548)] scale-80 sm:scale-100 sm:m-auto sm:mt-12 print:m-0 print:border-none print:shadow-none">
                <div className="border-b-2 border-b-solid border-b-black p-2">
                    <h1>{personalInfo.name}</h1>
                </div>
                <div className="flex gap-8">
                    <div className="flex flex-col gap-4 text-left">
                        <div className="flex flex-col gap-3">
                            <h2>CONTACT</h2>
                            <PersonalItem
                                phone={personalInfo.phone}
                                email={personalInfo.email}
                                location={personalInfo.location}
                                link={personalInfo.link}
                            />
                        </div>
                        <div className="flex flex-col gap-3">
                            <h2>EDUCATION</h2>
                            <div className="flex flex-col gap-4">
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
                        <div className="flex flex-col gap-3">
                            <h2>Skills</h2>
                            <div className="flex flex-col gap-2">
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
                    <div className="flex flex-col gap-4 text-left">
                        <div className="flex flex-col gap-3">
                            <h2>SUMMARY</h2>
                            <p>{personalInfo.summary}</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h2>EXPERIENCE</h2>
                            <div className="flex flex-col gap-4">
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