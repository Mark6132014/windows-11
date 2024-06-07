console.log("%cSTOP!\nIf something is wrong, you can debug it using the Inspect element.\nWebsite: %o", "color: red; background: white", "https://itzgametime-vip.w3spaces.com");
window.addEventListener("contextmenu", (event) => {
    let x = event.clientX + "px";
    let y = event.clientY + "px";
    let obj = document.querySelector(".right-click");
    obj.style.position = "absolute";
    obj.style.top = y;
    obj.style.left = x;
    obj.style.display = "block";
    obj.style.animation = "fadeinRC 0.6s 1";
    if (obj.style.display == "block") {
        obj.style.display = "none";
        setTimeout(() => {
      let menu = document.querySelector(".right-click");
      menu.style.display = "block";
      menu.style.animation = `fadeinRC 0.6s 1`;
        }, 100);
      }
});
document.querySelector("#searchBtn").addEventListener("click", () => {
    let input = document.querySelector("#web-address");
    if (input.value == null || "") {
        alert("Can't go to the website, type something in!");
    }
    else {
        document.querySelector("#website").src = input.value;
    }
});
function executeCode(code) {
    console.log("Executed JavaScript code:\n" + code);
    return code
}
document.querySelector(".cmd-prompt #execute").addEventListener("click", () => {
    let input = document.querySelector(".cmd-prompt input");
    executeCode(input.value);
});
let imgs = document.querySelectorAll("img");
for (var i = 0; imgs > imgs.length; i++) {
    imgs[i].setAttribute("draggable", "false");
}
setInterval(() => {
    document.querySelector('.timedate').innerHTML = new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds() + '<br>' + new Date().getMonth() + '/' + new Date().getDay() + '/' + new Date().getFullYear();
}, 1000);
let mediaControls = {
    video: document.querySelector(".media-player video"),
    play: document.querySelector(".media-player #play"),
    stop: document.querySelector(".media-player #stop"),
    fullscreen: document.querySelector(".media-player #fullscreen")
};
mediaControls.play.addEventListener("click", () => {
    video.play();
});
mediaControls.stop.addEventListener("click", () => {
    video.pause();
});
mediaControls.fullscreen.addEventListener("click", () => {
    video.requestFullscreen().catch((e) => {
        console.log(e);
    });
});
setTimeout((problem) => {
    console.warn(problem);
    document.querySelector(".welcome").style.opacity = 0;
    setTimeout(() => {
        document.querySelector(".welcome").style.display = "none";
    }, 2500);
}, 2300);
var system = {
    newWebsite: function(address, icon, tabName, tabWidth) {
        let browser = document.querySelector(".ms-edge-application");
        let webbar = browser.querySelector("#web-address");
        let website = browser.querySelector("#website");
        let tabmenu = browser.querySelector(".tabmenu");
        let tab = tabmenu.querySelector(".tab");
        let favicon = tab.querySelector("#icon");
        let title = tab.querySelector("#title");
        browser.style.display = "block";
        webbar.value = address;
        website.src = address;
        favicon.src = icon;
        if (tabName.includes("<")) {
            title.innerHTML = "Untitled";
        }
        if (tabName.includes(">")) {
            title.innerHTML = "Untitled";
        }
        else {
            title.innerHTML = tabName;
            tab.style.width = parseInt(tabWidth) + "px";
        }
    }
};
var taskbar = {
    start: function() {
        document.querySelector(".startmenu").style.display = "block";
        document.querySelector(".startmenu").style.animation = "pressedStart linear 0.398s 1";
        document.querySelector("#activate").style.display = "none";
    },
    search: function() {
        document.querySelector(".searchmenu").style.display = "block";
        document.querySelector(".searchmenu").style.animation = "pressedSearch linear 0.398s 1";
        console.log("The notes and problems and updates will be at the left side of the search menu.");
    },
    taskView: function() {
        document.querySelector(".task-view-application").style.display = "block";
        document.querySelector(".task-view-application").style.animation = "taskView linear 0.398s 1";
    },
    news: function() {
        document.querySelector(".news-widget_open").style.display = "block";
        document.querySelector(".news-widget_open").style.animation = "openNewsWidgets linear 0.398s 1";
    },
    chat: function() {
        document.querySelector(".chat-box").style.display = "block";
    },
    explorer: function() {
        document.querySelector("#files").style.display = "block";
    },
    microsoftStore: function() {
        document.querySelector('.ms-store-application').style.display = 'block';
    },
    browser: function() {
        console.log("Your browser is Microsoft Edge, Microsoft Edge is the only browser you have in every Windows 11 computer.");
        system.newWebsite("https://bing.com", "Icons/ms_edge.png", "New Tab", 180);
    },
    MyWebsite: function() {
        alert("It crashed, we don't know what to do to fix it.");
        let pw = propmt("Password:");
        if (pw == "pizza") {
            location.assign("https://itzgametime-vip.w3spaces.com");
        }
        else {
            alert("Sorry! Wrong password, you cannot go to our website until you get the password correct.");
        }
    }
};
document.querySelector("#files .go").addEventListener("click", () => {
    let input = document.querySelector("#files .address").value;
    system.newWebsite(input, "Images/profile.png", "Website opened by explorer.exe", 260);
});
document.querySelector(".accessibility").addEventListener("click", () => {
    let speech = new SpeechSynthesisUtterance();
    speech.text = "Make your computer easier to use. Windows will read and scan this list automatically. Press the space bar or the tab button to select the highlighted option.";
    window.speechSynthesis.speak(speech);
});
if (!localStorage.getItem('Displayusername')) {
    var name = prompt("Name please:");
    localStorage.setItem('Displayusername', name);
  } else {
    document.querySelector(".welcome center").innerHTML = "Welcome, " + name;
    document.querySelector("#activate").innerHTML = name + "<br>Owner: Itzgametime Vip";
    document.querySelector("#username").value = name;
  }
