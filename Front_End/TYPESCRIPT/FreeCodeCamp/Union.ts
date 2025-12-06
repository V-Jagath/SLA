// 1. Union
// Union type allows a variable to hold more than one type. 

let student: number | string | boolean = 23;
student = "jagath";
student = true;

type employee = {
    readonly emp_id: number,
    emp_name: string,
    emp_dept: string,
    dept_id: number
};

type employee1 = {
    role: string,
    salary: number
};

// 2 types used union 

let Manager: employee | employee1 = {
    emp_id: 123,
    emp_name: "string",
    emp_dept: "string",
    dept_id: 12,
    role: "true",
    salary: 234356
};


const newUser = (id: number | string) => {
    // id.toLowerCase()
    if (typeof id === "string") {
        id.toLocaleLowerCase()
    }
    if (typeof id === "number") {
        id.toFixed()
    }
}


// Array  

const data: (number | string | boolean)[] = [1, true, 2, 34, "jagath"]


let pi: 3.14;

// pi=3.23 // you dont asssign other values
//  in PI because its already defiend


// You need use only 3 options only 

let gender: "male" | "female" | "3rdgender";

gender = "female"
// gender = "boy" 