// }
const inputData = document.querySelector('[name="birthday"]')
const image = document.getElementsByTagName('body')
const years = document.getElementById('years')
const months = document.getElementById('months')
const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

document.body.style.backgroundImage = "url('bg.jpg')"

function checkdate() {
  const getDate = inputData.value
  const birtdate = new Date(getDate)
  const currentDate = new Date()

  if (currentDate.getTime() < birtdate.getTime()) {
    alert('dogru gir su tarihi')
    location.reload()
  } else {
    setInterval(updateDate, 1000)
  }
}

function updateDate() {
  const getDate = inputData.value
  const birtdate = new Date(getDate)

  const currentDate = new Date()
  realDiff = currentDate.getTime() - birtdate.getTime()

  yil = +(currentDate.getFullYear() - birtdate.getFullYear())

  ay = +(currentDate.getMonth() - birtdate.getMonth())
  if (ay < 0) {
    ay += 12
    --yil
    if (yil < 0) yil = 0
  }
  gun = +(currentDate.getDate() - birtdate.getDate())

  if (gun < 0) {
    gun += 30
    --ay
    if (ay < 0) {
      ay += 12
      --years
    }
  }

  console.log(currentDate.getDay())
  console.log(birtdate.getDay())
  years.innerText = yil
  months.innerText = ay
  days.innerText = gun
  hours.innerText = currentDate.getHours() - birtdate.getHours()
  minutes.innerText = currentDate.getMinutes() - birtdate.getMinutes()

  saniye = currentDate.getSeconds() - birtdate.getSeconds()
  seconds.innerText = saniye
  document.body.style.backgroundImage = `url('https://picsum.photos/800/1200?random=${saniye}')`
}

inputData.addEventListener('change', () => {
  checkdate()
})
