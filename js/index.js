const form = document.getElementById("form")
const char = document.getElementById("char")
const setting = document.getElementById("setting")
const action = document.getElementById("action")
const story = document.getElementById("story")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    story.innerHTML = `Long time ago ${char.value} in ${setting.value} ${action.value}`;
})