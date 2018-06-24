'use strict';

/* global store, $, api */

const bookmarkList = (function(){

  // I can see a list of my bookmarks when I first open the app
  function generateBookmarkElement(bookmark) {
    return `<li data-item-id="${bookmark.id}" class='js-bookmark-element'>
              <div class="js-title">${bookmark.title}</div>  
              <div>${bookmark.rating}</div>
              <div class="js-hide-element">
                <span>${bookmark.desc}</span>
                <a href="${bookmark.url}">Visit Site</a>
                <button type="submit" name="delete-bookmark" class="js-bookmark-delete">Delete</button>  
              </div>   
            </li>`
  }

  function generateBookmarkString(bookmarks) {
    const items = bookmarks.map((item) => generateBookmarkElement(item));
    return items.join('');
  }

  function render() {
    const items = store.items.filter(item => item.rating >= store.minRating);
    const bookmarkListItemsString = generateBookmarkString(items); 
    $('.js-bookmarks-list').html(bookmarkListItemsString);
  }

  // I can add bookmarks to my bookmark list.
  function toggleAddNewBookmarkForm() {
    $( "#add-button" ).click(function() {
      $( ".form-container" ).toggle();
    });  
  }

  function handleSubmitBookmark() {
      $( ".js-submit-form").on("submit", function(event) {
      event.preventDefault();
      const title = $("input[name=title]").val();
      const url = $("input[name=url]").val();
      const rating = $("input[name=rating]:checked").val();
      const description = $("textarea[name=description]").val();
      api.createBookmark(title, url, rating, description, function (newBookmark) {
        store.addItem(newBookmark);
        render();
      })
    })
  };


  //I can click on a bookmark to display the "detailed" view -- TOD0: this is happening in the DOM, we need to put it in the store
  function handleDetailToggle() {
    $(".js-bookmarks-list").on("click", ".js-title", function() {
       $(this).parent().find(".js-hide-element").toggle();
     });
   }

  // I can remove bookmarks from my bookmark list

  function getItemIdFromElement(item) {
    return $(item)
      .closest('.js-bookmark-element')
      .data('item-id');
  }

  function handleRemoveBookmark() {
    $(".js-bookmarks-list").on('click', '.js-bookmark-delete', event => {
      const id = getItemIdFromElement(event.currentTarget);
      api.deleteBookmark(id, () => { 
        store.findAndDelete(id);
        render();
      }, () => {
        alert("There was an error with your request");
      });
    });
  }
  
  // I can select from a dropdown a "minimum rating" to filter the list by all bookmarks rated above the chosen selection
  function handleRatingFilter() {
    $('.js-filter').on('click', event => {
      const val = $(event.currentTarget).val();
      store.minRating = val;
      render();
    });

  }

  //I can edit the rating and description of a bookmark in my list


    function bindEventListeners() {
      
      toggleAddNewBookmarkForm();
      handleSubmitBookmark();
      handleDetailToggle();
      handleRemoveBookmark();
      handleRatingFilter();


    }

    return {
      render: render,
      bindEventListeners: bindEventListeners,
    };
}());