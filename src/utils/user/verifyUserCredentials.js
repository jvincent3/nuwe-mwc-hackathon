export default function verifyUserCredentials(email, password) {
    const storedUsers = JSON.parse(localStorage.getItem("users"))
    const user = storedUsers.find(user => user.email === email)

    return user.password === password
}