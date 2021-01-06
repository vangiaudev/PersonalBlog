function animateNumber(finalNumber, delay, startNumber = 0, callback) {
    let currentNumber = startNumber
    const interval = window.setInterval(updateNumber, delay)
    function updateNumber() {
      if (currentNumber >= finalNumber) {
        clearInterval(interval)
      } else {
        currentNumber++
        callback(currentNumber)
      }
    }
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    animateNumber(20, 280, 0, function (number) {
      const formattedNumber = number.toLocaleString()
      document.getElementById('worked-count').innerText = formattedNumber
    })
    
    animateNumber(2, 2000, 0, function (number) {
      const formattedNumber = number.toLocaleString()
      document.getElementById('city-count').innerText = formattedNumber
    })
    
    animateNumber(50, 99, 0, function (number) {
      const formattedNumber = number.toLocaleString()
      document.getElementById('customer-count').innerText = formattedNumber
    })

    animateNumber(6, 1050, 0, function (number) {
        const formattedNumber = number.toLocaleString()
        document.getElementById('total-count').innerText = formattedNumber
    })
  })