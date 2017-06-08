var state = {
  items: []
};

function addItems(state, item){
  state.items.push(item);
}

// function renderHTML(state) {
// $(".shopping-item").append(state.items);
// }

var buildList = function (state,element) {
  var itemsHTML = state.items.map(function(item) {
    return item;
  });
  element.html(itemsHTML);
};

function formSubmit() {
$('#js-shopping-list-form').submit(function(event) {
  event.preventDefault();
  addItems(state, $('#shopping-list-entry').val());
  buildList(state, $('.shopping-item'));
  // renderHTML(state);

});
}

$(function() {
  formSubmit();
});
