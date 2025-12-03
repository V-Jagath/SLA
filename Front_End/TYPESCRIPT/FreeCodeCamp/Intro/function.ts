// 1. Number 

function add(num: number) {
    return num + 2
}

add(23)

// 2. String 

function toUpperCase(val: string) {
    return val.toLocaleUpperCase()
}

toUpperCase("jagath")

// 3. Perameter Types

function signIn(name: string, email: string, mobile: number, ispaid: boolean) {
    console.log(`Name:${name},email:${email},mobile:${mobile},isPaid:${ispaid}`)
};

signIn("jagath", "jagath9360@gmail.com", 24453, true);

// 4. Default Parameter

let login = (name: string, email: string, age: number, ispaid: boolean = false) => {
    console.log(`Name:${name},email:${email},age:${age},isPaid:${ispaid}`)
}

login("suriya", "suriya@gmail.com", 23) // not error because default parameter is here.


// 5.(parameter: type): returnType => {}

// const hero = ["thor", "spider Man", "ironMan"]
const hero = [1, 2, 3]

hero.map((e): string => {
    return `Heros are ${e}` //2
})


// what do is the function always return a string values.

// 6. Void - The function does not return any value.

function consoleError(errMsg: string): void {
    console.log(errMsg);
    // return errMsg
}

// you can use void don't return anything

// 7. Never - The function with never not return or always throw an error.

function handleError(errMsg: string): never {
    throw new Error(errMsg)
}