if (!localStorage.getItem('ActivationReminder')) {
    var activationnreminder = document.querySelector("#activatereminder").value;
    localStorage.setItem('ActivationReminder', activationnreminder);
} else {
    document.querySelector("#activatereminder").value = activationnreminder;
    document.querySelector("#activate").addEventListener("click", () => {
        let speech = new SpeechSynthesisUtterance();
        speech.text = activationnreminder;
        window.speechSynthesis.speak(speech);
    });
}
document.querySelector("#changeUsername").addEventListener("click", () => {
    let Newusername = document.querySelector("#username").value;
    if (Newusername.includes("<")) {
        alert("Can't have that");
        document.querySelector("#username").value = "";
    }
    if (Newusername.includes(">")) {
        alert("Can't have that");
        document.querySelector("#username").value = "";
    }
    else {
    name = document.querySelector("#username").value;
    }
});
var story = document.querySelector("#story");
document.querySelector(".news-application #label").innerHTML = "Hi, " + name + "! Welcome to News and Blogs!";
document.querySelector(".searchmenu #label").innerHTML = "You can search here, " + name + ":";
let trashes = [
    "Icons/recycle_bin_empty.webp",
    "Icons/recycle_bin_full.webp"
];
document.querySelector(".recycle-bin .trash").src = trashes[Math.floor(Math.random()*trashes.length)];
function changeStoryPage() {
    new Audio("Sounds/page flip.mp3").play();
}
window.addEventListener("input", () => {
    new Audio("Sounds/press key.mp3").play();
});
function submitActivationReminder() {
    activationnreminder = document.querySelector("#activatereminder").value;
}
document.querySelector(".news-widget_open .date").innerHTML = new Date();
document.querySelector(".news-widget_open .widgets center .sports .sorry").innerHTML = "Sorry, " + name + ". Maybe you could see it next time!";
navigator.getBattery().then(function(battery) {
    var level = Math.round(battery.level * 100);
    document.querySelector(".battery").innerHTML = "Battery: " + level + "%";
});
function toggleControlMenu() {
    let controlmenu = document.querySelector(".controls-menu");
    controlmenu.style.display = "block";
    controlmenu.style.animation = "openControls linear 0.2s 1";
}
document.querySelector(".controls").addEventListener("click", toggleControlMenu);
document.querySelector(".get-started-application .getStartedWithOptions .hi").innerHTML = "Welcome back, " + name + "!";
document.querySelector(".startmenu .profile .name").innerHTML = "&ensp;" + name;
