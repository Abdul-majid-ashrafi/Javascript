var show = document.getElementById('timer'),
      miliseconds = 0,
      seconds = 0,
      minutes = 0

function add() {
      miliseconds++
      if (miliseconds >= 60) {
            miliseconds = 0
            seconds++
      } else if (seconds >= 60) {
            seconds = 0
            minutes++
      }

      show.innerHTML = (minutes ? (minutes > 9 ? minutes : '0' + minutes) : "00") + ':' + (seconds ? (seconds > 9 ? seconds : '0' + seconds) : "00") + ':' + (miliseconds ? (miliseconds > 9 ? miliseconds : '0' + miliseconds) : "00")
      timerStart()
}

function timerStart() {
      stop = setTimeout(add, 20)
}
timerStart()

function timerStop() {
      clearTimeout(stop)
}

function clearTimer() {
      clearTimeout(stop)
      show.innerHTML = '00:00:00'
      miliseconds = 0
      seconds = 0
}

