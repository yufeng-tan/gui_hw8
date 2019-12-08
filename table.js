/*
  Name: Yufeng Tan
  E-mail: Yufeng_Tan@student.uml.edu
  Assignment: hw8, Using the jQuery UI Slider and Tab Widgets
              This assignment will look at two jQuery UI components: the slider and the tabbed interface.
  This is the javascrip file for hw8
*/

function createTable(){
  // get values from input
  var mul_s = +document.getElementById("multiplier_start").value
  var mul_e = +document.getElementById("multiplier_end").value
  var mulcnt_s = +document.getElementById("multiplicant_start").value
  var mulcnt_e = +document.getElementById("multiplicant_end").value

  var body = document.getElementsByTagName("body")[0];
  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");

  for (var i = mul_s, ii = mul_e + 1; i <= ii;  ++i) {
    var row = document.createElement("tr");
    for (var j = mulcnt_s, jj = mulcnt_e + 1; j <= jj; ++j) {
      var cell = document.createElement("td");
      var cellText;
      if (i == mul_s && j == mulcnt_s) {
        cellText = document.createTextNode("");
      }
      else if (i == mul_s) {
        cellText = document.createTextNode(j - 1);
      }
      else if(j == mulcnt_s) {
        cellText = document.createTextNode(i - 1);
      }
      else {
        cellText = document.createTextNode((i - 1) * (j - 1));
      }
      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    tblBody.appendChild(row);

  tbl.appendChild(tblBody);
  body.appendChild(tbl);
  tbl.setAttribute("border", "2");
}
}


// slider for hw8
// follow examples on https://stackoverflow.com/questions/7523864/ui-slider-with-text-box-input
$(function() {
// first slider
  $("#firstSlider").slider({
    min: -10,
    max: 10,
    slide: function(event, ui) {
      $("#multiplier_start").val(ui.value);
    },
  })
  $("#multiplier_start").val($("#firstSlider").slider("value"));
  $("#multiplier_start").change(function() {
    var value = this.value;
    $("#firstSlider").slider("value", parseInt(value));
  })

  // second slider
    $("#secondSlider").slider({
      min: -10,
      max: 10,
      slide: function(event, ui) {
        $("#multiplier_end").val(ui.value);
      },
    })
    $("#multiplier_end").val($("#secondSlider").slider("value"));
    $("#multiplier_end").change(function() {
      var value = this.value;
      $("#secondSlider").slider("value", parseInt(value));
    })

    // third slider
      $("#thirdSlider").slider({
        min: -10,
        max: 10,
        slide: function(event, ui) {
          $("#multiplicant_start").val(ui.value);
        },
      })
      $("#multiplicant_start").val($("#thirdSlider").slider("value"));
      $("#multiplicant_start").change(function() {
        var value = this.value;
        $("#thirdSlider").slider("value", parseInt(value));
      })

      // fourth slider
        $("#fourthSlider").slider({
          min: -10,
          max: 10,
          slide: function(event, ui) {
            $("#multiplicant_end").val(ui.value);
          },
        })
        $("#multiplicant_end").val($("#fourthSlider").slider("value"));
        $("#multiplicant_end").change(function() {
          var value = this.value;
          $("#fourthSlider").slider("value", parseInt(value));
        })
});

// examples http://jsfiddle.net/axrwkr/ujUu2/
$(document).ready(function() {
    $("div#tabs").tabs();

    $("button#add_tab").click(function() {

        var num_tabs = $("div#tabs ul li").length + 1;

        $("div#tabs ul").append(
            "<li><a href='#tab" + num_tabs + "'>#" + num_tabs + "</a></li>"
        );
        $("div#tabs").append(
            "<div id='tab" + num_tabs + "'>#" + num_tabs + "</div>"
        );
        $("div#tabs").tabs("refresh");
    });

});


// remove all tabs
$(document).ready(function() {
  $("#close_tab").click(function() {
    $("div#tabs").remove();
    $("div#tabs").tabs("refresh");
})
});
