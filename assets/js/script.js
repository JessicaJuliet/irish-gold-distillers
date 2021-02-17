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

    dataset.forEach((distillery) => {
        document.getElementById("gridContent").innerHTML =
        `<h4>${distillery.title}</h4>` + 
        `<P>${distillery.description}</P>`;
    });



   // for (let i = 0; index < dataset.length; i++) {
     //   const distillery = dataset[i];
       //     dataset.for((distillery) => {
         //   document.getElementById("gridContent").innerHTML = 
           // `<h4>${distillery.title}</h4>` + 
            //`<P>${distillery.description}</P>`;
   // };