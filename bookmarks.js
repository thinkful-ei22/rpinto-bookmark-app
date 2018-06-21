'use strict';

/* global store, $, api */

const bookmarkList = (function(){

  // I can see a list of my bookmarks when I first open the app
  function generateBookmarkList() {

  }

  function generateBookmarkString() {

  }

  function render() {

  }

  // I can add bookmarks to my bookmark list.
  function handleAddNewBookmark() {
    $( "#add-button" ).click(function() {
      alert("button clicked");
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
      generateBookmarkList()
      generateBookmarkString()
      handleAddNewBookmark()
      handleDetailToggle()
      handleRemoveBookmark()
      handleRatingFilter()

    }

    return {
      render: render,
      bindEventListeners: bindEventListeners,
    };
}());