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
let defaultDataset = data.filter(distillery => distillery.county === "Kerry")
displayDataset(defaultDataset);

// <------------------ Remove duplicate counties from filter menu ------------------>

let countyDataset = dataset;
let uniqueCountyArray = [];

countyDataset.forEach((countyList) => {
    let countyListItem = countyList.county;
    //console.log(countyListItem);
    for (i = 0; i < countyListItem.length; i++) {
        if (uniqueCountyArray.includes(countyListItem)) {
            continue;
        } else {
            uniqueCountyArray.push(countyListItem);
        }
     console.log(uniqueCountyArray);
    }
});

// <------------------ Hover menu filter ------------------>

// Filter distilleries by county on click
uniqueCountyArray.forEach((countyName) => {
    let filterListItem = document.createElement("a");
    filterListItem.innerHTML = countyName;
    filterListItem.classList.add("filterList");
    filterListItem.addEventListener("click", function(e){ 
        // Clear defaultDataset from gridContent
        document.getElementById("gridContent").innerHTML = "";
        let value = e.currentTarget.text;
        let newDataset = dataset.filter(distillery => distillery.county === value);
        displayDataset(newDataset);
        // Update results to match county selected
        document.getElementById("results").innerHTML = "";
        document.getElementById("results").append(value);
    });
    document.getElementById("filterCounties").append(filterListItem);
});

// <------------------ Grid view of distilleries ------------------>

// Function to display distillery data
function displayDataset(dataset) {
    let gridContent = dataset.forEach((distillery) => {
    document.getElementById("gridContent").innerHTML += 
    `<div class="col-xs-10 col-md-5 gridDiv">` +
        `<h4>${distillery.title}</h4><br>` + 
        `<p class="county"><strong>County: </strong>${distillery.county}</p>` +
        `<p><strong><i class="fa fa-home"></i> Address: </strong>${distillery.address}</p>` +
        `<p><strong><i class="fa fa-times-circle"></i> Tours: </strong>${distillery.tours}</p>` +
        `<P><strong><i class="fa fa-info-circle"></i> Description: </strong>${distillery.description}</P>` +
        `<a type="button" class="btn websiteButton" href="${distillery.website}" target="_blank">Visit website</a><br>` +
        `<br><img class="gridImage" src="${distillery.photo}">` +
    `</div>`;
    })
    //displayDataset(gridContent); 
    console.log(gridContent);
};