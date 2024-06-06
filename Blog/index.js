/* COPYRIGHT TEXT */
let brand = "Itzgametime Vip"; /* Your name here */
let rightsReserved = function(yan) {
    if (yan == true) {
        return "All rights reserved."
    }
    else {
        return
    }
} /* If the parameter is true, then it will say All rights reserved.
If it is not true, which is false, it will not say anything */
/* Add copyright text to html */
document.write(`<p style="color: white;">&copy;Copyright ${brand}. ${rightsReserved(true)}</p>`);