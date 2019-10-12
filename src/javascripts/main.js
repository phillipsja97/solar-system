import 'bootstrap';
import '../styles/main.scss';
import print from './components/printPlanets';
import hover from './components/cardHover/cardHover';

const init = () => {
  print.printPlanets();
  print.hideImage();
  print.hideText();
  hover.hoverImage();
};

init();
