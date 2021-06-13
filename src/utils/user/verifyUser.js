export default function verifyUser(email) {
    const storedUsers = JSON.parse(localStorage.getItem("users"))
    return storedUsers.some(person => person.email === email)
}