export default function setUser(userValues) {
    const storedUsers = JSON.parse(localStorage.getItem("users"))
    localStorage.setItem("users", JSON.stringify([...storedUsers, userValues]))
}