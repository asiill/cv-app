import React from "react";

export default function SkillItem({
    skill,
    id,
}) {
    return (
        <div className="flex flex-col gap-1">
            <p className={id}>{skill}</p>
        </div>
    );
}