1. Promise Method Fetch Data

fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
    return response.json()
}).then((data) => {
    data.map((e) => {
        console.log(e.name)
    })
})

// response.json() returns a Promise

// .then() must return a value (or a promise) to the next .then()

// Without return, the next .then() gets undefined

// 2. Async & Await Method Fetch Data

const getUsers = async () => {
    try {
        const user = await fetch("https://jsonplaceholder.typicode.com/users");
        const userData = await user.json()
        console.log(userData)
    } catch (err) {
        console.log(err)
    }
}

getUsers()

// ✔ await fetch(...)

// Waits for the fetch promise to resolve and gives you the response object.

// ✔ await response.json()

// Waits for the body to be converted into JSON and gives you the actual data.

// ✔ try/catch

// Handles errors like .catch() in Promises.

