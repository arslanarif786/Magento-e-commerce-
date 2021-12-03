/// in this file., i have given all the validations for the new user
/// means to say that if a new user wants to register in our system
/// he/she have to follow these validationsat the time of registeration

const emailRegex = [

    (v) => !!v || "Email Address is required",

    (v) =>

    /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$/.test(v) || "E-mail must be valid",

];

const firstNameRegex = [

    (v) => !!v || "Name is required",

    (v) => (v && v.length <= 15) || "Name must be less than 15 characters",

];

const lastNameRegex = [

    (v) => !!v || "Name is required",

    (v) => (v && v.length <= 15) || "Name must be less than 15 characters",

];

const passwordRegex = [(v) => !!v || "Password is required",

    (v) => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(v) || "Password must be minimum eight characters, atleast one letter and one number"
];

const userNameRegex = [(v) => !!v || "Username is required",

    (v) => /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/.test(v) || "Else"
]


const numberRegex = [(v) => !!v || "Phone Number is required",
    (v) => /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/.test(v) || "Phone Number must be in Pakistan format",
];

export {
    emailRegex,
    firstNameRegex,
    lastNameRegex,
    userNameRegex,
    passwordRegex,
    numberRegex
};