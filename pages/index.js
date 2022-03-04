var icon = document.getElementById("icon");
var photo = document.getElementById("photo");

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
};
