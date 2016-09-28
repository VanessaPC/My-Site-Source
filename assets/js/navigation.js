$(document).ready(function() {
  var navIcon = $('.navicon');
    cp = $('.container');
  navIcon.on('click',function() {
    cp.toggleClass('display');
  });
});
