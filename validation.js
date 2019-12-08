/*
  Name: Yufeng Tan
  E-mail: Yufeng_Tan@student.uml.edu
  Assignment: hw7, Using the jQuery Validation Plugin with Your Dynamic Table
              validation using the jQuery Validation plugin (http://plugins.jquery.com).
  This is the javascrip file for hw7
*/


/* New code for Assignment 7 */
/*validation for the form inputs*/
/*follow example on https://www.sitepoint.com/basic-jquery-form-validation-tutorial/*/
function validationForm(){
    $.validator.addMethod("greaterThan",
        function (value, element, param) {
              var $otherElement = $(param);
              return parseInt(value) > parseInt($otherElement.val());
        }, "Must be grater then min value.");

    $("form[id='multiplicationForm']").validate({
    rules:{
        multiplier_start:{
          required: true,
          number: true,
          range: [-50, 50],
        },
        multiplier_end:{
          required: true,
          number: true,
          range: [-50, 50],
          greaterThan: "#multiplier_start"
        },
        multiplicant_start:{
          required: true,
          number: true,
          range: [-50, 50],
        },
        multiplicant_end:{
          required: true,
          number: true,
          range: [-50, 50],
          greaterThan: "#multiplicant_start"
        }
      },
    messages:{
        multiplier_start: {
          required: "Please enter a min multiplier value.",
          number: "Please enter a number between -50 to 50.",
          range: "Please enter a number between -50 to 50."
        },
        multiplier_end: {
          required: "Please enter a max multiplier value.",
          number: "Please enter a number between -50 to 50.",
          range: "Please enter a number between -50 to 50.",
          greaterThan: "Please enter a number greater than the min multiplier value you have entered"
        },
        multiplicant_start: {
          required: "Please enter a min multiplicant value.",
          number: "Please enter a number between -50 to 50.",
          range: "Please enter a number between -50 to 50."
        },
        multiplicant_end: {
          required: "Please enter a max multiplicant value.",
          number: "Please enter a number between -50 to 50.",
          range: "Please enter a number between -50 to 50.",
          greaterThan: "Please enter a number greater than the min multiplicant value you have entered"
        }
      },

      submitHandler: function(form) {
        createTable();
        }
    });
};

$(document).ready(function() {
  validationForm();
})
