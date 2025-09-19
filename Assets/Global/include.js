function includeHTML(id, file) {
  fetch(file)
    .then(response => response.text())
    .then(data => document.getElementById(id).innerHTML = data);
}

includeHTML("navbar", "Assets/Global/navbar.html");
includeHTML("socials", "Assets/Global/socials.html");