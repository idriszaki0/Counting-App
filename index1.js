// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragprah
// that has the id="error"

let errorParagraph = document.getElementById("error")
console.log(errorParagraph)

function purchase() {
    console.log("button clicked")
    errorParagraph.textContent = "Something weent wrong, please try again"
}