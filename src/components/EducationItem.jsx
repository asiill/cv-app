import React from "react";

export default function EducationItem({
    school, location, degree, date, id,
}) {
    return (
        <div className="education-item">
            <h3 className={id}>{degree}</h3>
            <p className={id}>{school}</p>
            <p className={id}>{location}</p>
            <p className={id}>{date}</p>
        </div>
    );
}