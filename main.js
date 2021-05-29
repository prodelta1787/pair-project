
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 1500); // Change image every 2 seconds
  
}






//cards
document.addEventListener("DOMContentLoaded", function(event) {


  const cartButtons = document.querySelectorAll('.cart-button');
  
  cartButtons.forEach(button => {
  
  button.addEventListener('click',cartClick);
  
  });
  
  function cartClick(){
  let button =this;
  button.classList.add('clicked');
  }
  
  
  
  });




 //search

$("#myinputs").on("keyup", function() {
  var value = $(this).val().toLowerCase();
  $(".wrapper .container .row .col-md-3").filter(function() {
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
  });
});



$(".btn btn-primary").click(function () {
$(".row g-1").append('<div class="col-md-3"><div class="card p-3"><div class="text-center"> <img src='$("#image").val()+'width="200"></div><div class="product-details"> <span class="font-weight-bold d-block">'$("#price").val()+'</span><span>'$("Name of product").val()+'</span><div class="buttons d-flex flex-row"><div class="cart"><i class="fa fa-shopping-cart"></i></div> <button class="btn btn-success cart-button btn-block"><span class="dot">1</span>Add to cart </button></div><div class="weight"> <small>20 piece 2.5kg</small> </div></div></div></div>');




