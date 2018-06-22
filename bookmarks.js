'use strict';

/* global store, $, api */

const bookmarkList = (function(){

  // I can see a list of my bookmarks when I first open the app
  function generateBookmarkElement(bookmark) {
    //TODO: change template to a new version with more features
    return `<li>
              <div class="js-title">${bookmark.title}</div>  
              <div>${bookmark.rating}</div>
              <div class="js-hide-element">${bookmark.description}</div>    
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

  $(".js-bookmarks-list").on("click", ".js-title", function() {
    $(this).parent().find(".js-hide-element").show();
  } )

  //I can click on a bookmark to display the "detailed" view
  function handleDetailToggle() {


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
      const title = $("input[name = title]").val();
      const url = $("input[name = url]").val();
      const description = $("input[name = url]").val();
      api.createBookmark(title, url, description, function (newBookmark) {
        store.addItem(newBookmark);
        render();
      })
    })
  };


  // I can remove bookmarks from my bookmark list
  function handleRemoveBookmark() {
    $('.js-bookmark-detail').on('click', '.js-item-delete', event => {
        
        const id = getItemIdFromElement(event.currentTarget);
        api.deleteItem(id, () => {
          console.log(handleRemoveBookmark, "remove button");
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