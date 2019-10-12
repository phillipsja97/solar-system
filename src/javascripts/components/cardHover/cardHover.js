import $ from 'jquery';

const hoverImage = () => {
  $(() => {
    $('.individual-card').hover(() => {
      $('.card-img-top').show();
      $('.title').hide();
    }, () => {
      $('.card-img-top').hide();
      $('.title').show();
    });
  });
};

// const hover = () => {
//   let hoverImage = $('.individual-card').toArray;
//   console.log(hoverImage);
//   for (let i = 0; i < hoverImage.length; i++) {
//     if ($('.individual-card').hover( () => {
//       $('card-img-top').show();
//     }, () => {
//       $('.card-img-top').hide();
//     }
//     ))
//   }
// };


export default { hoverImage };
