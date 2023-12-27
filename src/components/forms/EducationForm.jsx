import React from "react";

export default function EducationForm({
    school,
    location,
    degree,
    date,
    id,
    handleChange,
    handleDelete,
    handleKeyDown,
    delImg,
}) {
    return (
        <form className="education-form">
            <div className="form-row">
                <label>School</label>
                <input
                    type="text"
                    placeholder="XYZ College"
                    name="school"
                    className={id}
                    value={school}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                />
            </div>
            <div className="form-row">
                <label>Location</label>
                <input
                    type="text"
                    placeholder="Montreal, Quebec"
                    name="location"
                    className={id}
                    value={location}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                />
            </div>
            <div className="form-row">
                <label>Degree</label>
                <input
                    type="text"
                    placeholder="DEC in Biology"
                    name="degree"
                    className={id}
                    value={degree}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                />
            </div>
            <div className="form-row">
                <label>Date</label>
                <input
                    type="text"
                    placeholder="2017"
                    name="date"
                    className={id}
                    value={date}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                />
            </div>
            <div className="form-row">
                <button className={id} onClick={handleDelete}>
                    <span>Delete</span>
                    <img src={delImg} title="Delete education" alt="Delete education" />
                </button>
            </div>
        </form>
    );
}