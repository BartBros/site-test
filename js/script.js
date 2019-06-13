const $card = $('.card');
const $cardBody = $('.cb-hidden');
const $projectInfo = $('.project-info');
const $projectColumn = $('.project-column');

$($cardBody).hide();
$($projectInfo).hide();

$(document).ready(function () {
  $($card).on('mouseenter', function (event) {
    $(this).children($cardBody).show();
  });
  $($card).on('mouseleave', function (event) {
    $cardBody.hide();
  });
  $($projectColumn).on('mouseenter', function (event) {
    $(this).children($projectInfo).show();
  });
  $($projectColumn).on('mouseleave', function (event) {
    $($projectInfo).hide();
  });
});

$(document).on("click", "#next", function (e) {
  e.preventDefault();
  var id = $(this).attr("href")
  //alert(id);
  $('html, body').animate({
    scrollTop: $(id).offset().top
  }, 800);
  $('#section1').delay(800).hide(1);
  
});


$('.section').hide();
$('#section2').show();

// NAVIGATION
$('#section2').on('click', 'a', function (e) {
  e.preventDefault();
  $('#section2').hide(1000);
  $('#section3').delay(1000).show(1000);
});