// window.onload = function () {};
window.onload = () => {
  console.log('page is fully loaded');

  var phonesBtn = document.querySelector("#phones__btn");
  var phonesMobile = document.querySelector(".phones__mobile");

  phonesBtn.addEventListener("click", () => {
    if (phonesMobile.style.display == "block"){
      phonesMobile.style.display = "none";
    } else phonesMobile.style.display = "block";
  })
};