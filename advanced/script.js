document.addEventListener("DOMContentLoaded", function () {
    const styleToggle = document.getElementById("style-toggle");
    let stylesEnabled = true;

    styleToggle.addEventListener("click", function () {
        stylesEnabled = !stylesEnabled;
        if (stylesEnabled) {
            document.querySelector("link[rel='stylesheet']").setAttribute("href", "styles.css");
        } else {
            document.querySelector("link[rel='stylesheet']").setAttribute("href", "");
        }
    });
});