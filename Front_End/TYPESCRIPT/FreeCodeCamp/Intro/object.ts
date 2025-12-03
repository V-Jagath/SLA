// const user: { name: string; email: string; isActive: boolean } = {
//     name: "Jagath",
//     email: "jagath@9360",
//     isActive: true
// }

function createUser({ name: string, isPaid: boolean }) {
    return `${name} and it ${isPaid}`
}

createUser({ "jagath", true})