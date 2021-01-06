
// // ------------------------countdown
window.onload = function(){
  function countDown() {

    var countDate = new Date("Aug 01, 2021 00:00:00").getTime();
    var now = new Date().getTime();
    var sec = 1000;
    var min = sec * 60;
    var hr = min * 60;
    var day = hr * 24;
    var pos = countDate-now;


  document.getElementById("day").innerText = Math.floor(pos / day);
  document.getElementById("hr").innerText = Math.floor((pos % day) / hr);
  document.getElementById("min").innerText = Math.floor((pos % hr) / min);
  document.getElementById("sec").innerText = Math.floor((pos % min) / sec);
}

setInterval(function () {
  countDown();
}, 1000);  

}
