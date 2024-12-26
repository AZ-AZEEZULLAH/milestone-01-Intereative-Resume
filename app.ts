
const toggleButton = document.getElementById(
    "toggle-hobbies"
  ) as HTMLButtonElement;
  const hobbiesSection = document.getElementById("hobbies") as HTMLElement;
  
  let isHobbiesVisible = false;
  
  toggleButton.addEventListener("click", () => {
    isHobbiesVisible = !isHobbiesVisible;
  
    if (isHobbiesVisible) {
      hobbiesSection.style.display = "block";
      hobbiesSection.style.maxHeight = hobbiesSection.scrollHeight + "px";
      toggleButton.textContent = "Hide Hobies & Intersts";
    } else {
      hobbiesSection.style.maxHeight = "0";
      toggleButton.textContent = "Show Hobbies & Intersts";
    }
  });
  