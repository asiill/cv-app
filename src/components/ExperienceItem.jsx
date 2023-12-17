import React from "react";

export default function ExperienceItem({
    employer, location, startDate, endDate, position, description, id,
}) {
    return (
        <div className="experience-item">
            <p className={id}>{employer}</p>
            <p className={id}>{location}</p>
            <p className={id}>{startDate}</p>
            <p className={id}>{endDate}</p>
            <p className={id}>{position}</p>
            <p className={id}>{description}</p>
        </div>
    );
}