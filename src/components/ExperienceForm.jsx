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
}) {
    return (
        <form className="experience-form">
            <label className="form-label">Employer</label>
            <input
                type="text"
                placeholder="XYZ"
                name="employer"
                className={id}
                value={employer}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
            <label className="form-label">Location</label>
            <input
                type="text"
                placeholder="Montreal, Quebec"
                name="location"
                className={id}
                value={location}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
            <label className="form-label">Start date</label>
            <input
                type="text"
                placeholder="2017"
                name="startDate"
                className={id}
                value={startDate}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
            <label className="form-label">End date</label>
            <input
                type="text"
                placeholder="Present"
                name="endDate"
                className={id}
                value={endDate}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
            <label className="form-label">Position</label>
            <input
                type="text"
                placeholder="Graphic designer"
                name="position"
                className={id}
                value={position}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
            <label className="form-label">Description</label>
            <textarea
                type="text"
                placeholder="Please describe your position in detail..."
                name="description"
                className={id}
                value={description}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            ></textarea>
            <button className={id} onClick={handleDelete}>Delete</button>
        </form>
    );
}