import React from "react";

export default function SkillForm({
    skill,
    id,
    handleChange,
    handleDelete,
    handleKeyDown,
}) {
    return (
        <form className="skill-form">
            <div className="form-row">
                <label>Skill</label>
                <input
                    type="text"
                    name="skill"
                    className={id}
                    value={skill}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                />
            </div>
            <div className="form-row">
                <button className={id} onClick={handleDelete}>Delete</button>
            </div>
        </form>
    );
}