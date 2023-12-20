import React from "react";

export default function ExperienceItem({
    employer, location, startDate, endDate, position, description, id,
}) {
    return (
        <div className="experience-item">
            <div className="position-container">
                <h3 className={id}>{position}</h3>
            </div>
            <div className="details-container">
                <p className={id}>{employer}</p>
                <p>|</p>
                <p className={id}>{location}</p>
                <p>|</p>
                <p className={id}>{startDate}</p>
                <p>-</p>
                <p className={id}>{endDate}</p>
            </div>
            <div className="description-container">
                <p className={id}>{description}</p>
            </div>
        </div>

    );
}