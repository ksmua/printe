// window.onload = function () {};
window.onload = () => {
  console.log('page is fully loaded');

  var phonesButtons = document.querySelectorAll(".phones__btn");
  

  
  phonesButtons.forEach( (elem) => {
    var phonesMobile = elem.parentNode.parentNode.children[1];
    console.dir(elem.parentNode.parentNode.children[1]);
    elem.addEventListener("click", () => {
      if (phonesMobile.style.display == "block") {
        phonesMobile.style.display = "none";
      } else phonesMobile.style.display = "block";  
    });  
  });

  var menuBar = document.querySelector(".menu-bar");
  var menuBarBtn = document.querySelector(".menu-bar__btn");
  var body = document.querySelector("body");

  menuBarBtn.addEventListener("click",  () => {
    menuBar.classList.toggle("active");
    menuBarBtn.classList.toggle("active");
    body.classList.toggle("lock");
  });
}
