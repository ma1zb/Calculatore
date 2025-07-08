let display = document.getElementById('display');

function addVal(val) {
  if (val === '=') {
    try {
      display.value = eval(display.value);
    } catch {
      display.value = 'Error';
    }
  } else {
    display.value += val;
  }
}

function cleardisplay() {
  display.value = '';
}
