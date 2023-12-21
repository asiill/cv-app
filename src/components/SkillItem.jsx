import React from "react";

export default function SkillItem({
    skill,
    id,
}) {
    return (
        <div className="skill-item">
            <p className={id}>{skill}</p>
        </div>
    );
}