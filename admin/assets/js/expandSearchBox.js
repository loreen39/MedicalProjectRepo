$('.dropdown-toggle').click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).closest('.search-dropdown').toggleClass('open');
  });
  
  $('.dropdown-menu > li > a').click(function(e) {
    e.preventDefault();
    var clicked = $(this);
    clicked.closest('.dropdown-menu').find('.menu-active').removeClass('menu-active');
    clicked.parent('li').addClass('menu-active');
    clicked.closest('.search-dropdown').find('.toggle-active').html(clicked.html());
  });
  
  $(document).click(function() {
    $('.search-dropdown.open').removeClass('open');
  });


/*   // Get references to the input and the data list
  var filterInput = document.getElementById('global-search');
  var dataList = document.getElementById('dataList');
  var listItems = dataList.getElementsByClassName('name');

  // Attach an event listener to the input for the 'input' event
  filterInput.addEventListener('input', function() {
    // Get the current value of the input
    var filterValue = filterInput.value.toLowerCase();

    // Loop through the list items and hide those that don't match the input
    for (var i = 0; i < listItems.length; i++) {
      var listItem = listItems[i];
      var itemText = listItem.textContent.toLowerCase();

      if (itemText.includes(filterValue)) {
        listItem.style.display = 'table-row'; // Show matching items
      } else {
        listItem.style.display = 'none'; // Hide non-matching items
      }
    }
  }); */


// Get references to the input and the table
var filterInput = document.getElementById('global-search');
var dataTable = document.getElementById('dataTable');
var rows = dataTable?.getElementsByTagName('tr');

// Attach an event listener to the input for the 'input' event
filterInput?.addEventListener('input', function() {
  // Get the current value of the input
  var filterValue = filterInput.value.toLowerCase();
  var sortBy = document.querySelector('.menu-active').textContent.toLowerCase();
  // Loop through the table rows and hide those that don't match the input
  for (var i = 1; i < rows.length; i++) {
    var row = rows[i];
    /* var cells = row.getElementsByTagName('td'); */
    var cells = row.getElementsByClassName(sortBy);
    var shouldShow = false;

    // Loop through the cells in the current row
    for (var j = 0; j < cells.length; j++) {
      var cellText = cells[j].textContent.toLowerCase();
      
      // If the cell text contains the filter value, show the row
      if (cellText.includes(filterValue)) {
        shouldShow = true;
        break; // No need to check other cells if one matches
      }
    }

    // Show or hide the row based on the filter result
    row.style.display = shouldShow ? 'table-row' : 'none';
  }
});