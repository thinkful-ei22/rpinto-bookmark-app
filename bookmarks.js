'use strict';

/* global store, $, api */

const bookmarkList = (function(){

  // I can see a list of my bookmarks when I first open the app
  function generateBookmarkElement(bookmark) {
    //TODO: change template to a new version with more features
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
    let items = store.items;
    console.log('`render` ran');
    const bookmarkListItemsString = generateBookmarkString(items);
    $('.js-bookmarks-list').html(bookmarkListItemsString);
  }


  //I can click on a bookmark to display the "detailed" view -- TOD0: this is happening in the DOM, we need to put it in the store
  function handleDetailToggle() {
   $(".js-bookmarks-list").on("click", ".js-title", function() {
      $(this).parent().find(".js-hide-element").toggle();
    });

  }
  // I can add bookmarks to my bookmark list.
  function toggleAddNewBookmarkForm() {
    $( "#add-button" ).click(function() {
      console.log("add button works")
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
        console.log(description);
      api.createBookmark(title, url, rating, description, function (newBookmark) {
        store.addItem(newBookmark);
        render();
      })
    })
  };

  function getItemIdFromElement(item) {
    return $(item)
      .closest('.js-bookmark-element')
      .data('item-id');
  }

  // I can remove bookmarks from my bookmark list
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

  }



    function bindEventListeners() {
      
      toggleAddNewBookmarkForm();
      handleDetailToggle();
      handleRatingFilter();
      handleSubmitBookmark();
      handleRemoveBookmark();

    }

    return {
      render: render,
      bindEventListeners: bindEventListeners,
    };
}());