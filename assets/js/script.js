// <------------------ Tab Buttons ------------------>

// Resource: Code taken from https://www.w3schools.com/howto/howto_js_tabs.asp 
document.getElementById("defaultOpen").click();

function openSearch(evt, searchView) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(searchView).style.display = "block";
  evt.currentTarget.className += " active";
}

// <------------------ Default grid view of distilleries ------------------>

// Rename dataset to 'data' for naming clarity
let data = dataset;
// Set default view to display 'Dublin' distilleries
let defaultDataset = data.filter(distillery => distillery.county === "Dublin")
displayDataset(defaultDataset);

// <------------------ Hover menu filter ------------------>

// Filter distilleries by county on click
dataset.forEach((countyName) => {
    let filterListItem = document.createElement("a");
    filterListItem.innerHTML = countyName.county;
    filterListItem.classList.add("filterList");
    filterListItem.addEventListener("click", function(e){ 
        // Remove defaultDataset from gridContent
        document.getElementById("gridContent").innerHTML = "";
        let value = e.currentTarget.text;
        let newDataset = dataset.filter(distillery => distillery.county === value);
        displayDataset(newDataset);
    });
    document.getElementById("filterCounties").append(filterListItem);
});

// <------------------ Grid view function of all distilleries ------------------>

// Function to display distillery data
function displayDataset(dataset) {
    let gridContent = dataset.forEach((distillery) => {
    document.getElementById("gridContent").innerHTML += 
    `<div class="col-xs-12 col-md-5 gridDiv">` +
        `<h4>${distillery.title}</h4><br>` + 
        `<p><strong>Address: </strong>${distillery.address}</p>` +
        `<p><strong>County: </strong>${distillery.county}</p>` +
        `<p class="toursGrid"><strong>Tours: </strong>${distillery.tours}</p>` +
        `<P><strong>Description: </strong>${distillery.description}</P>` +
        `<a type="button" class="btn website-btn" href="${distillery.website}" target="_blank">Visit website</a><br>` +
        `<br><img class="gridImage" src="${distillery.photo}">` +
    `</div>`;
    })
    //displayDataset(gridContent); 
    console.log(gridContent);
};