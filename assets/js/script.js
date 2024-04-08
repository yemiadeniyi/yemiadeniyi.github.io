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
    <br><b> Click on the Image Below for more information</b><br><br>
    <a href="https://public.tableau.com/app/profile/opeyemi.adeniyi/viz/Top5LeaguePlayerScoutingDashboard/Dashboard1?publish=yes" target="_blank">
      <img src="/assets/images/project-1.jpg" alt="Football Project" style="max-width: 100%; height: auto;">
    </a><br><br>
    <p>The primary objective was to streamline the identification of players perfectly aligned with distinct positions on the field.<br><br>
    Recognizing that scouts and coaches employ a diverse set of metrics tailored to each role, I meticulously selected four key metrics for each of the nine positions, although the metrics can be increased as per the scout or coach instruction.<br><br>
    The resulting dashboard offers an interactive experience where users can effortlessly toggle between player positions. Each selection unveils the chosen metrics, providing a comprehensive view of a player’s prowess. A simple toggle on any player displays some of the player information.<br><br>
    The dashboard doesn’t stop there. It goes beyond the confines of individual players to offer insights into broader trends. Users can explore the number of games played by a player in their respective league, understand the impact of age on performance, and even conduct specific player searches to evaluate their across-the-board metrics.</p>
  `,
  "PowerBI": `
  <h2>PowerBI Performance Portfolio</h2><br><br>
  <h3><b>Click Below Images to have a feel of the dashboard</b></h3>

  <br>
    <a href="https://public.tableau.com/app/profile/opeyemi.adeniyi/viz/Top5LeaguePlayerScoutingDashboard/Dashboard1?publish=yes" target="_blank">
      <img src="/assets/images/project-1.jpg" alt="Football Project" style="max-width: 100%; height: auto;">
    </a><br><br>
    <br>
    <a href="https://public.tableau.com/app/profile/opeyemi.adeniyi/viz/Top5LeaguePlayerScoutingDashboard/Dashboard1?publish=yes" target="_blank">
      <img src="/assets/images/project-1.jpg" alt="Football Project" style="max-width: 100%; height: auto;">
    </a><br>

  <br>
  <h3><b>Business Request</b></h3><br>
  <p>As a business owner, I want a Power BI dashboard that provides a comprehensive overview of my pizza business. This dashboard should give me insights into our performance and help make informed decisions. Here’s what I need:</p>
  <br>
  <h3><strong>Total Revenue:</strong></h3>
  <p>I want to see the total revenue generated, allowing me to track our earnings over time.</p>
  <br>
  <h3><strong>Average Order Value:</strong></h3>
  <p>It’s important to know the average amount spent by each customer, helping us understand customer behavior.</p>
  <br>
  <h3><strong>Total Pizzas Sold:</strong></h3>
  <p>This metric shows the volume of pizzas we’re selling, giving an idea of our popularity.</p>
  <br>
  <h3><strong>Total Orders:</strong></h3>
  <p>The total number of orders placed is crucial for assessing our business activity.</p>
  <br>
  <h3><strong>Average Pizza per Order:</strong></h3>
  <p>This tells us how many pizzas, on average, are ordered per transaction.</p>
  <br>
  <h3><strong>Daily Trend for Total Orders:</strong></h3>
  <p>I want to visualize the daily order trends, helping us identify busy and slow days.</p>
  <br>
  <h3><strong>Monthly Trend for Total Orders:</strong></h3>
  <p>This chart will show us how order patterns vary throughout the year.</p>
  <br>
  <h3><strong>Percentage of Sales by Pizza Category:</strong></h3>
  <p>We need to understand which pizza categories are driving our sales.</p>
  <br>
  <h3><strong>Percentage of Sales by Pizza Size:</strong></h3>
  <p>Knowing which pizza sizes are most popular helps us with inventory and pricing decisions.</p>
  <br>
  <h3><strong>Total Pizzas Sold by Pizza Category:</strong></h3>
  <p>This will show the volume of each pizza category sold, aiding in inventory management.</p>
  <br>
  <h3><strong>Top 5 Best Sellers by Revenue, Total Quantity, and Total Orders:</strong></h3>
  <p>Identifying our top-performing pizzas will guide marketing and inventory strategies.</p>
  <br>
  <h3><strong>Bottom 5 Sellers by Revenue, Total Quantity, and Total Orders:</strong></h3>
  <p>Recognizing our underperforming pizzas will help us decide on potential changes or promotions.</p>
  <br>
  <p>By having all of this data consolidated in a Power BI dashboard, I’ll be able to make data-driven decisions to improve our pizza business and maximize our profits.</p>
  <br>
  <h2>Functional Specification/Turning Request to Action</h2>
  <p>After understanding the business need, it is necessary we create a follow-up specification to track every activity. This follows Agile methodology.</p>
  <br>
  <table border="1" cellspacing="0" cellpadding="5" width="100%">
    <tr>
      <th>REQUEST</th>
      <th>INSIGHT</th>
      <th>PROCEDURE/CALCULATIONS</th>
      <th>ACCEPTANCE CRITERIA</th>
    </tr>
    <tr>
      <td>I want to see the total revenue generated, allowing me to track our earnings over time</td>
      <td>TOTAL REVENUE</td>
      <td>Measure – Sum of the total price of all pizza orders.</td>
      <td>Show the Total revenue on a KPI Board using Power BI.</td>
    </tr>
    <tr>
      <td>I want to know the average amount spent by each customer, helping us understand customer behavior.</td>
      <td>AVERAGE ORDER VALUE</td>
      <td>The average amount spend per order, calculated by dividing the total revenue by total number of orders.</td>
      <td>Show the Average order value on a KPI card using Power BI.</td>
    </tr>
    <tr>
      <td>volume of pizzas we’re selling, giving an idea of our popularity.</td>
      <td>TOTAL PIZZAS SOLD</td>
      <td>The sum of the quantities of all pizza sold</td>
      <td>Show the total pizza sold on a KPI card using Power BI.</td>
    </tr>
    <tr>
      <td>The total number of orders placed is crucial for assessing our business activity.</td>
      <td>TOTAL ORDERS</td>
      <td>The total number of orders placed.</td>
      <td>Show the total orders on a KPI card using Power BI.</td>
    </tr>
    <tr>
      <td>how many pizzas, on average, are ordered per transaction.</td>
      <td>AVERAGE PIZZA PER ORDER</td>
      <td>The average number of pizzas sold per day, calculated by dividing the total number of pizza sold by the total numbers of orders.</td>
      <td>Show the average pizza per order on a KPI card using Power BI.</td>
    </tr>
    <tr>
      <td>I want to visualize the daily order trends, helping us identify busy and slow days.</td>
      <td>DAILY TREND FOR PIZZA ORDER</td>
      <td>Create a week column with date and order it. Use a bar chart to show the daily trend.</td>
      <td>Use a bar chart to show the daily trend</td>
    </tr>
    <tr>
      <td>I want to visualize the monthly order trends, helping us identify busy and slow month.</td>
      <td>MONTHLY TREND FOR PIZZA ORDER</td>
      <td>Create a monthly column with date and order it. Create a line chart that illustrate the monthly trend to identify periods of high order activity</td>
      <td>Create a line chart that illustrate the monthly trend to identify periods of high order activity</td>
    </tr>
    <tr>
      <td>We need to understand which pizza categories are driving our sales.</td>
      <td>% OF SALES PER PIZZA CATEGORY</td>
      <td>Create a pie chart that shows the distribution of sales across different pizza categories.</td>
      <td>Create a pie chart that shows the distribution of sales across different pizza categories</td>
    </tr>
    <tr>
      <td>We need to understand which pizza sizes are most popular helps us with inventory and pricing decisions.</td>
      <td>% OF SALES PER PIZZA SIZE</td>
      <td>Generate a pie chart that represents the percentage of sales attributed to the different pizza sizes.</td>
      <td>Generate a pie chart that represents the percentage of sales attributed to the different pizza sizes</td>
    </tr>
    <tr>
      <td>volume of each pizza category sold, aiding in inventory management.</td>
      <td>Total Pizzas sold by pizza Category</td>
      <td>Create a funnel chart that presents the total number of pizzas sold for each pizza category.</td>
      <td>Create a funnel chart that presents the total number of pizzas sold for each pizza category</td>
    </tr>
    <tr>
      <td>Identifying our top-performing pizzas will guide marketing and inventory strategies. TOP 5 by Revenue, Total Quantity and Total order.</td>
      <td>Top 5 Best Sellers by Revenue, Total Quantity, and Total Orders</td>
      <td>Create a bar chart highlighting the top 5 best-selling pizzas based on the revenue, total quantity and total orders.</td>
      <td>Create a bar chart highlighting the top 5 best-selling pizzas based on the revenue, total quantity and total orders</td>
    </tr>
    <tr>
      <td>Identifying our worst-performing pizzas will help us decide on potential changes or promotions. TOP 5 by Revenue, Total Quantity and Total order.</td>
      <td>Top 5 Bottom Sellers by Revenue, Total Quantity, and Total Orders</td>
      <td>Create a bar chart highlighting the bottom 5 worst selling pizzas based on the revenue, total quantity and total orders.</td>
      <td>Create a bar chart highlighting the bottom 5 worst selling pizzas based on the revenue, total quantity and total orders</td>
    </tr>
  </table>
  <br>
  <h2>Data Cleaning and Iterations</h2>
  <p>After reviewing the business requirement, I decide to check them using SQL, MS SQL was used for this task. Below is the SQL syntax and their respective screenshot of their result. This was done to compare with the result of power BI.</p>
  <br> 
  <br>
  <br>
    <a href="https://public.tableau.com/app/profile/opeyemi.adeniyi/viz/Top5LeaguePlayerScoutingDashboard/Dashboard1?publish=yes" target="_blank">
      <img src="/assets/images/project-1.jpg" alt="Football Project" style="max-width: 100%; height: auto;">
    </a><br><br>

    <br>
    <a href="https://public.tableau.com/app/profile/opeyemi.adeniyi/viz/Top5LeaguePlayerScoutingDashboard/Dashboard1?publish=yes" target="_blank">
      <img src="/assets/images/project-1.jpg" alt="Football Project" style="max-width: 100%; height: auto;">
    </a><br><br>

    <br>
    <a href="https://public.tableau.com/app/profile/opeyemi.adeniyi/viz/Top5LeaguePlayerScoutingDashboard/Dashboard1?publish=yes" target="_blank">
      <img src="/assets/images/project-1.jpg" alt="Football Project" style="max-width: 100%; height: auto;">
    </a><br><br>

    <br>
    <a href="https://public.tableau.com/app/profile/opeyemi.adeniyi/viz/Top5LeaguePlayerScoutingDashboard/Dashboard1?publish=yes" target="_blank">
      <img src="/assets/images/project-1.jpg" alt="Football Project" style="max-width: 100%; height: auto;">
    </a><br><br>

    <br>
    <a href="https://public.tableau.com/app/profile/opeyemi.adeniyi/viz/Top5LeaguePlayerScoutingDashboard/Dashboard1?publish=yes" target="_blank">
      <img src="/assets/images/project-1.jpg" alt="Football Project" style="max-width: 100%; height: auto;">
    </a><br><br>

    <br>
    <a href="https://public.tableau.com/app/profile/opeyemi.adeniyi/viz/Top5LeaguePlayerScoutingDashboard/Dashboard1?publish=yes" target="_blank">
      <img src="/assets/images/project-1.jpg" alt="Football Project" style="max-width: 100%; height: auto;">
    </a><br><br>

    <br>
    <a href="https://public.tableau.com/app/profile/opeyemi.adeniyi/viz/Top5LeaguePlayerScoutingDashboard/Dashboard1?publish=yes" target="_blank">
      <img src="/assets/images/project-1.jpg" alt="Football Project" style="max-width: 100%; height: auto;">
    </a><br><br>


  <h2>Pizza Sales Management Dashboard</h2>
  <br>
  <p>The completed sales management dashboard successfully fulfills all the business requirements. The first page shows the important metrics as requested by the business, showing some key metrics and also days, month, category and sizes in relation to sales while the second page concentrate on the type of pizza that perform well.</p>
  <br>
  <p><b>Click the picture below to see it in action</b></p>
  <br>
    <a href="https://public.tableau.com/app/profile/opeyemi.adeniyi/viz/Top5LeaguePlayerScoutingDashboard/Dashboard1?publish=yes" target="_blank">
      <img src="/assets/images/project-1.jpg" alt="Football Project" style="max-width: 100%; height: auto;">
    </a><br><br>
