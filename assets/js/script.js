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

// <------------------ Grid view of distilleries ------------------>

dataset.forEach((distillery) => {
    document.getElementById("gridContent").innerHTML += 
    `<div class="col-5 gridDiv">` +
        `<h4>${distillery.title}</h4><br>` + 
        `<p><strong>Address: </strong>${distillery.address}</p>` +
        `<p><strong>County: </strong>${distillery.county}</p>` +
        `<p class="toursGrid"><strong>Tours: </strong>${distillery.tours}</p>` +
        `<P><strong>Description: </strong>${distillery.description}</P>` +
        `<a type="button" class="btn website-btn" href="${distillery.website}" target="_blank">Visit website</a><br>` +
        `<br><img class="gridImage" src="${distillery.photo}">` +
    `</div>`;
    });


// <------------------ Hover filter menu (gridView) ------------------>

// Resource: https://www.w3schools.com/jsref/prop_html_innerhtml.asp

dataset.forEach((countyName) => {
    document.getElementById("filterCounties").innerHTML +=
        `<a>${countyName.county}</a>`
    });

