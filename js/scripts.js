$(document).ready(function(){
  $("#animalForm").submit(function(event){
    event.preventDefault();
    let animal = $("input:radio[name=animal]:checked").val();

    if (animal === "quokka") {
      $("#quokka").show();
      $("#liger").hide();
      $("#sloth").hide();
      $("#ligerClick").hide();
      $("#slothClick").hide();
    } else if (animal === "liger") {
      $("#liger").show();
      $("#quokka").hide();
      $("#sloth").hide();
      $("#quokkaClick").hide();
      $("#slothClick").hide();
      $("#ligerClick").hide();
    } else {
      $("#sloth").show();
      $("#quokka").hide();
      $("#liger").hide();
    } 
  });

  $("#liger").click(function() {
    $("#ligerClick").show();
    $("#slothClick").hide();
    $("#quokkaClick").hide();
  });
  $("#sloth").click(function() {
    $("#slothClick").show();
    $("#ligerClick").hide();
    $("#quokkaClick").hide();
  });
});