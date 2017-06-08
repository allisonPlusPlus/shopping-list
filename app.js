var state = {
  items: []
};

function addItems(state, item){
  state.items.push(item);
}

function renderHTML(state) {
$(".shopping-item").append(state.items);
}

// var renderList = function (state,element) {
//   var itemsHTML = state.items.map(function(item) {
//     return item;
//   });
//   elements.html(itemsHTML);
// };

function formSubmit() {
$('#js-shopping-list-form').submit(function(event) {
  event.preventDefault();
  addItems(state, $('#shopping-list-entry').val());
  // renderList(state, $('.shopping-item'));
  renderHTML(state);

});
}

$(function() {
  formSubmit();
});
