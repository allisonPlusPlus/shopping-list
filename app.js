var state = {
  items: []
};

function addItems(state, item){
  state.items.push(item);
}

function checkItem () {
  $(".shopping-item-toggle").click(function() {
    $(".shopping-item").addClass('shopping-item__checked');
  });
}

var buildList = function (state) {
  var $template = $(".template");
  var itemsHTML = state.items.map(function(item) {
    var newItem = $template.clone();
    newItem.find(".shopping-item").text(item);
    newItem.removeClass("template");
    $('.shopping-list').append(newItem);
  });

checkItem();

};

function formSubmit() {
$('#js-shopping-list-form').submit(function(event) {
  event.preventDefault();
  addItems(state, $('#shopping-list-entry').val());
  buildList(state);
  // renderHTML(state);

});
}

$(function() {
  formSubmit();
});
