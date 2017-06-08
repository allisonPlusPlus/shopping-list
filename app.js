var state = {
  items: []
};

function addItems(state, item) {
  state.items.push(item);
}

var renderList = function (state,element) {
  var itemsHTML = state.items.map(function(item) {
    return item;
  });
  elements.html(itemsHTML);
};
