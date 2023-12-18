import React from "react";

export default function PersonalForm({
    name,
    location,
    email,
    phone,
    handleChange,
}) {
    return (
        <form className="personal-form">
            <div className="form-row">
                <label className="form-label">Full Name</label>
                <input
                    type="text"
                    placeholder="Jane Eyre"
                    name="name"
                    value={name}
                    onChange={handleChange}
                />
            </div>
            <div className="form-row">
                <label className="form-label">Email</label>
                <input
                    type="text"
                    placeholder="jane.eyre@hotmail.com"
                    name="email"
                    value={email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <div className="form-row">
                    <label className="form-label">Phone</label>
                    <input
                        type="text"
                        placeholder="5141234567"
                        name="phone"
                        value={phone}
                        onChange={handleChange}
                    />
            </div>
            </div>
            <div className="form-row">
                <label className="form-label">Location</label>
                <input
                    type="text"
                    placeholder="Montreal, Quebec"
                    name="location"
                    value={location}
                    onChange={handleChange}
                />
            </div>
        </form>
    )
}