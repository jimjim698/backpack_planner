document.addEventListener("DOMContentLoaded", function(){


  let submit = document.querySelector('form.new_trip')

  submit.addEventListener('submit', function(e){
    e.preventDefault();
    let name = document.querySelector('form.new_trip input#name')
    let user_id = document.querySelector('form.new_trip input#user_id')
    console.log(user_id)

    let configObject = {
      method: "POST",
      headers:{
        "Content-Type": 'application/json',
        "Accept": 'application/json'
      },
      body:JSON.stringify({
        trip:{

        name: name.value,
        user_id: user_id.value
        }
      })
    }

    fetch('http://localhost:3000/trips', configObject).then(resp => {
      return resp.json()
    }).then(json =>{
      appendTrip(json)
    })
  })
})


function appendTrip(trip){
  let trips = document.querySelector('div#trips')
  let li = document.createElement('li')
  li.innerHTML = trip.name
  trips.appendChild(li)
}
