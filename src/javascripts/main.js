import 'bootstrap';
import '../styles/main.scss';
import print from './components/printPlanets/printPlanets';
import hover from './components/cardHover/cardHover';
import card from './components/clickCard/clickCard';
import search from './components/searchBar/searchBar';

const init = () => {
  print.printPlanets();
  print.hideImage();
  hover.hoverImage();
  card.clickReveal();
  card.closeCard();
  search.searchBar();
};

init();
