import './App.css';
import React, { useState, useRef } from "react";
import { useReactToPrint } from 'react-to-print';
import uniqid from "uniqid";
import CVForm from "./components/CVForm.jsx";
import CVPreview from "./components/CVPreview.jsx";

export default function App() {
    const [editMode, setEditMode] = useState(true);

    const [personalInfo, setPersonalInfo] = useState({
      name: "", email: "", phone: "", location: "",
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

    const handleEdit = () => {
      setEditMode(true);
    };

    const componentRef = useRef();

    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
      documentTitle: "CV",
    });

    const editContainer = (
      <>
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
      </>
    );

    const previewContainer = (
      <>
        <div className="btn-container">
          <button className="edit-btn" onClick={handleEdit}>
            Edit
          </button>
          <button className="print-btn" onClick={handlePrint}>
            Print
          </button>
        </div>
        <CVPreview
          ref={componentRef}
          personalInfo={personalInfo}
          educationInfo={educationInfo}
          experienceInfo={experienceInfo}
        />
      </>
    );

    return (
      editMode ? editContainer : previewContainer
    );
}