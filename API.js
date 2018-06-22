'use strict';

/* global store, $, api */

const api = (function() {
  const BASE_URL = "https://thinkful-list-api.herokuapp.com/rpinto/bookmarks";

  const getBookmarks = function(callback) {
    $.getJSON(`${BASE_URL}`, callback);
    
  };

  const createBookmark = function(title, url, callback, errCallback) {
    const newItem = JSON.stringify({
      'title': title,
      'url': url,
    });
    $.ajax({
      'url': `${BASE_URL}`,
      'method': 'POST',
      'contentType': 'application/json',
      'data': newItem,
      'success': callback,
      'error': errCallback,
    });
  };

  const updateBookmark = function(id, updateData, callback, errCallback) { 
    console.log(updateData)
    $.ajax({ 
      'url': `${BASE_URL}/items/${id}`, 
      'method': 'PATCH', 
      'contentType': 'application/json', 
      'data': JSON.stringify(updateData), 
      'success': callback, 
      'error': errCallback,
    }); 
  };

  const deleteBookmark = function(id, callback, errCallback){
    $.ajax({
      'url': `${BASE_URL}/items/${id}`, 
      'method': 'DELETE',
      'success': callback,
      'error': errCallback,
    });
  };
  
  return {
    getBookmarks, createBookmark, updateBookmark, deleteBookmark
  };
}());