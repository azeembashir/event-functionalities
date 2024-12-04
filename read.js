function readMore() {
    var more = document.getElementById("more");
    var button = document.getElementById("toggleButton");

    if (more.style.display === "block") {
        more.style.display = 'none';
        button.textContent = 'Read More';
    } else {
        more.style.display = 'block';
        button.textContent = 'Read Less';
    }
};