'use strict'

const store = (function(){
  let items = [
    {
      "uuid": 128309,
      "title": "Article one",
      "url": "www.articleone.com",
      "rating": 3 ,
    },
    {
      "uuid": 13452,
      "title": "Article two",
      "url": "www.articletwo.com",
      "rating": 4 ,
    },
  ];
  

  return {
    items: items,
    filterValue: 0,
    showForm: false,
    error: false,

  };

}());
