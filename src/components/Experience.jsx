import React, { useState } from "react";
import uniqid from "uniqid";
import ExperienceForm from "./ExperienceForm.jsx";

export default function Experience() {
    const [state, setState] = useState({
        experienceArr: [{employer: "", location: "", startDate: "", endDate: "", position: "", description: "", id: uniqid()}],
        editMode: true,
    });

    const handleEdit = () => {
        setState({ ...state, editMode: true });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setState({ ...state, editMode: false });
    };

    const handleAddNew = () => {
        setState({
            experienceArr: state.experienceArr.concat({
                employer: "",
                location: "",
                startDate: "",
                endDate: "",
                position: "",
                description: "",
                id: uniqid(),
            }),
            editMode: true,
        });
    };

    const handleChange = (e) => {
        setState({
            experienceArr: state.experienceArr.map(exp => {
                return (
                    exp.id === e.target.className ? { ...exp, [e.target.name]: e.target.value } : exp
                );
            }),
            editMode: true,
        });
    };
    
    const handleDelete = (e) => {
        setState({
            experienceArr: state.experienceArr.filter(exp => {
                return (
                    exp.id !== e.target.className
                );
            }),
            editMode: true,
        });
    };

    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            e.preventDefault();
        }
    };

    const editContainer = (
        <div className="experience-edit-container">
            <div className="form-header">
                <h2>Experience</h2>
                <button type="submit" className="submit-btn" onClick={handleSubmit}>Submit</button>
            </div>
            <hr />
            <div className="form-container">
                {state.experienceArr.map(exp => {
                    return (
                        <>
                            <ExperienceForm
                                key={exp.id}
                                employer={exp.employer}
                                location={exp.location}
                                startDate={exp.startDate}
                                endDate={exp.endDate}
                                position={exp.position}
                                description={exp.description}
                                id={exp.id}
                                handleChange={handleChange}
                                handleDelete={handleDelete}
                                handleKeyDown={handleKeyDown}
                            />
                        </>
                    );
                })}
            </div>
            <div className="add-btn-container">
                <button className="add-btn" onClick={handleAddNew}>Add experience</button>
            </div>
        </div>
    );

    const displayContainer = (
        <div className="experience-display-container">
            <div className="section-header">
                <h1>Experience</h1>
                <button className="edit-btn" onClick={handleEdit}>Edit</button>
            </div>
            <hr />
            <div className="section-container">
                {state.experienceArr.map(exp => {
                    return (
                        <div key={exp.id}>
                            <p>{exp.employer}</p>
                            <p>{exp.location}</p>
                            <p>{exp.startDate}</p>
                            <p>{exp.endDate}</p>
                            <p>{exp.position}</p>
                            <p>{exp.description}</p>
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