const popupContainer = document.getElementById("popupContainer");

function showPopup(clickedElement) {
  const showcaseContent = clickedElement.innerHTML;

  popupContainer.innerHTML = `
    <div class="popup-content">
      ${popupContainer.innerHTML}
    </div>
  `;

  popupContainer.classList.add("active");
}

popupContainer.addEventListener("click", () => {
  popupContainer.classList.remove("active");
});
