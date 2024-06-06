var facts = [
    "Did you know that 12 + the hour on your time right now = the hour in your time in military time? (Example: 12 + 6 = 18, so 6pm is the 18th hour in military time)",
    "Did you know that it takes days with thousands of lines of code to make a whole entire computer!?",
    `Did you know it is the hour of ${new Date().getHours()}!?`,
    "Did you know that this computer has over 60 files!?",
    `Did you know today is the day of the number ${new Date().getUTCDay()}`,
    "Did you know an average american spends 8-10 hours on a device (laptops, phones, ipads, tablets, etc.)?",
    "Did you know Yosemite park is beautiful out there?",
    "Did you know that AI (Artificial Intelligence) can make beautiful and realistic images?",
    "Did you know that nostalgia makes you sad?",
    `SPECIAL PRIZE from a 99.9% chance of getting! <a href='https://supermario-bros.com'>You can play super mario bros here!</a>`
];
var text = document.querySelector("#fact");
var next = document.querySelector("#next");
var tts = document.querySelector("#readAloud");
var copy = document.querySelector("#copy");
text.innerHTML = facts[Math.floor(Math.random()*facts.length)];
next.addEventListener("click", function() {
    text.innerHTML = facts[Math.floor(Math.random()*facts.length)];
});
tts.addEventListener("click", function() {
    let speech = new SpeechSynthesisUtterance();
    speech.text = text.innerHTML;
    window.speechSynthesis.speak(speech);
});
copy.addEventListener("click", function() {
    navigator.clipboard.write(text.innerHTML);
});