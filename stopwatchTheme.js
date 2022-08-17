class StopwatchTheme {
    constructor() {
        StopwatchTheme.setStyleToDOM()
    }

    static themeHandler(element) {
        switch (element.target.innerText) {
            case "Dark":
                element.target.innerText = "Light"
                let darkTheme = { background: "#313131", color: "gray", buttonName: "Light" }
                localStorage.setItem("theme", JSON.stringify(darkTheme))

                StopwatchTheme.setStyleToDOM()
                break;

            case "Light":
                element.target.innerText = "Dark"
                let lightTheme = { background: "#eee", color: "black", buttonName: "Dark" }
                localStorage.setItem("theme", JSON.stringify(lightTheme))

                StopwatchTheme.setStyleToDOM()
                break;

            default:
                break;
        }
    }

    static setStyleToDOM() {
        if (localStorage.getItem("theme") === null) {
            return;
        } else {
            let fetchStyleFromLocalStorage = JSON.parse(localStorage.getItem("theme"))
            document.getElementById("theme").innerText = fetchStyleFromLocalStorage.buttonName
            document.body.style.background = fetchStyleFromLocalStorage.background
            document.body.style.color = fetchStyleFromLocalStorage.color
        }
    }
}

export default StopwatchTheme 