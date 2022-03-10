var icon = document.getElementById("icon");
var photo = document.getElementById("photo");
var insta = document.getElementById("insta");
var git = document.getElementById("github");
var vk = document.getElementById("vk");
var fb = document.getElementById("facebook");

icon.onclick = function () {
  document.body.classList.toggle("body_light_theme");
  if (document.body.classList.contains("body_light_theme")) {
    icon.src = "../images/dark-mode-icon.svg";
  } else {
    icon.src = "../images/light-mode-icon.svg";
  }
  if (document.body.classList.contains("body_light_theme")) {
    photo.src = "../images/light-mode-photo.jpg";
  } else {
    photo.src = "../images/intro__headshot.jpg";
  }
  if (document.body.classList.contains("body_light_theme")) {
    insta.src = "../images/insta_icon_light.svg";
  } else {
    insta.src = "../images/insta_icon_dark.svg";
  }
  if (document.body.classList.contains("body_light_theme")) {
    git.src = "../images/GitHub_icon_light.svg";
  } else {
    git.src = "../images/GitHub_icon_dark.svg";
  }
  if (document.body.classList.contains("body_light_theme")) {
    vk.src = "../images/vk_icon_light.svg";
  } else {
    vk.src = "../images/vk_icon_dark.svg";
  }
  if (document.body.classList.contains("body_light_theme")) {
    fb.src = "../images/facebook_icon_light.svg";
  } else {
    fb.src = "../images/facebook_icon_dark.svg";
  }
};
