import 'bootstrap';
import '../styles/main.scss';
import print from './components/printPlanets';

const init = () => {
  print.printPlanets();
  print.hideImage();
  print.hideText();
  print.hoverImage();
};

init();
