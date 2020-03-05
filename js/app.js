const inputs = document.querySelectorAll('.input');

function focusFunc(){
  let parent = this.parentNode.parentNode;
  parent.classList.add('focus');
}
function blurFunc(){
  let parent = this.parentNode.parentNode;
  if(this.value == ""){
    parent.classList.remove('focus');
  }
}

inputs.forEach(input => {
  input.addEventListener('focus', focusFunc);
  input.addEventListener('blur', blurFunc);
});

var y = new Date();
document.getElementById("yearr").innerHTML = y.getFullYear();

function clockTick() {
  var currentTime = new Date();
  // here we get the element with the id of "date" and change the content to the text variable we made above
  document.getElementById('time').innerHTML = currentTime;
}

// here we run the clockTick function every 1000ms (1 second)
setInterval(clockTick, 1000);
