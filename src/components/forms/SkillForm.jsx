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
        <form className="mb-4 flex flex-col justify-center gap-2 text-start">
            <div className="flex flex-col justify-center gap-1">
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
            <div className="flex flex-col justify-center gap-1">
                <button className={id} onClick={handleDelete}>
                    <span>Delete</span>
                    <img src={delImg} alt="" />
                </button>
            </div>
        </form>
    );
}