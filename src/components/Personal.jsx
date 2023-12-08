import React, { useState } from "react";

export default function Personal() {
    const [state, setState] = useState({
        name: "",
        email: "",
        phone: "",
        location: "",
        editMode: true,
    });

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };

    const handleEdit = () => {
        setState({ ...state, editMode: true });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setState({ ...state, editMode: false });
    };

    const editContainer = (
        <div className="personal-edit-container">
            <form className="personal-form" onSubmit={handleSubmit}>
                <label className="form-label">Full Name</label>
                <input
                    type="text"
                    placeholder="Jane Eyre"
                    name="name"
                    value={state.name}
                    onChange={handleChange}
                    required
                />
                <label className="form-label">Email</label>
                <input
                    type="text"
                    placeholder="jane.eyre@hotmail.com"
                    name="email"
                    value={state.email}
                    onChange={handleChange}
                    required
                />
                <label className="form-label">Phone</label>
                <input
                    type="text"
                    placeholder="5141234567"
                    name="phone"
                    value={state.phone}
                    onChange={handleChange}
                    required
                />
                <label className="form-label">Location</label>
                <input
                    type="text"
                    placeholder="Montreal, Quebec"
                    name="location"
                    value={state.location}
                    onChange={handleChange}
                    required
                />
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    );

    const displayContainer = (
        <div className="personal-display-container">
            <button className="edit-btn" onClick={handleEdit}>Edit</button>
            <div className="name-container">
                <h1>{state.name}</h1>
            </div>
            <div className="contact-container">
                <p>{state.email}</p>
                <p>{state.phone}</p>
                <p>{state.location}</p>
            </div>
        </div>
    );

    return (
        <>
            {state.editMode ? editContainer : displayContainer}
        </>
    )
}