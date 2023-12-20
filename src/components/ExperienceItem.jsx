import React from "react";

export default function ExperienceItem({
    employer, location, startDate, endDate, position, description, id,
}) {
    return (
        <div className="experience-item">
            <h3 className={id}>{position}</h3>
            <p className={id}>{startDate} - {endDate}</p>
            <p className={id}>{employer}, {location}</p>
            <p className={id}>{description}</p>
        </div>

    );
}