var display = document.getElementById('display'),
      value1, value2, operator


// This function work for operators
function operat(sign) {
      console.log(sign)
      operator = sign
      display.innerHTML = sign
}

//This function get number value
function cal(num) {
      num = num.toString()

      if (operator == undefined) {
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

      console.log('value1', value1)
      console.log('value2', value2)
      console.log('operator', operator)
}

// This fucntion work to equal
function equal() { }
