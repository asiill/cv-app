import React from "react";

export default function EducationForm({
    school, location, degree, date, id, handleChange, handleDelete,
}) {
    return (
        <form className="education-form">
            <button className={id} onClick={handleDelete}>Delete</button>
            <label className="form-label">School</label>
            <input
                type="text"
                placeholder="XYX College"
                name="school"
                className={id}
                value={school}
                onChange={handleChange}
                required
            />
            <label className="form-label">Location</label>
            <input
                type="text"
                placeholder="Montreal, Quebec"
                name="location"
                className={id}
                value={location}
                onChange={handleChange}
                required
            />
            <label className="form-label">Degree</label>
            <input
                type="text"
                placeholder="DEC in Biology"
                name="degree"
                className={id}
                value={degree}
                onChange={handleChange}
                required
            />
            <label className="form-label">Date</label>
            <input
                type="text"
                placeholder="2017"
                name="date"
                className={id}
                value={date}
                onChange={handleChange}
                required
            />
        </form>
    )
}