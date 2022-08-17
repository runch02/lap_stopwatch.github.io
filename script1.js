// import the whole StopwatchTheme class
import StopwatchTheme from "./stopwatchTheme.js"

class LapStopwatch {
    constructor() {
        this.flag = false
        this.mainWatch = { hour: 0, minute: 0, second: 0, milisecond: 0 }
        this.lapWatch = { hour: 0, minute: 0, second: 0, milisecond: 0 }
    }

    static lapIndexInitialNumber = 0

    runMainWatchFunction() {
        if (this.flag === true) {

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
                this.mainWatch.hour = 0
                this.mainWatch.minute = 0
                this.mainWatch.second = 0
            }

            let updatedHour = (this.mainWatch.hour < 10) ? "0" + this.mainWatch.hour : this.mainWatch.hour
            let updatedMinute = (this.mainWatch.minute < 10) ? "0" + this.mainWatch.minute : this.mainWatch.minute
            let updatedSecond = (this.mainWatch.second < 10) ? "0" + this.mainWatch.second : this.mainWatch.second
            let updatedMilisecond = (this.mainWatch.milisecond < 10) ? "0" + this.mainWatch.milisecond : this.mainWatch.milisecond

            document.querySelector(".main-watch").innerHTML = `${updatedHour}:${updatedMinute}:${updatedSecond}.${updatedMilisecond}`
        }
    }

    runLapWatchFunction() {
        if (this.flag === true) {

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
                this.lapWatch.hour = 0
                this.lapWatch.minute = 0
                this.lapWatch.second = 0
            }

            let updatedHour = (this.lapWatch.hour < 10) ? "0" + this.lapWatch.hour : this.lapWatch.hour
            let updatedMinute = (this.lapWatch.minute < 10) ? "0" + this.lapWatch.minute : this.lapWatch.minute
            let updatedSecond = (this.lapWatch.second < 10) ? "0" + this.lapWatch.second : this.lapWatch.second
            let updatedMilisecond = (this.lapWatch.milisecond < 10) ? "0" + this.lapWatch.milisecond : this.lapWatch.milisecond

            document.querySelector(".lap-watch").innerHTML = `${updatedHour}:${updatedMinute}:${updatedSecond}.${updatedMilisecond}`
        }
    }

    startStopWatchFunction(clickedElement) {
        switch (clickedElement.target.innerText) {
            case "START":
                this.flag = true
                clickedElement.target.innerText = "STOP"
                clickedElement.target.id = "stop"
                break;

            case "STOP":
                this.flag = false
                clickedElement.target.innerText = "START"
                clickedElement.target.id = "start"
                break;

            default:
                break;
        }
    }

    resetStopWatchFunction() {
        this.flag = false

        this.mainWatch.hour = 0
        this.mainWatch.minute = 0
        this.mainWatch.second = 0
        this.mainWatch.milisecond = 0

        this.lapWatch.hour = 0
        this.lapWatch.minute = 0
        this.lapWatch.second = 0
        this.lapWatch.milisecond = 0

        document.querySelector(".main-watch").innerHTML = `00:00:00.00`

        document.querySelector(".lap-watch").innerHTML = `00:00:00.00`

        document.querySelector(".start-watch").innerText = "START"

        document.querySelector("#lapData").innerHTML = ""

        LapStopwatch.lapIndexInitialNumber = 0
    }

    increaseLapIndex(lapIndexNumber) {
        (lapIndexNumber < 10) ? "0" + lapIndexNumber++ : lapIndexNumber++
    }

    lapStopWatchFunction() {
        // if (this.mainWatch.hour === 0 && this.mainWatch.minute === 0 && this.mainWatch.second === 0 && this.mainWatch.milisecond === 0) {
        document.querySelector(".start-watch").innerText = "STOP"
        // }

        this.lapWatch.hour = 0
        this.lapWatch.minute = 0
        this.lapWatch.second = 0
        this.lapWatch.milisecond = 0

        let creatLapData =
            `
            <tr class="timeStampTitle">
                <!-- <td>${StopwatchFirstInstance.increaseLapIndex(LapStopwatch.lapIndexInitialNumber)}</td> -->
                <td>${(LapStopwatch.lapIndexInitialNumber < 10) ? "0" + LapStopwatch.lapIndexInitialNumber++ : LapStopwatch.lapIndexInitialNumber++}\t</td>
                <td>${document.querySelector(".main-watch").innerHTML}\t</td>
                <td>${document.querySelector(".lap-watch").innerHTML}\t</td>
            </tr>
            `

        document.querySelector("#lapData").insertAdjacentHTML("beforeend", creatLapData)

        this.flag = true
    }
}

let StopwatchFirstInstance = new LapStopwatch()

document.querySelector("#start").addEventListener("click", clickedElement => StopwatchFirstInstance.startStopWatchFunction(clickedElement))

document.querySelector("#reset").addEventListener("click", () => StopwatchFirstInstance.resetStopWatchFunction())

document.querySelector("#lap-button").addEventListener("click", () => StopwatchFirstInstance.lapStopWatchFunction())

let interval = setInterval(() => {
    StopwatchFirstInstance.runMainWatchFunction()
    StopwatchFirstInstance.runLapWatchFunction()
}, 10)

// ----------------------------------------------------------------------------------------------------------------------------------


// these 2 statements are being executed through the power of javascript of modules
let firstInstanceStopwatchTheme = new StopwatchTheme()

// function to handle theme status
document.getElementById("theme").addEventListener("click", element => StopwatchTheme.themeHandler(element))