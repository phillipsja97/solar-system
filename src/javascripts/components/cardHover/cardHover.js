import $ from 'jquery';

const hoverImage = () => {
  $('.individual-card').mouseenter((e) => {
    const card = $(e.target);
    card.find('.card-img-top').show();
    card.find('.title').hide();
  }); $('.individual-card').mouseleave((e) => {
    const card = $(e.target);
    card.find('.card-img-top').hide();
    card.find('.title').show();
  });
};


export default { hoverImage };
