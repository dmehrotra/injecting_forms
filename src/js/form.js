formInjection = new function() {
  count = 1
  var BASE_URL = '';
  var WIDGET_CSS = 'build/styles/form.css'
  var ROOT = 'inject_form';
  var BASE_FORM='<form><div class="row repeat"><div class="group col-1"><label for="pattern"></label><br><a class="add" href="#">+</a>/<a class="sub" href="#">-</a></div><div class="group col-4"><label for="pattern">Pattern</label><input type="text" id="pattern_1" placeholder="Enter Pattern" name="pattern_1"></div><div class="group col-3"><label for="width">Width</label><input type="text" id="width_1" placeholder="Enter Width" name="width_1"></div><div class="group col-3"><label for="height">Height</label><input type="text" id="height_1" placeholder="Enter Height" name="height_1"></div><div class="group col-1"><label for="quantity">Q.</label><input type="number" id="quantity_1" placeholder="1" name="quantity_1"></div></div><div class="row"><div class="group col-1 spacer"><label for="pattern"></label><br><a href="#">+/-</a></div><div class="group col-5"><label for="first_name">First Name</label><input type="text" id="first_name" placeholder="First Name" name="first"></div><div class="group col-6"><label for="last_name">Last Name</label><input type="text" id="last_name" placeholder="Last Name" name="last"></div></div><div class="row"><div class="group col-1 spacer"><label for="pattern"></label><br><a href="#">+/-</a></div><div class="group col-11"><label for="email">Email</label><input type="email" id="email" placeholder="email" name="email"></div></div><div class="row"><div class="group col-1 spacer"><label for="pattern"></label><br><a href="#">+/-</a></div><div class="group col-11"><label for="comments">Comments</label><input type="textarea" id="comments" placeholder="Comment" name="comments"></div></div></form>'
  var BASE_ROW='<div class="group col-1 spacer"><label for="pattern"></label><br><a class="add" href="#">+</a>/<a class="sub" href="#">-</a></div><div class="group col-4"><label for="pattern">Pattern</label><input type="text" id="pattern_'+count+'" placeholder="Enter Pattern" name="pattern_'+count+'"></div><div class="group col-3"><label for="width">Width</label><input type="text" id="width_'+count+'" placeholder="Enter Width" name="width_'+count+'"></div><div class="group col-3"><label for="height">Height</label><input type="text" id="height_'+count+'" placeholder="Enter Height" name="height_'+count+'"></div><div class="group col-1"><label for="quantity">Q.</label><input type="number" id="quantity_'+count+'" placeholder="1" name="quantity_'+count+'"></div>'
  function requestStylesheet() {
    widget = document.createElement("link");

    widget.rel = "stylesheet";
    widget.type = "text/css";
    widget.href = WIDGET_CSS;
    widget.media = "all";
    document.lastChild.firstChild.appendChild(widget);
  }
  function addRow(n) {
    count=count+1
    var row_wrapper = document.getElementsByClassName("repeat")[document.getElementsByClassName("repeat").length-1]
    var div = document.createElement('div');
    div.classList.add("row")
    div.classList.add("repeat")
    div.innerHTML = BASE_ROW
    row_wrapper.parentNode.insertBefore(div, row_wrapper.nextSibling);
  }
  function subtractRow(n) {
    count=count-1
    var row_wrapper = document.getElementsByClassName("repeat")[document.getElementsByClassName("repeat").length-1]
    row_wrapper.parentNode.removeChild(row_wrapper);
  }
  function buildForm(){
    var form_wrapper = document.getElementsByClassName("form-inner-wrapper")[0]
    var injection = document.createElement('div');
    injection.id="injection"
    injection.innerHTML = BASE_FORM
    form_wrapper.appendChild(injection)

  }

  window.onload = function () {
    buildForm();
    document.getElementsByClassName("add")[0].addEventListener("click", function(){ addRow(count)});
    document.getElementsByClassName("sub")[0].addEventListener("click", function(){ subtractRow(count) });
  }
  

  requestStylesheet();
  // document.write("<div id='" + ROOT + "' style='display:none;'></div>");
  // requestWebMiner();

}  

