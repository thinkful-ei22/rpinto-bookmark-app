'use strict'

const store = (function(){
  let items = [ ];

  const addItem = function(item) {
    this.items.push(item);
  };
  
  const findAndDelete = function(id) {
    this.items = this.items.filter(item => item.id !== id);
  };

  return {
    items: items,
    filterValue: 0,
    showDetail: false,
    error: false,
    addItem,
    findAndDelete,
  };

}());
