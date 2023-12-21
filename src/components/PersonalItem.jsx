import React from "react";

export default function PersonalItem({
    phone, email, location, link,
}) {
    return (
        <div className="personal-item">
            <p>{phone}</p>
            <p>{email}</p>
            <p>{location}</p>
            <p>{link}</p>
        </div>
    );
}