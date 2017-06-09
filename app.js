var state = {
  items: []
};

var itemDataAttr = 'data-list-item-id';

function addItems(state, item){
  state.items.push(item);
}

function checkItem () {
  $(".shopping-item-toggle").click(function() {
    $(".shopping-item").addClass('shopping-item__checked');
  });
}

function removeItem(state, itemIndex) {
   var itemIndex = parseInt($(this).closest('li').attr(itemDataAttr));
  $(".shopping-item-delete").click(deleteItem(state, itemIndex));
}

function deleteItem(state, itemIndex) {
  var itemIndex = parseInt($(this).closest('li').attr(itemDataAttr));
  state.items.splice(itemIndex, 1);
}



var buildList = function (state) {
  var $template = $(".template");
  var itemsHTML = state.items.map(function(item) {
    var newItem = $template.clone();
    newItem.find(".shopping-item").text(item);
    newItem.removeClass("template");
    $('.shopping-list').append(newItem);
  });
    var itemDataAttr = 'data-list-item-id';
};

function formSubmit() {
$('#js-shopping-list-form').submit(function(event) {
  event.preventDefault();
  addItems(state, $('#shopping-list-entry').val());
  buildList(state);


});
}

$(function() {
  formSubmit();
});
