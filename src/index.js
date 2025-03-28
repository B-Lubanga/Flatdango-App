//Ensure DOM has fully loaded before executing code
document.addEventListener("DOMContentLoaded",()=>{

  //Get elements from HTML
   let firstMovie=document.getElementById("first-Movie")
   let movieList=document.getElementById("movie-List")
   let movieDetails=document.getElementById("movie-Details")
   let button=document.getElementById("btn")
 
     //Fetch data from API, for the first movie
 
   fetch(" http://localhost:3000/films/1")  //http://localhost:3000/films/1
     .then(resp=>resp.json())
     .then(data=> displayFirstMovie(data))
     .catch(error=>console.log(error))
 
  //Display data for the first Movie
   function displayFirstMovie(films) {    
     let movie1=document.createElement("div")
     let tickets=(films.capacity-films.tickets_sold)
     console.log(tickets)
     movie1.innerHTML=`
         <h1> ${films.title}</h1>
         <img src='${films.poster}' alt="The Giant Monster">
         <h2> Film Synopsis: <br> ${films.description}</h2>
         <h2> Run-Time: ${films.runtime}</h2>
         <h1> Time: ${films.showtime}</h1>
         <h1> Remaining Tickets: ${tickets}</h1>
     `
     firstMovie.appendChild(movie1)
  }
 
  //Fetch Data for all movies from API
  fetch(" http://localhost:3000/films")  //http://localhost:3000/films
     .then(resp=>resp.json())
     .then(data=> movieNames(data))
     .catch(error=>console.log(error))
 
 //Display the names of all movies as a list on the DOM    
 function movieNames(films){   
     for (const film of films) {
         let li= document.createElement('li')
         li.innerHTML= `
         <h2>${film.title}</h2>` 
         movieList.appendChild(li)
 
 //Add click event to display movie details when you click on their names.
     li.addEventListener("click", function(){
             return moreMovieDetails(film)
         })
     }   
 }
        
 //Display full movie details on the page
 let newDiv= document.createElement("div")
 function moreMovieDetails(film){
     let ticket=(film.capacity-film.tickets_sold) 
     newDiv.innerHTML= `
          <h2> ${film.title} </h2>
          <img src='${film.poster}' alt="The Giant Monster">
          <h2> Film Synopsis: <br> ${film.description}</h2>
          <h2> Run-Time: ${film.runtime}</h2>
          <h1> Time: ${film.showtime}</h1>
          <h1 id="ticket"> Remaining Tickets: ${ticket}</h1>
  `
  movieDetails.appendChild(newDiv)
 
  //add Click Event to decrement ticken count when one buys a ticket
  button.addEventListener("click", ()=>{
     let showTicket= document.getElementById("ticket")
     if (ticket>1) {
          ticket--;
          showTicket.innerText=`Remaining Tickets: ${ticket}`
     } else {
        showTicket.innerText='Sold Out'
     } 
   })
 }
  
  
 
 })