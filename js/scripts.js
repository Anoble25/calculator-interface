$(document).ready(function() {

  $("#formOne").submit(function(event) {
    /*var value1 = parseInt($("input#value1").val());
    return value1 + value2;
    var value2 = parseInt($("input#value2").val());
    var newValue = value1+value2;
    alert("submit works");
    console.log("submit works");*/
    var value1 = parseInt($("input#value1").val());
    var value2 = parseInt($("input#value2").val());
    event.preventDefault();
    $("button#add").click(function(){
      alert(value1+value2);
    });
    $("button#subtract").click(function(){
      alert(value1-value2);
    });
    $("button#multiply").click(function(){
      alert(value1*value2);
    });
    $("button#divide").click(function(){
      alert(value1/value2);
    });
  });
});
