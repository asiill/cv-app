import React from "react";

export default function EducationForm({
    school,
    location,
    degree,
    date,
    id,
    handleChange,
    handleDelete,
    handleKeyDown,
    delImg,
}) {
    return (
        <form className="mb-4 flex flex-col justify-center gap-2 text-start">
            <div className="flex flex-col justify-center gap-1">
                <label for="school">School</label>
                <input
                    type="text"
                    placeholder="XYZ College"
                    id="school"
                    name="school"
                    className={id}
                    value={school}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                />
            </div>
            <div className="flex flex-col justify-center gap-1">
                <label for="schoolLocation">Location</label>
                <input
                    type="text"
                    placeholder="Montreal, Quebec"
                    id="schoolLocation"
                    name="schoolLocation"
                    className={id}
                    value={location}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                />
            </div>
            <div className="flex flex-col justify-center gap-1">
                <label for="degree">Degree</label>
                <input
                    type="text"
                    placeholder="DEC in Biology"
                    id="degree"
                    name="degree"
                    className={id}
                    value={degree}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                />
            </div>
            <div className="flex flex-col justify-center gap-1">
                <label for="date">Date</label>
                <input
                    type="number"
                    min="1900"
                    placeholder="2017"
                    id="date"
                    name="date"
                    className={id}
                    value={date}
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