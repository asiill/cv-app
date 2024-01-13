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
        <form className="flex flex-col justify-center gap-2 text-start">
            <div className="flex flex-col justify-center gap-1">
                <label for="name">Full Name</label>
                <input
                    type="text"
                    placeholder="Jane Eyre"
                    id="name"
                    name="name"
                    value={name}
                    onChange={handleChange}
                />
            </div>
            <div className="flex flex-col justify-center gap-1">
                <label for="phone">Phone</label>
                <input
                    type="tel"
                    placeholder="5141234567"
                    id="phone"
                    name="phone"
                    value={phone}
                    onChange={handleChange}
                />
            </div>
            <div className="flex flex-col justify-center gap-1">
                <label for="email">Email</label>
                <input
                    type="email"
                    placeholder="jane.eyre@hotmail.com"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                />
            </div>
            <div className="flex flex-col justify-center gap-1">
                <label for="location">Location</label>
                <input
                    type="text"
                    placeholder="Montreal, Quebec"
                    id="location"
                    name="location"
                    value={location}
                    onChange={handleChange}
                />
            </div>
            <div className="flex flex-col justify-center gap-1">
                <label for="link">Link</label>
                <input
                    type="url"
                    placeholder="https://www.link-to-portfolio.com"
                    id="link"
                    name="link"
                    value={link}
                    onChange={handleChange}
                />
            </div>
            <div className="flex flex-col justify-center gap-1">
                <label for="summary">Summary</label>
                <textarea
                    placeholder="Please provide a brief professional summary..."
                    id="summary"
                    name="summary"
                    value={summary}
                    onChange={handleChange}
                />
            </div>
        </form>
    )
}