
// variables for commonly referenced components
var drawer, snackbar, dialog;

$(document).ready(function() {

    // create the references to the MCW components
    drawer = $(".mdc-drawer--temporary")[0].MDCTemporaryDrawer;
    snackbar = $(".mdc-snackbar")[0].MDCSnackbar;
    dialog = $(".mdc-dialog")[0].MDCDialog;
    
    // open drawer when top nav icon clicked
    $(".mdc-top-app-bar__navigation-icon").on("click", function(e) {
        drawer.open = true;
    });

    // load related page when drawer nav item clicked
    $(".mdc-drawer--temporary .mdc-list-item").on("click", function(e) {
      console.log($(this).attr("data-page"));
      showPage($(this).attr("data-page"));
    });

  
});

/**
   * Load the specific page content
   * @param {string} pageName - The page to load.
   */
  function showPage(pageName) {
    $("main").load("./page-content/_loading.html", function() {
      var url = "./page-content/_" + pageName + ".html";
      $("main").load(url, function() {
            window.mdc.autoInit($("main")[0]);
            drawer.open = false;
      });
    }); 
  }
