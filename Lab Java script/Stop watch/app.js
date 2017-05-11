var show = document.getElementById('timer'),
      seconds = 0,
      minutes = 0,
      hours = 0

function add() {
      seconds++
      if (seconds >= 60) {
            seconds = 0
            minutes++
      } else if (minutes >= 60) {
            minutes = 0
            hours++
      }


      show.innerHTML = hours + ':' + minutes + " : " + seconds
      timerStart()
}

function timerStart() {
      stop = setTimeout(add, 1000)
}
timerStart()

function timerStop() {
      clearTimeout(stop)
}

function clearTimer() {
      clearTimeout(stop)
      show.innerHTML = '00:00:00'
      seconds = 0
      minutes = 0
}

