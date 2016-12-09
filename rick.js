/*
Rick.js - A script that is never gonna give you up, or let you down.
*/
document.addEventListener('DOMContentLoaded', function() {
  var anchors = document.getElementsByTagName('a');
  for (var i = 0; i < anchors.length; i++) {
   anchors[i].addEventListener('click', function(e) {
     e.preventDefault();
     e.stopPropagation();
    window.location.href='https://www.youtube.com/watch?v=oHg5SJYRHA0';
   });
  }
});
