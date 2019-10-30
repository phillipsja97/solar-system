import $ from 'jquery';
import planet from '../../helpers/data/planets';
import utilities from '../../helpers/utilities';
import './clickCard.scss';
import cardHover from '../cardHover/cardHover';
import print from '../printPlanets/printPlanets';


const reveal = (singlePlanet) => {
  let domString = '';
  const planets = planet.getPlanets();
  for (let i = 0; i < planets.length; i += 1) {
    if (singlePlanet === `${planets[i].name}`) {
      domString = `
    <div class="card text-center">
    <button type="button" class="close d-flex justify-content-end" aria-label="Close">
    <span aria-hidden="true">&times;</span>
    </button>
  <div class="card-header">
    <h1>${planets[i].name}</h1>
  </div>
  <div class="card-body">
  <div id="image" class="d-flex justify-content-center">
    <img src="${planets[i].imageUrl}" class="card-img-top" alt="image of ${planets[i].name}">
  </div>
    <div class="card-text text-center">
    <h4>${planets[i].description}</h5>
    </div>
    <div class="info">
    <h2>Facts about ${planets[i].name}:</h2>
    <h4> ${planets[i].name} has ${planets[i].numberOfMoons} moons!</h6>
    <h4>The name of ${planets[i].name}' largest moon is ${planets[i].nameOfLargestMoon}</h6>
    </div>
  
    `;
    }
  }
  utilities.printToDom('fullCard', domString);
};


const clickReveal = () => {
  $('.individual-card').on('click', (event) => {
    const singlePlanet = event.target.id;
    reveal(singlePlanet);
    $('.searchBar').hide();
    $('#fullCard').css('position', 'absolute');
    $('#planet-card').html('');
  });
};

const closeCard = () => {
  $('body').on('click', '.close', () => {
    $('#fullCard').html('');
    $('.searchBar').show();
    print.printPlanets();
    print.hideImage();
    cardHover.hoverImage();
    clickReveal();
  });
};

// const clickReveal = () => {
//   $('individual-card').on('click', reveal, (e) => {
//     const fullCard = $(e.target);
//     fullCard.find('.card-text').show();
//   });
// };

export default { clickReveal, closeCard };
