import utilities from '../helpers/utilities';
import planet from '../helpers/data/planets';
import './printPlanets.scss';

const printPlanets = () => {
  const planets = planet.getPlanets();
  let domString = '';
  for (let i = 0; i < planets.length; i += 1) {
    domString += `
    <div class="planet-card" style="width: 25rem;">
    <div class="individual-card text-center">
    <h2>${planets[i].name}</h2>
    </div>
    </div>
    `;
  }
  utilities.printToDom('planet-card', domString);
};

export default { printPlanets };
