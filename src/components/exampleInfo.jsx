import uniqid from "uniqid";

const exampleInfo = {
    personalInfo: {
        name: "JANE EYRE",
        phone: "514 123 4567",
        email: "jane.eyre@hotmail.com",
        location: "Montreal, Quebec",
        link:"https://www.some-link.com",
        summary: "Brief summary of professional experience..."
    },
    educationInfo: {
        educationArr: [
            {school: "XYZ University", location: "Montreal, Quebec", degree: "Bachelor's of Science in Biology", date: "2020", id: uniqid()},
            {school: "XYZ College", location: "Montreal, Quebec", degree: "DEC in Biology", date: "2014", id: uniqid()}
        ],
    },
    experienceInfo: {
        experienceArr: [
            {employer: "XYZ", location: "Montreal, Quebec", startDate: "2020", endDate: "Present", position: "Graphic Designer", description: "Description of position...", id: uniqid()},
            {employer: "ABC", location: "Montreal, Quebec", startDate: "2018", endDate: "2020", position: "Graphic desginer", description: "Description of position...", id: uniqid()},
            {employer: "ABC", location: "Montreal, Quebec", startDate: "2017", endDate: "2018", position: "Graphic design intern", description: "Description of position...", id: uniqid()},
        ],
    },
};

export default exampleInfo;