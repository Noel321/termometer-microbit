// spela tonerna
function playWeeWoo () {
    music.playTone(392, music.beat(BeatFraction.Whole))
}
let sec = 0
let ms = 0
let heatDetectionTimeStart = 0
let heatDetected = false
let currentTemperature = 0
let maxHeatLimit = 25

//main loop

basic.forever(function () {

 // Jämnför  nuvarande temratur till >= maxHeatLimit
    currentTemperature = input.temperature()
    if (currentTemperature >= maxHeatLimit) {


 // om tempraturen är >= maxHeatLimit
 // sätt heatDetected = true
        heatDetected = true

// om vi tidigare inte upptäckt  något 
// heatDetectionTimeStart till nuvarande tiden
// detta tillåter oss att se hur mycket tid som har passerat sedan värmen blev upptäckt
        if (heatDetectionTimeStart == 0) {
            heatDetectionTimeStart = input.runningTime()
        }
// spela noterna på en annan funktion 
// renare kod 
        playWeeWoo()
    } else {

// om vi inte har upptäckt värmen sedan innan och skriver hur mycket tid som har passerat
// och ändra variablern till false
        if (heatDetected == true) {
            ms = input.runningTime() - heatDetectionTimeStart
            sec = ms / 1000
            console.log(sec);
heatDetected = false
        }

// starta tiden 0 om tempratur är under maxHeatLimit
        if (heatDetectionTimeStart > 0) {
            heatDetectionTimeStart = 0
        }
    }
})
