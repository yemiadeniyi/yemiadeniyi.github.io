'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}


//added line

document.addEventListener('DOMContentLoaded', () => {
  // Testimonials modal popup
  const modalBtns = document.querySelectorAll('[data-testimonials-item]');
  const modalCloseBtn = document.querySelector('[data-modal-close-btn]');
  const modalContainer = document.querySelector('[data-modal-container]');
  
  modalBtns.forEach(btn => {
      btn.addEventListener('click', () => {
          //const avatar = btn.querySelector('[data-testimonials-avatar]').getAttribute('src');
          const name = btn.querySelector('[data-testimonials-title]').textContent;
          const text = btn.querySelector('[data-testimonials-text]').textContent;

          //document.querySelector('[data-modal-img]').setAttribute('src', avatar);
          document.querySelector('[data-modal-title]').textContent = name;
          document.querySelector('[data-modal-text] p').textContent = text;

          modalContainer.classList.add('active');
      });
  });

  modalCloseBtn.addEventListener('click', () => {
      modalContainer.classList.remove('active');
  });

  // Portfolio modal popup
  const portfolioModalBtns = document.querySelectorAll('[data-portfolio-item]');
  const portfolioModalCloseBtn = document.querySelector('[data-portfolio-modal] .modal-close-btn');
  const portfolioModalContainer = document.querySelector('[data-portfolio-modal]');

  portfolioModalBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
          e.preventDefault();

          //const image = btn.getAttribute('data-image');
          const title = btn.getAttribute('data-title');

          //portfolioModalContainer.querySelector('.popup-image').setAttribute('src', image);
          portfolioModalContainer.querySelector('.project-title').textContent = title;

          portfolioModalContainer.classList.add('active');
      });
  });

  portfolioModalCloseBtn.addEventListener('click', () => {
      portfolioModalContainer.classList.remove('active');
  });
});




//show different sample project 

// Sample popup texts
const popupTexts = {
  "Football": `
    <h2>Football Portfolio</h2>
    <br><b> Click on the Image Below for more information</></b><br><br>
    <a href="https://public.tableau.com/app/profile/opeyemi.adeniyi/viz/Top5LeaguePlayerScoutingDashboard/Dashboard1?publish=yes" target="_blank">
      <img src="/assets/images/project-1.jpg" alt="Football Project" style="max-width: 100%; height: auto;">
    </a><br><br>
    <p>The primary objective was to streamline the identification of players perfectly aligned with distinct positions on the field.<br><br>
    Recognizing that scouts and coaches employ a diverse set of metrics tailored to each role, I meticulously selected four key metrics for each of the nine positions, although the metrics can be increased as per the scout or coach instruction.<br><br>
    The resulting dashboard offers an interactive experience where users can effortlessly toggle between player positions. Each selection unveils the chosen metrics, providing a comprehensive view of a player’s prowess. A simple toggle on any player displays some of the player information.<br><br>
    The dashboard doesn’t stop there. It goes beyond the confines of individual players to offer insights into broader trends. Users can explore the number of games played by a player in their respective league, understand the impact of age on performance, and even conduct specific player searches to evaluate their across-the-board metrics.</p>
  `,
 
  "PowerBI": "<h2>PowerBI Performance Portfolio</h2><p>Sed nec mi vel purus sollicitudin dapibus. Nunc congue fermentum nunc, id fringilla orci egestas ut. In hac habitasse platea dictumst.</p>",
  "Sales": "<h2>Sales Management Portfolio</h2><p>Curabitur auctor euismod purus, ac tincidunt ante eleifend non. Fusce id ipsum id arcu finibus lacinia.</p>",
  "CarSales": "<h2>PREDICTING CAR PRICE.</h2><p>Praesent ac metus consectetur, tempus enim eget, varius felis. Integer laoreet, risus at pharetra vehicula, mi lectus lacinia ligula.</p>",
 "Task Manager": "<h2>Upcoming Project</h2><p>Fusce congue enim id semper volutpat. Sed ultrices, turpis sed vehicula tincidunt, lorem libero congue neque.</p>",
  };

const viewProjectLinks = document.querySelectorAll('.view-project');

viewProjectLinks.forEach(link => {
  link.addEventListener('click', function(e) {
      e.preventDefault();

      const title = this.getAttribute('data-title');
      const modal = document.querySelector('.project-modal');
      //const popupImage = modal.querySelector('.popup-image');
      const projectTitle = modal.querySelector('.project-title');
      const popupContent = modal.querySelector('.popup-text');

      //popupImage.src = this.getAttribute('data-image');
      projectTitle.textContent = title;
      popupContent.innerHTML = popupTexts[title];
      
      modal.classList.add('active');
  });
});

// Close modal
const closeModalBtn = document.querySelector('[data-modal-close-btn]');
closeModalBtn.addEventListener('click', function() {
  const modal = document.querySelector('.project-modal');
  modal.classList.remove('active');
});
