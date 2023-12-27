import React from "react";

export default function SkillForm({
    skill,
    id,
    handleChange,
    handleDelete,
    handleKeyDown,
    delImg,
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
                <button className={id} onClick={handleDelete}>
                    <span>Delete</span>
                    <img src={delImg} title="Delete skill" alt="Delete skill" />
                </button>
            </div>
        </form>
    );
}