function fun(){
  // var a=document.getElementById("inputtext").value;
  document.getElementById("para").innerHTML=document.getElementById("inputtext").value;
}
function clr(){
  var a=confirm("Do you want to clear the html and output");
  if(a){
  document.getElementById("para").innerHTML="";
  document.getElementById("inputtext").value="";}
}
