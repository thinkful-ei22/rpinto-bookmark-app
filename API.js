'use strict';

/* global store, $, api */

const api = (function() {
  const BASE_URL = "https://thinkful-list-api.herokuapp.com/rpinto/bookmarks";

  const getBookmarks = function(callback) {
    $.getJSON(`${BASE_URL}/items`, callback);
    
    //callback('api module works!');
  };

  const createBookmark = function(name, callback, errCallback) {
    const newItem = JSON.stringify({
      'name': name,
    });
    $.ajax({
      'url': `${BASE_URL}/items`,
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