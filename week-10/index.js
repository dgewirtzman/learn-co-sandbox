const API_KEY = 'lJ65HhJeG9IIMhjD3giSXAfJOUPvL2W4'

document.addEventListener('DOMContentLoaded', (event) => {
  navigator.geolocation.getCurrentPosition((position) => console.log(position))
  document.addEventListener('submit', (event) => {
    event.preventDefault()
    const input = document.getElementById('ticketmaster-search')
    const value = input.value
    fetch(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${value}&apikey=${API_KEY}`)
    .then(response => response.json())
    .then(responseJson => {
      console.log(responseJson)
      makeEvents(responseJson)
      })
  })
})

function makeEvents(json) {
  const container = document.getElementById('events-container')
  const events = json._embedded.events
  events.forEach((event) => {
    const eventDiv = document.createElement('div')
    const eventH1 = document.createElement('h1')
    const eventDates = document.createElement('p')
    const eventPrices = document.createElement('p')
    const eventImages = document.createElement('img')
    eventH1.innerHTML = event.name
    eventDates.innerHTML = event.dates.start.localDate + " / " + event.dates.start.localTime
    eventPrices.innerHTML = "$" + event.priceRanges[0].min + " – $" + event.priceRanges[0].max
    eventImages.src = event.images[0].url
    eventDiv.appendChild(eventH1)
    eventDiv.appendChild(eventImages)
    eventDiv.appendChild(eventDates)
    eventDiv.appendChild(eventPrices)
    eventDiv.classList.add('card', 'white')
    container.appendChild(eventDiv)
  })
}