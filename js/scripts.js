$(document).ready(function(){
  $("#animalForm").submit(function(event){
    event.preventDefault();
    let animal = $("input:radio[name=animal]:checked").val();

    if (animal === "quokka") {
      $("#quokka").show();
      $("#liger").hide();
      $("#sloth").hide();
    } else if (animal === "liger") {
      $("#liger").show();
      $("#quokka").hide();
      $("#sloth").hide();
    } else {
      $("#sloth").show();
      $("#quokka").hide();
      $("#liger").hide();
    }  
  });
});