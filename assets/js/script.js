// <------------------ Tab Buttons ------------------>

// Resource: Code sourced from https://www.w3schools.com/howto/howto_js_tabs.asp 

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

// <------------------ Hover filter menu (gridView) ------------------>

// Resource: https://www.w3schools.com/jsref/prop_html_innerhtml.asp

dataset.forEach((countyName) => {
    document.getElementById("filterCounties").innerHTML +=
        `<a onclick="displayFilter()">${countyName.county}</a>`
}); 

// <------------------ Default grid view of distilleries ------------------>

// Rename dataset to 'data' for naming clarity
let data = dataset;
// Set default view to display 'Dublin' distilleries
let defaultDataset = data.filter(distillery => distillery.county === "Dublin")
displayDataset(defaultDataset);

// <------------------ Grid view function of all distilleries ------------------>

// Function to display distillery data
// Used forEach loop here, other method did not work
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
    console.log(gridContent);
};

// <------------------ Filter distilleries by county ------------------>
 
//onclick = function() in html

function displayFilter(dataset) {
    document.getElementById("filterCounties").addEventListener("click", function(e){
        let value = e.currentTarget.value
        let newDataset = dataset.filter(distillery => distillery.county === value)
        displayDataset(newDataset)
    })
};








/* OLD CODE

 dataset.forEach((distillery) => {
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
}); */

/* function displayDataset (dataset) {
    let gridContent = dataset.map((distillery) => (distillery)["title"]) */




// <------------------ TEST CODE TO REMOVE DUPLICATE FILTER ITEMS ------------------>

/*dataset.forEach((countyName) => {
    let result = [];
    document.getElementById("filterCounties").innerHTML +=
    `<a>${countyName.county}</a>`
    if (result.indexOf(countyName) === -1) 
    result.push(countyName);
}); */

/* dataset.forEach((countyName) => {
    document.getElementById("filterCounties").innerHTML +=
    `<a>${countyName.county}</a>`
    let unique = [];
    if(!unique.includes(countyName)){
     unique.push(countyName.county) 
    };
}); */


/* function getUnique(array){
        var uniqueArray = [];
        
        // Loop through array values
        for(var value of array){
            if(uniqueArray.indexOf(value) === -1){
                uniqueArray.push(value);
            }
        }
        return uniqueArray;
    }

    var counties = dataset;
    var uniqueNames = getUnique(counties.values);
    console.log(uniqueNames.values); */