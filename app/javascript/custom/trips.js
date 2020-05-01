/*document.addEventListener("DOMContentLoaded", function(){

  let token = document.querySelector('input[name = authenticity_token]').value
  let submit = document.querySelector('form.new_trip')

  if(submit){
    submit.addEventListener('submit', function(e){
      e.preventDefault();
      let name = document.querySelector('form.new_trip input#name')
      let user_id = document.querySelector('form.new_trip input#user_id')
      let configObject = {
        method: "POST",
        headers:{
          "Content-Type": 'application/json',
          "Accept": 'application/json'
        },
        body:JSON.stringify({
          authenticity_token: token,
          trip:{
            authenticity_token: token,
          name: name.value,
          user_id: user_id.value
          }
        })
      }



      fetch('http://localhost:3000/trips', configObject).then(resp => {
        return resp.json()
      }).then(json =>{
        console.log(json)
        appendTrip(json)
        name.value =""
      })
    })
  }

  //Trip Dates

  const trip_form = document.querySelector('form.edit_trip')
  const start = document.getElementsByName('trip[start]')[0].value
  const end = document.getElementsByName('trip[end]')[0].value
  const action = trip_form.action


  if(trip_form){
    trip_form.addEventListener('submit', (e)=>{
      e.preventDefault();

      let configObject = {
        method: "PATCH",
        headers:{
          "Content-Type": 'application/json',
          "Accept": 'application/json'
        },
        body:JSON.stringify({
          authenticity_token: token,
          trip:{
            start: start,
            end: end
          }
        })
      }

    fetch(`${action}`, configObject).then(resp => {
      console.log(resp)
      return resp.json()
    }).then(json =>{
      let dates = document.querySelector('div#dates')
      console.log(dates)
      console.log(json)
    })
  })
  }
})




function appendTrip(trip){
  let trips = document.querySelector('div#trips')
  let li = document.createElement('li')
  let a = document.createElement('a')
  a.setAttribute('href', `http://localhost:3000/trips/${trip.id}`)
  a.innerHTML = trip.name
  li.appendChild(a)
  trips.appendChild(li)
}
*/


$(function(){
  let a = $('.edit_trip')
  console.log(a)
  a.on('submit', function(e){
    e.preventDefault()
    $.post(this.action, $(this).serialize()).done(function(resp){
      console.log(resp)
      $('#dates').html(resp.trip)
      console.log(dates)
    })
  })
})
