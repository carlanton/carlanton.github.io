var gcd = function (n, m) {
  var r = 0;
  while (n !== 0) {
    r = m % n;
    m = n;
    n = r;
  }
  return m;
};
    
function changeEventHandler(event) {
  var frameRate = parseInt(document.querySelector('input[name="frameRate"]').value) || 0;
  var sampleRate = parseInt(document.querySelector('select[name="sampleRate"]').value) || 0;
  var samplesPerFrame = parseInt(document.querySelector('select[name="samplesPerFrame"]').value) || 0;
  var gopSize = frameRate * samplesPerFrame / gcd(frameRate * samplesPerFrame, sampleRate);
  var tbody = document.getElementById('tbody');

  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }
  
  for (var size = gopSize; size <= 1000; size += gopSize) {
      var row = tbody.insertRow();
      row.insertCell(0).appendChild(document.createTextNode(size));
      row.insertCell(1).appendChild(document.createTextNode(size / frameRate));
  }
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('select[name="sampleRate"]').onchange = changeEventHandler;
  document.querySelector('select[name="samplesPerFrame"]').onchange = changeEventHandler;
  document.querySelector('input[name="frameRate"]').onchange = changeEventHandler;

  changeEventHandler();
}, false);
