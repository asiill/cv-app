import React, { useState } from "react";
import EducationForm from "./EducationForm.jsx";
import uniqid from "uniqid";

export default function Education() {
    const [state, setState] = useState({
        educationArr: [{school: "", location: "", degree: "", date: "", id: uniqid()}],
        editMode: true,
    });

    const handleChange = (e) => {
        setState({
            educationArr: state.educationArr.map(edu => {
                return (
                    edu.id === e.target.className ? { ...edu, [e.target.name]: e.target.value } : edu
                );
            }),
            editMode: true,
        });
    };

    const handleEdit = () => {
        setState({ ...state, editMode: true });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setState({ ...state, editMode: false });
    };

    const handleAddNew = () => {
        setState({
            educationArr: state.educationArr.concat({
                school: "",
                location: "",
                degree: "",
                date: "",
                id: uniqid(),
            }),
            editMode: true,
        });
    };

    const handleDelete = (e) => {
        setState({
            educationArr: state.educationArr.filter(edu => {
                return (
                    edu.id !== e.target.className
                );
            }),
            editMode: true,
        });
    };

    const editContainer = (
        <div className="education-edit-container">
            <div className="form-header">
                <h2>Education</h2>
                <button type="submit" className="submit-btn" onClick={handleSubmit}>Submit</button>
            </div>
            <hr />
            <div className="form-container">
                {state.educationArr.map(edu => {
                    return (
                        <>
                            <EducationForm
                                key={edu.id}
                                school={edu.school}
                                location={edu.location}
                                degree={edu.degree}
                                date={edu.date}
                                id={edu.id}
                                handleChange={handleChange}
                                handleDelete={handleDelete}
                            />
                        </>
                    );
                })}
            </div>
            <div className="add-btn-container">
                <button className="add-btn" onClick={handleAddNew}>Add education</button>
            </div>
        </div>
    );

    const displayContainer = (
        <div className="education-display-container">
            <div className="section-header">
                <h1>Education</h1>
                <button className="edit-btn" onClick={handleEdit}>Edit</button>
            </div>
            <hr />
            <div className="section-container">
                {state.educationArr.map(edu => {
                    return (
                        <div key={edu.id}>
                            <p>{edu.school}</p>
                            <p>{edu.location}</p>
                            <p>{edu.degree}</p>
                            <p>{edu.date}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );

    return (
        <>
            {state.editMode ? editContainer : displayContainer}
        </>
    );
}