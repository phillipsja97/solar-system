import $ from 'jquery';
// import print from '../printPlanets/printPlanets';
import planet from '../../helpers/data/planets';
import print from '../printPlanets/printPlanets';

const searchBar = () => {
  const planets = planet.getPlanets();
  $('.searchBar').on('keyup', () => {
    const input = $('#input').val().toLowerCase();
    console.log(input);
    const planetNames = planets.filter((x) => x.name.toLowerCase().includes(input));
    print.printPlanets(planetNames);
    print.hideImage();
  });
};

export default { searchBar };
