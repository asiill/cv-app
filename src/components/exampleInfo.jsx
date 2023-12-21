import uniqid from "uniqid";

const exampleInfo = {
    personalInfo: {
        name: "JANE EYRE",
        phone: "514 123 4567",
        email: "jane.eyre@hotmail.com",
        location: "Montreal, Quebec",
        link:"https://www.link-to-portfolio.com",
        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    educationInfo: {
        educationArr: [
            {
                school: "XYZ University",
                location: "Montreal, Quebec",
                degree: "Bachelor's of Science in Mathematics",
                date: "2020",
                id: uniqid()
            },
            {
            school: "QRS College",
            location: "Montreal, Quebec",
            degree: "DEC in Mathematics",
            date: "2014",
            id: uniqid()
        }
        ],
    },
    experienceInfo: {
        experienceArr: [
            {
                employer: "XYZ",
                location: "Montreal, Quebec",
                startDate: "2020",
                endDate: "Present",
                position: "Graphic designer",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                id: uniqid()
            },
            {
                employer: "ABC",
                location: "Montreal, Quebec",
                startDate: "2018",
                endDate: "2020",
                position: "Frontend developer",
                description:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                id: uniqid()
            },
            {
                employer: "LMN",
                location: "Montreal, Quebec",
                startDate: "2017",
                endDate: "2018",
                position: "Research assistant",
                description:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                id: uniqid()
            },
        ],
    },
    skillInfo: {
        skillArr: [
            {skill: "Photoshop", id: uniqid()},
            {skill: "Illustrator", id: uniqid()},
            {skill: "HTML | CSS", id: uniqid()},
            {skill: "Javascript", id: uniqid()},
            {skill: "React", id: uniqid()},
        ],
    },
};

export default exampleInfo;