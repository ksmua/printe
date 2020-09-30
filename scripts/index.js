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

  var searchField = document.querySelector(".search-field");
  var searchInput = document.querySelector(".search-input");
  console.log(searchInput);
  console.dir(searchInput);
  searchField.addEventListener("mouseenter", ()=> {
    console.log('mouseenter');
    // searchInput.classList.remove("hide");
    // searchInput.classList.add("show");
    if (!menuBar.classList.contains("active")){
      searchInput.classList.remove("hide");
      searchInput.classList.add("show");
      // searchField.style.width = '300px';
      // searchField.style.width = '300px';
      console.dir(searchInput);
    }

  });

  searchField.addEventListener("mouseleave", ()=> {
    console.log("mouseleave");
    // searchInput.classList.remove("hide");
    // searchInput.classList.add("show");
    // if (!document.activeElement == searchInput){
    console.log(searchInput.matches(':focus'));
    if (!menuBar.classList.contains("active")) {
      if (!searchInput.matches(':focus')){
        searchInput.classList.add("hide");
        searchInput.classList.remove("show");
        searchField.style.width = 'auto';
      }
    }
  });
  document.addEventListener("click", (event)=> {
    if (!menuBar.classList.contains("active")) {
      if (event.target !== searchInput){
        searchInput.classList.add("hide");
        searchInput.classList.remove("show");
        searchField.style.width = 'auto';
      }
    }
    // if (menuBar.classList.contains("active")) {
    //   if (event.target !== menuBar) {
    //     menuBar.classList.remove("active");
    //   }
    // }

    console.log("document click");
  });
  searchInput.addEventListener("mouseleave", ()=> {
    console.log("searchInput mouseleave");
  });
  // if (!menuBar.classList.contains("active") )
  console.log(searchField);

}
