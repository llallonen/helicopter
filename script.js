function openTab(evt, tabName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" tabs-bar__item--active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " tabs-bar__item--active";
  }

let nightmodeSwitcher = document.getElementById("nightmode-switcher");
var themeLink = document.getElementById("theme-link");

let lightTheme = "light-theme.css";
let darkTheme = "dark-theme.css";

let currTheme = localStorage.getItem("theme");

if (currTheme == undefined) {
  localStorage.setItem("theme", lightTheme);
} else {
  ChangeTheme(currTheme);
  localStorage.setItem("theme", getCurrentThemeName());
}

nightmodeSwitcher.addEventListener("click", function () { 
  ChangeTheme(isThemeLight() ? darkTheme : lightTheme); 
  localStorage.setItem("theme", getCurrentThemeName());
});

function ChangeTheme(name) {
  themeLink.setAttribute("href", name);
  changeNightModeSwitcherIcon();
}

function getCurrentThemeName() {
  return themeLink.getAttribute("href");
}

function isThemeLight() {
  let lightTheme = "light-theme.css";
  
  return getCurrentThemeName() == lightTheme;
}

function changeNightModeSwitcherIcon() {
  let themeIcons = document.querySelectorAll('.theme-icon');
  let nightModeIcon = document.querySelector('#moon');
  let dayModeIcon = document.querySelector('#sun'); 

  if (isThemeLight()) {
    nightModeIcon.classList.remove('invisible');
    dayModeIcon.classList.add('invisible');
  } else {
    nightModeIcon.classList.add('invisible');
    dayModeIcon.classList.remove('invisible');
  }
}