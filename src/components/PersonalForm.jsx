import React from "react";

export default function PersonalForm({
    name,
    phone,
    email,
    location,
    link,
    summary,
    handleChange,
}) {
    return (
        <form className="personal-form">
            <div className="form-row">
                <label>Full Name</label>
                <input
                    type="text"
                    placeholder="Jane Eyre"
                    name="name"
                    value={name}
                    onChange={handleChange}
                />
            </div>
            <div className="form-row">
                <label>Phone</label>
                <input
                    type="text"
                    placeholder="5141234567"
                    name="phone"
                    value={phone}
                    onChange={handleChange}
                />
            </div>
            <div className="form-row">
                <label>Email</label>
                <input
                    type="text"
                    placeholder="jane.eyre@hotmail.com"
                    name="email"
                    value={email}
                    onChange={handleChange}
                />
            </div>
            <div className="form-row">
                <label>Location</label>
                <input
                    type="text"
                    placeholder="Montreal, Quebec"
                    name="location"
                    value={location}
                    onChange={handleChange}
                />
            </div>
            <div className="form-row">
                <label>Link</label>
                <input
                    type="text"
                    placeholder="Link to personal professional website"
                    name="link"
                    value={link}
                    onChange={handleChange}
                />
            </div>
            <div className="form-row">
                <label>Summary</label>
                <textarea
                    placeholder="Please provide a brief professional summary..."
                    name="summary"
                    value={summary}
                    onChange={handleChange}
                />
            </div>
        </form>
    )
}