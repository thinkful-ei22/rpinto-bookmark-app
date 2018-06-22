'use strict';

$(document).ready(function() {
  
  bookmarkList.bindEventListeners();
  
  api.getBookmarks(function (bookmarks) {
    bookmarks.forEach(bookmark => store.addItem(bookmark));
    bookmarkList.render();
  });

});

