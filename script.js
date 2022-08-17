// import the whole StopwatchTheme class
import StopwatchTheme from "./stopwatchTheme.js"

class Stopwatch {
    constructor() {
        this.flagSignal = false

        this.initialLapNumber = 0

        this.mainWatch = { hour: 0, minute: 0, second: 0, milisecond: 0 }

        this.lapWatch = { hour: 0, minute: 0, second: 0, milisecond: 0 }
    }

    runMainWatch() {
        if (this.flagSi === true) {

            this.mainWatch.milisecond += 1
            if (this.mainWatch.milisecond === 100) {
                this.mainWatch.second += 1
                this.mainWatch.milisecond = 0
            }

            if (this.mainWatch.second === 60) {
                this.mainWatch.minute += 1
                this.mainWatch.second = 0
            }

            if (this.mainWatch.minute === 60) {
                this.mainWatch.hour += 1
                this.mainWatch.minute = 0
            }

            if (this.mainWatch.hour === 24) {
                this.mainWatch.second = 0
                this.mainWatch.minute = 0
                this.mainWatch.hour = 0
            }

            let updatedHour = (this.mainWatch.hour < 10) ? "0" + this.mainWatch.hour : this.mainWatch.hour
            let updatedMinute = (this.mainWatch.minute < 10) ? "0" + this.mainWatch.minute : this.mainWatch.minute
            let updatedSecond = (this.mainWatch.second < 10) ? "0" + this.mainWatch.second : this.mainWatch.second
            let updatedMilisecond = (this.mainWatch.milisecond < 10) ? "0" + this.mainWatch.milisecond : this.mainWatch.milisecond

            document.querySelector(".main-watch").innerHTML =
                `${updatedHour}:${updatedMinute}:${updatedSecond}.<br/><span id="milisecond">${updatedMilisecond}</span>`
        }
    }

    runLapWatch() {
        if (this.flagSignal === true) {

            this.lapWatch.milisecond += 1
            if (this.lapWatch.milisecond === 100) {
                this.lapWatch.second += 1
                this.lapWatch.milisecond = 0
            }

            if (this.lapWatch.second === 60) {
                this.lapWatch.minute += 1
                this.lapWatch.second = 0
            }

            if (this.lapWatch.minute === 60) {
                this.lapWatch.hour += 1
                this.lapWatch.minute = 0
            }

            if (this.lapWatch.hour === 24) {
                this.lapWatch.second = 0
                this.lapWatch.minute = 0
                this.lapWatch.hour = 0
            }

            let updatedHour = (this.lapWatch.hour < 10) ? "0" + this.lapWatch.hour : this.lapWatch.hour
            let updatedMinute = (this.lapWatch.minute < 10) ? "0" + this.lapWatch.minute : this.lapWatch.minute
            let updatedSecond = (this.lapWatch.second < 10) ? "0" + this.lapWatch.second : this.lapWatch.second
            let updatedMilisecond = (this.lapWatch.milisecond < 10) ? "0" + this.lapWatch.milisecond : this.lapWatch.milisecond

            document.querySelector(".lap-watch").innerHTML =
                `${updatedHour}:${updatedMinute}:${updatedSecond}.<br/><span id="milisecond">${updatedMilisecond}</span>`
        }
    }

    startStopWatch(clickedElement) {
        switch (clickedElement.target.innerText) {

            case "START":
                clickedElement.target.innerText = "STOP"
                clickedElement.target.id = "stop"
                this.flagSi = true
                this.flagSignal = true
                break;

            case "STOP":
                clickedElement.target.innerText = "START"
                clickedElement.target.id = "start"
                this.flagSi = false
                this.flagSignal = false
                break;

            default:
                break;
        }
    }

    resetWatch() {
        this.flagSignal = false

        this.mainWatch.hour = 0
        this.mainWatch.minute = 0
        this.mainWatch.second = 0
        this.mainWatch.milisecond = 0

        this.lapWatch.hour = 0
        this.lapWatch.minute = 0
        this.lapWatch.second = 0
        this.lapWatch.milisecond = 0

        document.querySelector(".main-watch").innerHTML = `00:00:00.</br><span id="main-watch-milisecond">00</span>`

        document.querySelector(".lap-watch").innerHTML = `00:00:00.</br><span id="lap-watch-milisecond">00</span>`

        document.querySelector(".start-watch").innerText = "START"

        document.querySelector("table").innerHTML = ""

        // document.querySelector("#stop").innerText = (document.querySelector("#stop").innerText = "STOP") ? "START" : "STOP"
    }

    lapWatchButton() {
        if (document.querySelector('.main-watch').innerHTML === `00:00:00.</br><span id="main-watch-milisecond">00</span>`) {
            document.querySelector("#start").click()
            this.runMainWatch()
            this.mainLapButtonFunction()
        } else {
            this.mainLapButtonFunction()
        }
    }

    mainLapButtonFunction() {
        this.flagSignal = false

        this.lapWatch.hour = 0
        this.lapWatch.minute = 0
        this.lapWatch.second = 0
        this.lapWatch.milisecond = 0

        document.querySelector(".lap-watch").innerHTML = `00:00:00.</br><span id="lap-watch-milisecond">00</span>`

        this.flagSignal = true

        this.runLapWatch()

        let create = `
        <tr class='dynamicRow'>
            <td>
                ${this.initialLapNumber = (this.initialLapNumber < 10) ? "0" + this.initialLapNumber++ : this.initialLapNumber++} )
            </td>
            <td>
               ${document.querySelector(".main-watch").innerHTML}
            </td>
            <td>
                ${document.querySelector(".lap-watch").innerHTML}
            </td>
        </tr> `
        document.querySelector('table').insertAdjacentHTML('beforeend', create)
    }
}

let stopwatchFirstInstance = new Stopwatch()


document.querySelector("#start").addEventListener("click", clickedElement => stopwatchFirstInstance.startStopWatch(clickedElement))

document.querySelector("#reset").addEventListener("click", () => stopwatchFirstInstance.resetWatch())

document.querySelector("#lap-button").addEventListener("click", () => stopwatchFirstInstance.lapWatchButton())



// these 2 statements are being executed through the power of javascript of modules
let firstInstanceStopwatchTheme = new StopwatchTheme()

// function to handle theme status
document.getElementById("theme").addEventListener("click", element => StopwatchTheme.themeHandler(element))

let interval = setInterval(() => {
    stopwatchFirstInstance.runMainWatch()
    stopwatchFirstInstance.runLapWatch()
}, 10)