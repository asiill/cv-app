import React, { useState, useRef } from "react";
import { useReactToPrint } from 'react-to-print';
import uniqid from "uniqid";
import CVForm from "./CVForm.jsx";
import CVPreview from "./CVPreview.jsx";
import exampleInfo from "./exampleInfo.jsx";
import "../styles/content.css";

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
      <div className="edit-container">
        <div className="btn-container">
          <button className="preview-btn" onClick={handleShowPreview}>Preview</button>
          <button className="example-btn" onClick={handleLoadExample}>Example</button>
        </div>
        <CVForm
          personalInfo={personalInfo}
          educationInfo={educationInfo}
          experienceInfo={experienceInfo}
          handlePersonalChange={handlePersonalChange}
          handleEducationChange={handleEducationChange}
          handleExperienceChange={handleExperienceChange}
          handleEducationDelete={handleEducationDelete}
          handleExperienceDelete={handleExperienceDelete}
          handleAddNewEducation={handleAddNewEducation}
          handleAddNewExperience={handleAddNewExperience}
          handleKeyDown={handleKeyDown}
          handleShowPreview={handleShowPreview}
        />
      </div>
    );

    const previewContainer = (
      <div className="preview-container">
        <div className="btn-container">
          <button className="edit-btn" onClick={handleEdit}>Edit</button>
          <button className="print-btn" onClick={handlePrint}>Print</button>
        </div>
        <CVPreview
          ref={componentRef}
          personalInfo={personalInfo}
          educationInfo={educationInfo}
          experienceInfo={experienceInfo}
        />
      </div>
    );

    return (
      editMode ? editContainer : previewContainer
    );
}