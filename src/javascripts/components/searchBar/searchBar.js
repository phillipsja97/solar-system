import $ from 'jquery';

const searchBar = () => {
  $('.searchBar').on('keyup', () => {
    const input = $('#input').val().toLowerCase();
    $('.planet-card').each((index, card) => {
      if (card.id.toLowerCase().includes(input)) {
        $(card).show();
      } else {
        $(card).hide();
      }
    });
  });
};

export default { searchBar };
