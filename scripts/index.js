"use strict";

window.onload = function () {

  var phonesButtons = document.querySelectorAll(".phones__btn");
  phonesButtons.forEach(function (elem) {
    var phonesMobile = elem.parentNode.parentNode.children[1]; 

    elem.addEventListener("click", function () {
      if (phonesMobile.style.display == "block") {
        phonesMobile.style.display = "none";
      } else phonesMobile.style.display = "block";
    });
  });

  var menuBar = document.querySelector(".menu-bar");
  var menuBarBtn = document.querySelector(".menu-bar__btn");
  var body = document.querySelector("body");
  
  menuBarBtn.addEventListener("click", function () {
    menuBar.classList.toggle("active");
    menuBarBtn.classList.toggle("active");
    body.classList.toggle("lock");
  });

  var searchField = document.querySelector(".search-field");
  var searchInput = document.querySelector(".search-input");

  searchField.addEventListener("mouseenter", function () {
    if (!menuBar.classList.contains("active")) {
      searchInput.classList.remove("hide");
      searchInput.classList.add("show");
    }
  });

  searchField.addEventListener("mouseleave", function () {
    if (!menuBar.classList.contains("active")) {
      if (!searchInput.matches(':focus')) {
        searchInput.classList.add("hide");
        searchInput.classList.remove("show");
        searchField.style.width = 'auto';
      }
    }
  });

  document.addEventListener("click", function (event) {
    if (!menuBar.classList.contains("active")) {
      if (event.target !== searchInput) {
        searchInput.classList.add("hide");
        searchInput.classList.remove("show");
        searchField.style.width = 'auto';
      }
    } 

  });

  searchInput.addEventListener("mouseleave", function () {
    console.log("searchInput mouseleave");
  }); 

}