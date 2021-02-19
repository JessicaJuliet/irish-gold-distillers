/*------------------ Tab Buttons ------------------*/

/* Resource: Code sourced from https://www.w3schools.com/howto/howto_js_tabs.asp */
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



// Grid view of distilleries
    //For loop to run through dataset.js to display grid of distilleries
    var i;
    for (let i = 0; i < dataset.length; i++){
    dataset.forEach((distillery) => {
        document.getElementById("gridContent").innerHTML += 
        `<h4>${distillery.title}</h4>` + 
        `<p><strong>Address: </strong>${distillery.address}</p>` +
        `<p><strong>County: </strong>${distillery.county}</p>` +
        `<p><strong>Tours: </strong>${distillery.tours}</p>` +
        `<P><strong>Description: </strong>${distillery.description}</P>` +
        `<a href="${distillery.website}">Visit website</a><br>` +
        `<br><img class="gridImage" src="${distillery.photo}">`;
    })
};

