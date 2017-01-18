// BUSINESS LOGIC
var leapYear = function(year) {
  if (year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
};


// USER INTERFACE LOGIC
$(document).ready(function() {

  // attach a submit listener to our form.
  $("form#leap-year").submit(function(event) {
    event.preventDefault();

    // when form is submitted we assign the value from our form input to the variable year
    var year = parseInt($("input#year").val());

    // call a leapYear() function (which we will write momentarily), pass it the year variable as an argument, and assign the return value (which will be true or false) to the variable result.
    var result = leapYear(year);

    // display the returned boolean value (currently assigned to the variable result) on the web page with the line
    $("#result").text(result);
  });
});
