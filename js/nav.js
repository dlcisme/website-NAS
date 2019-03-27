//--------------------------------------------------------------------
// removes the active-tab class from all tab elements and sets
// the class to active-tab for the current element
//--------------------------------------------------------------------
function activeTab(event) {
  var i, tabs;
  tabs = document.getElementsByClassName("nav-tab");

  for (i = 0; i < tabs.length; i++) {
    tabs[i].className = tabs[i].className.replace(" active-tab", "");
  }

  event.currentTarget.className += " active-tab";

}
