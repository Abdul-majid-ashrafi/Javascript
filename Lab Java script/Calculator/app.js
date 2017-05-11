var display = document.getElementById('display'),
      value1, value2, oprateSign, calculateValue


// This function work for oprateSigns
function operat(sign) {
      oprateSign = sign
      display.innerHTML = oprateSign
}

//This function get number value
function cal(num) {
      num = num.toString()

      if (oprateSign == undefined) {
            if (value1 == undefined) {
                  value1 = num
            } else {
                  value1 += num
            }
            display.innerHTML = value1
      } else {
            if (value2 == undefined) {
                  value2 = num
            } else {
                  value2 += num
            }
            display.innerHTML = value2
      }
}

// This fucntion work to equal
function equal() {
      value1 = parseInt(value1)
      value2 = parseInt(value2)
      if (oprateSign == '+') {
            calculateValue = value1 + value2
      } else if (oprateSign == '-') {
            calculateValue = value1 - value2
      }
      display.innerHTML = calculateValue

}
