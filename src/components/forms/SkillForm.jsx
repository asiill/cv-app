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
                <label for="skill">Skill</label>
                <input
                    type="text"
                    id="skill"
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
                    <img src={delImg} alt="" />
                </button>
            </div>
        </form>
    );
}