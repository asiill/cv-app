import React, { useState, useRef } from "react";
import { useReactToPrint } from 'react-to-print';
import uniqid from "uniqid";
import CVForm from "./forms/CVForm.jsx";
import CVPreview from "./preview/CVPreview.jsx";
import exampleInfo from "./exampleInfo.jsx";
import "../styles/content.css";
// Button icons
import previewImg from "../icons/preview.svg";
import editImg from "../icons/edit.svg";
import printImg from "../icons/print.svg";
import loadImg from "../icons/load.svg";

export default function Content() {
    const [editMode, setEditMode] = useState(true);

    const [personalInfo, setPersonalInfo] = useState({
      name: "", phone: "", email: "", location: "", link:"", summary: "",
    });

    const [educationInfo, setEducationInfo] = useState({
      educationArr: [{school: "", location: "", degree: "", date: "", id: uniqid()}],
    });

    const [experienceInfo, setExperienceInfo] = useState({
      experienceArr: [{employer: "", location: "", startDate: "", endDate: "", position: "", description: "", id: uniqid()}],
    });

    const [skillInfo, setSkillInfo] = useState({
      skillArr: [{skill: "", id: uniqid()}],
    });

    const handlePersonalChange = (e) => {
      setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value });
    };

    const handleEducationChange = (e) => {
      setEducationInfo({
        educationArr: educationInfo.educationArr.map(edu => {
            return (
                edu.id === e.target.className ? { ...edu, [e.target.name]: e.target.value } : edu
            );
        }),
      });
    };

    const handleExperienceChange = (e) => {
      setExperienceInfo({
        experienceArr: experienceInfo.experienceArr.map(exp => {
            return (
                exp.id === e.target.className ? { ...exp, [e.target.name]: e.target.value } : exp
            );
        }),
      });
    };

    const handleSkillChange = (e) => {
      setSkillInfo({
        skillArr: skillInfo.skillArr.map(ski => {
            return (
                ski.id === e.target.className ? { ...ski, [e.target.name]: e.target.value } : ski
            );
        }),
      });
    };

    const handleEducationDelete = (e) => {
      setEducationInfo({
        educationArr: educationInfo.educationArr.filter(edu => {
            return (
                edu.id !== e.target.className
            );
        }),
      });
    };

    const handleExperienceDelete = (e) => {
      setExperienceInfo({
        experienceArr: experienceInfo.experienceArr.filter(ex => {
            return (
                ex.id !== e.target.className
            );
        }),
      });
    };

    const handleSkillDelete = (e) => {
      setSkillInfo({
        skillArr: skillInfo.skillArr.filter(ski => {
            return (
                ski.id !== e.target.className
            );
        }),
      });
    };

    const handleAddNewEducation = () => {
      setEducationInfo({
        educationArr: educationInfo.educationArr.concat({
            school: "",
            location: "",
            degree: "",
            date: "",
            id: uniqid(),
        }),
      });
    };

    const handleAddNewExperience = () => {
      setExperienceInfo({
        experienceArr: experienceInfo.experienceArr.concat({
          employer: "",
          location: "",
          startDate: "",
          endDate: "",
          position: "",
          description: "",
          id: uniqid(),
        }),
      });
    };

    const handleAddNewSkill = () => {
      setSkillInfo({
        skillArr: skillInfo.skillArr.concat({
          skill: "",
          id: uniqid(),
        }),
      });
    };

    const handleKeyDown = (e) => {
      if (e.keyCode === 13) {
        e.preventDefault();
      }
    };

    const handleShowPreview = () => {
      setEditMode(false);
    };

    const handleLoadExample = () => {
      setPersonalInfo(exampleInfo.personalInfo);
      setEducationInfo(exampleInfo.educationInfo);
      setExperienceInfo(exampleInfo.experienceInfo);
      setSkillInfo(exampleInfo.skillInfo);
    };

    const handleEdit = () => {
      setEditMode(true);
    };

    const componentRef = useRef();

    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
      documentTitle: "CV",
    });

    const editContainer = (
      <main id="edit-container">
        <nav className="btn-container">
          <button id="preview-btn" onClick={handleShowPreview}><img src={previewImg} title="Show preview" alt="Show preview"/></button>
          <button id="example-btn" onClick={handleLoadExample}><img src={loadImg} title="Load example" alt="Load example" /></button>
        </nav>
        <CVForm
          personalInfo={personalInfo}
          educationInfo={educationInfo}
          experienceInfo={experienceInfo}
          skillInfo={skillInfo}
          handlePersonalChange={handlePersonalChange}
          handleEducationChange={handleEducationChange}
          handleExperienceChange={handleExperienceChange}
          handleSkillChange={handleSkillChange}
          handleEducationDelete={handleEducationDelete}
          handleExperienceDelete={handleExperienceDelete}
          handleSkillDelete={handleSkillDelete}
          handleAddNewEducation={handleAddNewEducation}
          handleAddNewExperience={handleAddNewExperience}
          handleAddNewSkill={handleAddNewSkill}
          handleKeyDown={handleKeyDown}
          handleShowPreview={handleShowPreview}
        />
      </main>
    );

    const previewContainer = (
      <main id="preview-container">
        <nav className="btn-container">
          <button id="edit-btn" onClick={handleEdit}><img src={editImg} title="Edit CV" alt="Edit CV" /></button>
          <button id="print-btn" onClick={handlePrint}><img src={printImg} title="Print CV" alt="Print CV"/></button>
        </nav>
        <CVPreview
          ref={componentRef}
          personalInfo={personalInfo}
          educationInfo={educationInfo}
          experienceInfo={experienceInfo}
          skillInfo={skillInfo}
        />
      </main>
    );

    return (
      editMode ? editContainer : previewContainer
    );
}