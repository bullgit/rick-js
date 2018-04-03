/*
Rick.js - A script that is never gonna give you up, or let you down.
*/
document.addEventListener('DOMContentLoaded', function() {
  var anchors = document.getElementsByTagName('a');
  for (var i = 0; i < anchors.length; i++) {
   anchors[i].addEventListener('click', function(e) {
     e.preventDefault();
     e.stopPropagation();
     window.location.href=atob('aHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1vSGc1U0pZUkhBMA==');
   });
  }
});
