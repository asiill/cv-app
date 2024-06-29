import React from "react";

export default function PersonalItem({
    phone, email, location, link,
}) {
    return (
        <div className="flex flex-col gap-1">
            <p>{phone}</p>
            <p>{email}</p>
            <p>{location}</p>
            <p>{link}</p>
        </div>
    );
}