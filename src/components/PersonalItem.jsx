import React from "react";

export default function PersonalItem({
    name, location, email, phone,
}) {
    return (
        <div className="personal-item">
            <div className="name-container">
                <h1>{name}</h1>
            </div>
            <div className="contact-container">
                <p>{location}</p>
                <p>{email}</p>
                <p>{phone}</p>
            </div>
        </div>
    );
}