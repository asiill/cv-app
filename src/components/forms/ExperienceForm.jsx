import React from "react";

export default function ExperienceForm({
    employer,
    location,
    startDate,
    endDate,
    position,
    description,
    id,
    handleChange,
    handleDelete,
    handleKeyDown,
    delImg,
}) {
    return (
        <form className="experience-form">
            <div className="form-row">
                <label>Employer</label>
                <input
                    type="text"
                    placeholder="XYZ"
                    name="employer"
                    className={id}
                    value={employer}
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
                <label>Start date</label>
                <input
                    type="text"
                    placeholder="2017"
                    name="startDate"
                    className={id}
                    value={startDate}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                />
            </div>
            <div className="form-row">
                <label>End date</label>
                <input
                    type="text"
                    placeholder="Present"
                    name="endDate"
                    className={id}
                    value={endDate}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                />
            </div>
            <div className="form-row">
                <label>Position</label>
                <input
                    type="text"
                    placeholder="Graphic designer"
                    name="position"
                    className={id}
                    value={position}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                />
            </div>
            <div className="form-row">
                <label>Description</label>
                <textarea
                    placeholder="Please describe your position in detail..."
                    name="description"
                    className={id}
                    value={description}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                ></textarea>
            </div>
            <div className="form-row">
                <button className={id} onClick={handleDelete}>
                    <span>Delete</span>
                    <img src={delImg} title="Delete experience" alt="Delete experience" />
                </button>
            </div>
        </form>
    );
}