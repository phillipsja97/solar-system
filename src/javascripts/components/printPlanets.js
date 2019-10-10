import $ from 'jquery';
import utilities from '../helpers/utilities';
import planet from '../helpers/data/planets';
import './printPlanets.scss';

const printPlanets = () => {
  const planets = planet.getPlanets();
  let domString = '';
  for (let i = 0; i < planets.length; i += 1) {
    domString += `
    <div class="planet-card" style="width: 25rem;">
    <div id="individual-card">
    <h2 class="title text-center">${planets[i].name}</h2>
    <div class="image d-flex justify-content-center">
    <img src="${planets[i].imageUrl}" class="card-img-top" alt="image of ${planets[i].name}">
    </div>
    <div class="card-text text-center">
    <p>${planets[i].description}</p>
    </div>
    </div>
    </div>
    `;
  }
  utilities.printToDom('planet-card', domString);
};

const hideImage = () => {
  $('.card-img-top').hide();
};

const hideText = () => {
  $('.card-text').hide();
};

const hoverImage = () => {
  $( () => {
    $('#individual-card').hover( () => {
      $('.card-img-top').show();
    }, () => {
      $('.card-img-top').hide();
    });
  });
};

export default
{
  printPlanets,
  hideImage,
  hideText,
  hoverImage,
};