`,

"Sales": `
  <h2>SQL/Power BI – Sales Management Portfolio</h2>
  <br><b>Hi, This is showing some screenshots from the project, Final Power Bi dashboard, data model and Budget data</b><br><br>

  <a href="https://public.tableau.com/app/profile/opeyemi.adeniyi/viz/Top5LeaguePlayerScoutingDashboard/Dashboard1?publish=yes" target="_blank">
    <img src="/assets/images/project-1.jpg" alt="Football Project" style="max-width: 100%; height: auto;">
  </a><br><br>

  <h3>Business Request and User Story</h3>
  <p>The business request for this data analysis project is summarized below:</p>
  <ul>
    <li>Transition from static reports to visual dashboards to improve internet sales reporting.</li>
    <li>Focus on tracking how much has been sold of different products, to which clients, and over time.</li>
    <li>Implement the ability to filter the data by salesperson, as different salespeople work on different products and clients.</li>
    <li>Include a comparison of sales data against the budget for the year 2022.</li>
  </ul>
  <br>

  <table border="1" cellspacing="0" cellpadding="5" width="100%">
    <tr>
      <th>WHO NEEDS IT</th>
      <th>REQUEST</th>
      <th>USER VALUE/INSIGHT</th>
      <th>ACCEPTANCE CRITERIA</th>
    </tr>
    <tr>
      <td>Sales Manager</td>
      <td>Transition from static report to visual dashboard</td>
      <td>Improve internet sales reporting.</td>
      <td>A Power BI dashboard</td>
    </tr>
    <tr>
      <td>Sales Rep</td>
      <td>Track sales by product and customer per time.</td>
      <td>Want to track customer with high purchase and to which product is being purchased.</td>
      <td>Power BI dashboard that allows to filter data for each customer.</td>
    </tr>
    <tr>
      <td>Sales Manager</td>
      <td>Dashboard overview of internet sales</td>
      <td>Follow sales over time against budget.</td>
      <td>A Power BI showing KPI and graph comparing sales and budget for year 2022.</td>
    </tr>
  </table>

  <br>

  <h3>Data Cleansing and transformation(SQL)</h3>
  <p>In order to build the required data model for conducting the analysis and ensuring alignment with the business requirements outlined in the user story, we extracted the following tables using SQL.</p>
  <br>
  <p>  Dim_Calendar: </p>
  <code>
    SELECT 
          [DateKey],
          [FullDateAlternateKey] AS Date,
          [EnglishDayNameOfWeek] AS Day,
          [EnglishMonthName] AS Month,
          Left([EnglishMonthName], 3) AS ShortMonth, -- Short the month for graphical purpose
          [MonthNumberOfYear] AS MonthNo,
          [CalendarQuarter] AS Quarter,
          [CalendarYear] AS Year
      FROM [AdventureWorksDW2022].[dbo].[DimDate]
      WHERE CalendarYear >=2019
  </code>
  <br><br>
  <p> Dim_Customer: </p>
  <code>
    SELECT 
      c.CustomerKey, 
      c.FirstName, 
      c.Lastname, 
      c.FirstName + ' ' + c.LastName AS [FullName], -- Combining first and last name to get full name
      CASE c.Gender WHEN 'M' THEN 'Male' WHEN 'F' THEN 'Female' END AS Gender, -- Making the gender more descriptive
      c.DateFirstPurchase AS DateFirstPurchase, 
      g.City AS [Customer City] --Join this column from Geography Table
    FROM 
      dbo.DimCustomer c 
      LEFT JOIN dbo.DimGeography g ON g.GeographyKey = c.GeographyKey 
    ORDER BY 
      CustomerKey ASC -- Order list by customerkey
  </code>
  <br><br>
  <p>  Dim_Products: </p>
  <code>
    SELECT 
      p.[ProductKey], 
      p.[ProductAlternateKey] AS ProductItemCode, 
      p.[EnglishProductName] AS [Product Name], 
      ps.EnglishProductSubcategoryName AS [Sub Category], 
      pc.EnglishProductCategoryName AS [Product Category], 
      p.[Color] AS [Product Color], 
      p.[Size] AS [Product Size], 
      p.[ProductLine] AS [Product Line], 
      p.[ModelName] AS [Product Model Name], 
      p.[EnglishDescription] AS [Product Description], 
      ISNULL (p.Status, 'Oudated') AS [Product Status] 
    FROM 
      [dbo].[DimProduct] p 
      LEFT JOIN dbo.DimProductSubcategory ps ON ps.ProductSubcategoryKey = p.ProductSubcategoryKey 
      LEFT JOIN dbo.DimProductCategory pc ON pc.ProductCategoryKey = ps.ProductCategoryKey 
    ORDER BY 
      p.ProductKey ASC
  </code>
  <br><br>
  <p>  FACT_internetSales: </p>
  <code>
    SELECT 
      [ProductKey], 
      [OrderDateKey], 
      [DueDateKey], 
      [ShipDateKey], 
      [CustomerKey], 
      [SalesOrderNumber], 
      [SalesAmount] 
    FROM 
      [dbo].[FactInternetSales] 
    WHERE 
      LEFT (OrderDateKey, 4) >= YEAR(GETDATE()) - 2 -- We only bring 2 years of date as required by our client
    ORDER BY 
      OrderDate ASC
  </code>
  <br><br>

  <h3>Data Model</h3>
  <p>Here is a screenshot of the data model after loading cleansed and prepared tables into Power BI. The data model also illustrates how FACT_Budget has been connected to the relevant DIM tables.</p> <br>
  <a href="https://public.tableau.com/app/profile/opeyemi.adeniyi/viz/Top5LeaguePlayerScoutingDashboard/Dashboard1?publish=yes" target="_blank">
      <img src="/assets/images/project-1.jpg" alt="Football Project" style="max-width: 100%; height: auto;">
    </a><br>

  <br>
  <h3>Sales Management Dashboard</h3>
  <p>The completed sales management dashboard successfully fulfills all the business requirements. The first page functions as the dashboard and provides an overview, while the other two pages concentrate on sales trends over time, with one focusing on customer data and the other on product data.</p>
  <br>
  <p> Click on the picture below to see it in action </p> <br>

  <a href="https://public.tableau.com/app/profile/opeyemi.adeniyi/viz/Top5LeaguePlayerScoutingDashboard/Dashboard1?publish=yes" target="_blank">
      <img src="/assets/images/project-1.jpg" alt="Football Project" style="max-width: 100%; height: auto;">
    </a><br>
