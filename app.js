var toggleButton = document.getElementById("toggle-hobbies");
var hobbiesSection = document.getElementById("hobbies");
var isHobbiesVisible = false;
toggleButton.addEventListener("click", function () {
    isHobbiesVisible = !isHobbiesVisible;
    if (isHobbiesVisible) {
        hobbiesSection.style.display = "block";
        hobbiesSection.style.maxHeight = hobbiesSection.scrollHeight + "px";
        toggleButton.textContent = "Hide Hobies & Intersts";
    }
    else {
        hobbiesSection.style.maxHeight = "0";
        toggleButton.textContent = "Show Hobbies & Intersts";
    }
});
