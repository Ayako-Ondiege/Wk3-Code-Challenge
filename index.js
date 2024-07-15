document.addEventListener('DOMContentLoaded', () => {
    const filmsList = document.getElementById('films');
    const poster = document.getElementById('poster'); 
    const title = document.getElementById('title');        
    const runtime = document.getElementById('runtime');
    const showtime = document.getElementById('showtime');
    const description = document.getElementById('description');
    const availableTickets = document.getElementById('available-tickets');
    const buyTicketBtn = document.getElementById('buy-ticket-btn');
  
    // Fetch and display the first movie's details
    fetch('http://localhost:3000/films/1')
      .then(response => response.json())
      .then(film => {
        displayFilmDetails(film);
      });
  
    // Fetch and display all movies in the sidebar
    fetch('http://localhost:3000/films')
      .then(response => response.json())
      .then(films => {
        filmsList.innerHTML = '';
        films.forEach(film => {
          const filmItem = document.createElement('li');
          filmItem.classList.add('film-item');
          filmItem.textContent = film.title;
          filmItem.addEventListener('click', () => {
            displayFilmDetails(film);
          });
          filmsList.appendChild(filmItem);
        });
      });
  
  });
  