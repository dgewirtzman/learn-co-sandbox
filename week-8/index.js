//const title = document.querySelector('.title');
//const myLocation = document.querySelector('.location');

// async request
/*
let data = fetch('https://api.github.com/users/mirandamon').then((response) => {
  return response.json()
}).then((responseJson) => {
  title.innerHTML = responseJson.login
  myLocation.innerHTML = responseJson.location
})*/

let input = document.querySelector('#search-box')
input.addEventListener('keydown', (event) => {
  // start searching
  let value = input.value
  // fetch
  const configuration = {
    mode: 'no-cors',
    headers: {
      'Authorization': 'token dgewirtzman:a27e27c0eb67a2a0f5ce07188e1a2b4c2fd2d209' 
    }
  }
  fetch('https://api.github.com/search/repositories?q=' + value, configuration)
    .then(apiResponse => apiResponse.json())
    .then(responseJson => console.log(responseJson))
})
