import React from "react";

export default function EducationItem({
    school, location, degree, date, id,
}) {
    return (
        <div className="education-item">
            <p className={id}>{school}</p>
            <p className={id}>{location}</p>
            <p className={id}>{degree}</p>
            <p className={id}>{date}</p>
        </div>
    );
}