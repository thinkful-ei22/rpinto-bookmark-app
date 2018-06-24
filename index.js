'use strict';

$(document).ready(function() {
  
  bookmarkList.bindEventListeners();
  
  api.getBookmarks(function (bookmarks) {
    console.log(bookmarks);
    bookmarks.forEach(bookmark => store.addItem(Object.assign({}, bookmark, {showDetail: false})));
    console.log(store.items);
    bookmarkList.render();
  });

});

