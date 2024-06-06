setInterval(() => {
    if (document.querySelector(".options").style.display == "block") {
        document.querySelector(".optionBtn").style.display = "none";
    }
    else {
        document.querySelector(".optionBtn").style.display = "block";
    }
}, 100);
function readAloud() {
    let speech = new SpeechSynthesisUtterance();
    speech.text = document.querySelector(".highlighted").innerHTML + " " + document.querySelector(".text").innerHTML;
    window.speechSynthesis.speak(speech);
}