`,



  "CarSales": `
  <h2>Data Science/Machine Learning Portfolio – Predicting Car price.</h2>
  <br>
  
  This project aim to utilize Machine Learning models to predict the price of a customer’s car once it is listed on the website. The objective is to determine whether the price is overpriced, underpriced, or aligned with the current market price of the car. The model was deployed and the weblink can be access via<a href="https://vehiclepriceprediction.streamlit.app/" target="_blank">WEBLINK
  </a>
  <br><br>
  <h2> Exploratory Data Analysis </h2> <br>

  <a href="https://public.tableau.com/app/profile/opeyemi.adeniyi/viz/Top5LeaguePlayerScoutingDashboard/Dashboard1?publish=yes" target="_blank">
    <img src="/assets/images/project-1.jpg" alt="Football Project" style="max-width: 100%; height: auto;">
  </a><br><br>

   
  <a href="https://public.tableau.com/app/profile/opeyemi.adeniyi/viz/Top5LeaguePlayerScoutingDashboard/Dashboard1?publish=yes" target="_blank">
    <img src="/assets/images/project-1.jpg" alt="Football Project" style="max-width: 100%; height: auto;">
  </a><br><br>

  <h3>Outlier Removal</h3><br>
  <p>
  The was done by setting up maximum threshold and taking the subset that are less than the maximum. both mileage and price has outlier, This figures were confirmed by the company.</p>
  <br>
  
  <code>
  max_threshold  = autotrader['mileage'].quantile(0.99)
  autotrader = autotrader[autotrader['mileage'] < max_threshold]
  autotrader[autotrader['mileage']>140000.0]

  </code> <br>
   
  <a href="https://public.tableau.com/app/profile/opeyemi.adeniyi/viz/Top5LeaguePlayerScoutingDashboard/Dashboard1?publish=yes" target="_blank">
    <img src="/assets/images/project-1.jpg" alt="Football Project" style="max-width: 100%; height: auto;">
  </a><br><br>

  <h3>Feature Engineering and Feature Selection.</h3><br>
  <p>
  The first feature that was engineered was vehicle age, which was achieved by subtract-ing the year of registration from the current year. A current year column was also created using the datetime.now() module. <br>Secondly, a column called average mileage was created by using a journal published on-line titled Used Car Mileage Vs Age – Which Matters More?, According to government statistics, the average number of miles driven by cars in England each year was 7,400 miles in 2019. <br><br>
  Therefore, each vehicle’s average mileage was calculated by multiplying its age with 7,400. Lastly, the mileage was categorized into four groups. If the original mileage is between 0 and half of the average mileage, the vehicle is classified as having low mileage. If the mileage is less than or greater than half of the average mileage, it is classified as having good mileage. If the mileage is 15,000 or more than the average mileage, it is classified as having high mileage. Otherwise, it is classified as having very high mileage.</p>
  <br>

  <p>
  The goal is to reduce the dimensionality of the input space while retaining as much of the original information as possible. Before selectiong the features, There are some features that are naturally not relevant for the model, I will drop those once before I do automatic feature selection. There are several method for feature selection like SelectKbest, Recursive Feature Elimination (RFE) and many more but I decided to use SelectKbest.</p>
  <br>

  <a href="https://public.tableau.com/app/profile/opeyemi.adeniyi/viz/Top5LeaguePlayerScoutingDashboard/Dashboard1?publish=yes" target="_blank">
    <img src="/assets/images/project-1.jpg" alt="Football Project" style="max-width: 100%; height: auto;">
  </a><br><br>


  <h3>Model Evaluation and Explanation.</h3><br>
  <p>
  I decided to obtain predictions of y using the best model, which is gradient boosting. I also calculated the difference between the true price and the predicted price, took the absolute value, and found the mean of the differences. Additionally, I plotted a graph of predicted price against true price, as seen in the plot below:
  </p>
  <br>
  <a href="https://public.tableau.com/app/profile/opeyemi.adeniyi/viz/Top5LeaguePlayerScoutingDashboard/Dashboard1?publish=yes" target="_blank">
  <img src="/assets/images/project-1.jpg" alt="Football Project" style="max-width: 100%; height: auto;">
  </a><br><br>

  <h3>Global and Local Explanations with SHAP</h3><br>
  <a href="https://public.tableau.com/app/profile/opeyemi.adeniyi/viz/Top5LeaguePlayerScoutingDashboard/Dashboard1?publish=yes" target="_blank">
  <img src="/assets/images/project-1.jpg" alt="Football Project" style="max-width: 100%; height: auto;">
  </a><br><br>
  <p>
  The sharp summary plot combines feature importance with feature effects. Each point on the summary plot is a Shapley value of an instance per feature. The position on the y-axis is determined by the feature and on the x-axis by the Shapley value of each instance. The combined feature standard model and standard make are the most important feature as they have a high Shapley value. The color represents the value of the feature from low to high. Overlapping points are jittered in the y-axis direction, so we get a sense of the distribution of the Shapley values per feature. The features are ordered according to their importance which mean standard model is the most important feature. It can also be deduce that vehicle age and mileage affects the price both negatively and positively.
  </p><br><br>

  <h3>Partial Dependency Plots.</h3><br>
  <a href="https://public.tableau.com/app/profile/opeyemi.adeniyi/viz/Top5LeaguePlayerScoutingDashboard/Dashboard1?publish=yes" target="_blank">
  <img src="/assets/images/project-1.jpg" alt="Football Project" style="max-width: 100%; height: auto;">
  </a><br><br>
  <p>
  From above plot, the left plot shows the relationship between mileage and vehicle price. It indicates that an increase in mileage leads to a decrease in vehicle price. Similarly, the middle plot reveals that vehicle age also has a negative correlation with price. The higher the mileage and the age of the vehicle, the lower the price. This trend is further confirmed in the interaction plot that depicts vehicle age and mileage against price. The initial price was at 23701, but as both the age of the vehicle and mileage increase, the price decreases significantly, eventually reaching 6878.
  </p>
`,


  
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
