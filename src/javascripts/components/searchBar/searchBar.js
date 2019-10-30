import $ from 'jquery';
// import print from '../printPlanets/printPlanets';
import planet from '../../helpers/data/planets';
// import print from '../printPlanets/printPlanets';

const searchBar = () => {
  const planets = planet.getPlanets();
  $('.searchBar').on('keyup', () => {
    const input = $('#input').val().toLowerCase();
    console.log(input);
    const planetNames = planets.filter((x) => x.name.toLowerCase().includes(input));
    for (let i = 0; i < planetNames.length; i += 1) {
      // for (let j = 0; i < planets[j].length; i += 1) {
      $('.planet-card').each(() => {
        console.log($(this));
        if ($(this).attr('id') === planetNames[i].name) {
          $(this).show();
        } else {
          $(this).hide();
        }
      });
    }
    // set up a conditional to check if Planets.name === planetNames.name, if so show. if not, hide.
    // may need to set up a double loop through planets to be able to check  the name match.
  });
};

export default { searchBar };
