// Doc ready...
$(function() {

  // Add to-do
  $('input[type="text"]').on('keypress', function(e) {
    if (e.which === 13) {
      // Push input value to to-do list, and clear input
      $('#to-do li:nth-of-type(1)').after('<li><span>🗑️</span>' + $(this).val() + '</li>');
      $(this).val('');
    }
  });

  // Delete to-do
  $('.lists').on('click', 'span', function() {
    // Slide to-do, and remove
    $(this).parent().slideUp(200, function() {
      $(this).remove();
    });
  });

  // Drag and drop, with jQueryUI
  $('#to-do, #in-progress, #done').sortable({
      connectWith: '.shared-lists'
    });

});