var state = {
  items: []
};

var itemDataAttr = 'data-list-item-id';

function addItems(state, item){
  state.items.push(item);
}


  $(".shopping-list").on("click", ".shopping-item-toggle", function(event) {
     var itemIndex = parseInt($(this).closest('li').attr(itemDataAttr));
    checkItem(event);
  });

function checkItem(event) {
$(".shopping-item").addClass("shopping-item__checked");
}


  $(".shopping-list").on("click", ".shopping-item-delete", function (event) {
     var itemIndex = parseInt($(this).closest('li').attr(itemDataAttr));
     deleteItem(event);
     buildList(state);
  });

function deleteItem(event) {
  var itemIndex = parseInt($(event.target).closest('li').index() - 1);
  state.items.splice(itemIndex, 1);
  buildList(state);
}



var buildList = function (state) {
  var $template = $(".template");
  //-- Clearing out the template first
  $('.shopping-list li:not(".template")').remove();
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
