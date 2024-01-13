import React from "react";

export default function ExperienceForm({
    employer,
    location,
    startDate,
    endDate,
    position,
    description,
    id,
    handleChange,
    handleDelete,
    handleKeyDown,
    delImg,
}) {
    return (
        <form className="mb-4 flex flex-col justify-center gap-2 text-start">
            <div className="flex flex-col justify-center gap-1">
                <label for="employer">Employer</label>
                <input
                    type="text"
                    placeholder="XYZ"
                    id="employer"
                    name="employer"
                    className={id}
                    value={employer}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                />
            </div>
            <div className="flex flex-col justify-center gap-1">
                <label for="workLocation">Location</label>
                <input
                    type="text"
                    placeholder="Montreal, Quebec"
                    id="workLocation"
                    name="workLocation"
                    className={id}
                    value={location}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                />
            </div>
            <div className="flex flex-col justify-center gap-1">
                <label for="startDate">Start date</label>
                <input
                    type="number"
                    min="1900"
                    placeholder="2017"
                    id="startDate"
                    name="startDate"
                    className={id}
                    value={startDate}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                />
            </div>
            <div className="flex flex-col justify-center gap-1">
                <label for="endDate">End date</label>
                <input
                    type="number"
                    min="1900"
                    placeholder="Present"
                    id="endDate"
                    name="endDate"
                    className={id}
                    value={endDate}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                />
            </div>
            <div className="flex flex-col justify-center gap-1">
                <label for="position">Position</label>
                <input
                    type="text"
                    placeholder="Graphic designer"
                    id="position"
                    name="position"
                    className={id}
                    value={position}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                />
            </div>
            <div className="flex flex-col justify-center gap-1">
                <label for="description">Description</label>
                <textarea
                    placeholder="Please describe your position in detail..."
                    id="description"
                    name="description"
                    className={id}
                    value={description}
                    onChange={handleChange}
                ></textarea>
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