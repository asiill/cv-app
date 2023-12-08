import React, { useState } from "react";
import uniqid from "uniqid";

export default function Experience() {
    const [state, setState] = useState({
        experienceArr: [{employer: "", location: "", position: "", date: "", description: "", id: uniqid()}],
        editMode: true,
    });
}