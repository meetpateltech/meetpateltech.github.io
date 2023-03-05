var updating = document.getElementById('updating');
var str = updating.innerHTML;
var i = 0;

updating.innerHTML = "";

function typeWriter() {
  if (i < str.length) {
    updating.innerHTML += str.charAt(i);
    i++;
    setTimeout(typeWriter, 100); // Change the delay time as per your requirement
  }
}

window.onload = function() {
  updating.style.visibility = "visible";
  typeWriter();
};
