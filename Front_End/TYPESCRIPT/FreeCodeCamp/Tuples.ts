// 1. Tuple is a fixed-length array where each position has a specific type.
// Order matters + Type matters + Length matters

// let user: (string | number)[] = ["jagath", 23] 

let user: [string, number, boolean, number?];

user = ["jagath", 23, true];

// user = [true, 23, "Jagath"]; // its not allowed becasue 0th element must be a string

// you dont directly add value but you can use array methods to add some values 

user = ["jagath", 23, true, 8, 90] //its throw error because,4th index is undefined,but

user.push(6) //its allowed typescript 