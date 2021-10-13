// @
// document.getElementById("count-el").innerText = 5

// let firstBatch = 5
// let secondBatch = 7
// let count = firstBatch + secondBatch
// console.log(count)
// @

// @
// 1. Create two variables, myAge and humanDogRatio
// 2. Multiply the two together and store the result in myDogAge
// 3. Log myDogAge to the console

// let myAge = 35
// let humanDogRatio = 7

// let myDogAge = myAge * humanDogRatio

// console.log(myDogAge)
// @

// let count = 5

// count + 1
// count = count + 1

// console.log(count)

// @
// Create a variable, bonusPoints, Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70
// Console.log the value after each step

// let count = 5 
// count = count + 1
// console.log(count)

// bonus point
// let bonusPoints = 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)

// bonusPoints= bonusPoints + 45
// console.log(bonusPoints)
// @

// @
// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count
// *

// function increment() {
//     console.log("The button was clicked")
// }
// @

// @
// Setting up the race

// function countdown() {
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }
// countdown()

// GO! 
// Players are running the race
// Race is finished

// Get ready for a new race
// @

// @
// Create a function (you decide the name) that logs out the number 43 to the console
// Call/invoke the function

// function myLogger() {
//     console.log(42)
// }

// myLogger()

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36
// @

// @
// // Create a function that logs out the sum of all the lap times
// function logLapTime() {
//     let totalTime = lap1 + lap2 + lap3
//     console.log(totalTime)
// }

// logLapTime()

// @
// let lapsCompleted = 0

// Create a function that increments the lapsCompleted variables with one
// Run it three times

// function incrementLap() {
//     lapsCompleted = lapsCompleted + 1
// }

// incrementLap()
// incrementLap()
// incrementLap()

// console.log(lapsCompleted)
// @

// @
// document.getElementById("count-el").innerText = 5

// change the count-el in the HTML to reflect the new count

// camelCase
// let countEl = document.getElementById("count-el")
// let count = 0

// function increment() {
//     count = count + 1
//     countEl.innerText = count
// }

// 1. Create a function, save(), which logs out the count when it's called

// function save() {
//     console.log(count)
// }
// @

// @
// let username = "per"
// let message = "Your have Three new notifications"

// let messageToUser = message + ", " + username + "!"

// console.log(messageToUser)

// Create a variable, messageToUser, that contians the message we have logged
// @

// @
// create two variables, name and greeting. The name variables should store your name,
// and the greeting should store e.g. "Hi, my name is"

// Create a third variables, myGreeting, that contatenates the two strings
// Log myGreeting to the console

// let name = "per Harald Borgen"
// let greeting = "Hi, my name is"

// let myGreeting = greeting + name
// console.log(myGreeting)
// @

// @
// let points = 4
// let bonusPoints = "10"

// let totalPoints = points + bonusPoints

// console.log(4 + 5) // 9
// console.log("2" + "4") // 24
// console.log("5" + 1) // 51
// console.log(100 + "100") // 100100
// @

// @
// 1. Grab the save-el paragraph and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

console.log(saveEl)

function increment() {
    // Change ths to use the plus equal technique you've learned
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    // 2. Create a variable that containts both the count and the dash separator, i.e "12 - "
    // 3. Render the variables in teh saveEl using innerText
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
    // NB: Make sure to not delete the existing content of the paragraph
    console.log(count)
}

