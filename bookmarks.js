'use strict';

/* global store, $, api */

const bookmarkList = (function(){

  // I can see a list of my bookmarks when I first open the app
  function generateBookmarkElement(bookmark) {
    //TODO: change template to a new version with more features
    return `<li>
              <div>${bookmark.title}</div>  
              <div>${bookmark.rating}</div>
            </li>  `

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

  
  // I can add bookmarks to my bookmark list.
  function handleAddNewBookmark() {
    $( "#add-button" ).click(function() {
      console.log("add button works")
      $( ".form-container" ).show();

    });  
  }

  // I can click on a bookmark to display the "detailed" view
  function handleDetailToggle() {

  }

  // I can remove bookmarks from my bookmark list
  function handleRemoveBookmark() {

  }

  // I can select from a dropdown a "minimum rating" to filter the list by all bookmarks rated above the chosen selection
  function handleRatingFilter() {

  }



    function bindEventListeners() {
      
      handleAddNewBookmark();
      handleDetailToggle();
      handleRemoveBookmark();
      handleRatingFilter();

    }

    return {
      render: render,
      bindEventListeners: bindEventListeners,
    };
}());