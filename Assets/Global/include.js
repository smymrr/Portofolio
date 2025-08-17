function includeHTML(id, file) {
  fetch(file)
    .then(response => response.text())
    .then(data => document.getElementById(id).innerHTML = data);
}

// load navbar + footer
includeHTML("navbar", "navbar.html");
includeHTML("socials", "socials.html");
